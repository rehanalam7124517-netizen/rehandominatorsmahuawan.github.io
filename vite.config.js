import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function copyWebAssetsPlugin() {
  const safeStaticFiles = [
    'firebase-config.js',
    'apple-touch-icon.png',
    'pwa-192x192.png',
    'pwa-512x512.png',
    'pwa-maskable-512x512.png',
    'robots.txt',
    'sitemap.xml',
    'googlecd319e61dfe51dd1.html'
  ];
  const safeStaticDirs = [
    'assets',
    'src/assets'
  ];

  function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, entry.name);
      const d = path.join(dest, entry.name);
      if (entry.isDirectory()) copyDir(s, d);
      else fs.copyFileSync(s, d);
    }
  }

  const mimeTypes = {
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.txt': 'text/plain; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
    '.html': 'text/html; charset=utf-8'
  };

  function resolveSafeAsset(urlPath) {
    const cleanPath = decodeURIComponent((urlPath || '').split('?')[0]).replace(/^\/+/, '');
    if (!cleanPath || cleanPath.includes('..')) return null;
    const isSafeFile = safeStaticFiles.includes(cleanPath);
    const isSafeDir = safeStaticDirs.some((dir) => cleanPath.startsWith(`${dir}/`));
    if (!isSafeFile && !isSafeDir) return null;
    const absPath = path.resolve(process.cwd(), cleanPath);
    if (!absPath.startsWith(process.cwd()) || !fs.existsSync(absPath)) return null;
    if (!fs.statSync(absPath).isFile()) return null;
    return absPath;
  }

  return {
    name: 'rdm-copy-web-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const assetPath = resolveSafeAsset(req.url);
        if (!assetPath) return next();
        const ext = path.extname(assetPath).toLowerCase();
        res.statusCode = 200;
        res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
        fs.createReadStream(assetPath).pipe(res);
      });
    },
    writeBundle(options) {
      const outDir = options.dir || path.resolve(process.cwd(), 'dist');
      for (const file of safeStaticFiles) {
        const srcPath = path.resolve(process.cwd(), file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, path.join(outDir, file));
        }
      }
      for (const dir of safeStaticDirs) {
        copyDir(path.resolve(process.cwd(), dir), path.join(outDir, dir));
      }
      const appManifest = path.resolve(process.cwd(), 'android-web/site.webmanifest');
      if (fs.existsSync(appManifest)) {
        fs.copyFileSync(appManifest, path.join(outDir, 'site.webmanifest'));
      }
    }
  };
}

export default defineConfig({
  root: path.resolve(process.cwd(), 'android-web'),
  publicDir: false,
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  build: {
    outDir: path.resolve(process.cwd(), 'dist'),
    emptyOutDir: true
  },
  plugins: [copyWebAssetsPlugin()]
});
