import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function copyStaticFilesPlugin() {
  const staticFiles = [
    'app.js',
    'access-links.js',
    'admin-player-manager.js',
    'enhancements.js',
    'firebase-backend.js',
    'firebase-config.js',
    'firebase-login.js',
    'forms-v6821.js',
    'gallery-v686.js',
    'rdm-global-mini.js',
    'rdm-pwa.js',
    'rdm-v6900.js',
    'rdm-v6901.js',
    'rdm-v6902.js',
    'updates.js',
    'v6.js',
    'style.css',
    'rdm-v6890-fix.css',
    'site.webmanifest',
    'sw.js',
    'robots.txt',
    'sitemap.xml',
    'googlecd319e61dfe51dd1.html'
  ];
  const staticDirs = ['assets', 'src/assets'];

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

  return {
    name: 'rdm-copy-static',
    writeBundle(options) {
      const outDir = options.dir || 'dist';
      for (const file of staticFiles) {
        if (fs.existsSync(file)) {
          fs.copyFileSync(file, path.join(outDir, file));
        }
      }
      for (const dir of staticDirs) {
        copyDir(dir, path.join(outDir, dir));
      }
    }
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [copyStaticFilesPlugin()]
});
