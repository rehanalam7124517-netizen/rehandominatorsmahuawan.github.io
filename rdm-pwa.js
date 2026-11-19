(function(){
  'use strict';

  const PAGE_TITLES = {
    home: 'Home',
    squad: 'Squad',
    matches: 'Matches',
    records: 'Records',
    tournaments: 'Tournaments',
    lineup: 'Playing XI',
    honours: 'Honours',
    socials: 'Socials',
    gallery: 'Gallery',
    news: 'News',
    updates: 'Updates',
    download: 'Get App',
    profile: 'My App',
    admin: 'Admin App'
  };

  const ICONS = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',
    squad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    matches: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    records: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    brand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>'
  };

  function isStandalone(){
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function isAppMode(){
    if (isStandalone()) return true;
    try {
      if (new URLSearchParams(location.search).get('app') === '1') return true;
      return sessionStorage.getItem('rdm-app-mode') === '1';
    } catch {
      return false;
    }
  }

  function syncRootModeClasses(){
    const st = isStandalone();
    const app = isAppMode();
    document.documentElement.classList.toggle('rdm-standalone', st);
    document.documentElement.classList.toggle('rdm-app-mode', app);
    const exitBtn = document.getElementById('rdmAppWebExitBtn');
    if (exitBtn) exitBtn.hidden = !(app && !st);
  }

  function portalManifestHref(){
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role !== 'admin' && role !== 'player') return null;
    const key = (new URLSearchParams(location.search).get('key') || '').trim();
    if (!key) return null;
    return new URL('rdm-portal.webmanifest?key=' + encodeURIComponent(key) + '&v=7700', location.href).href;
  }

  function upgradePortalManifestUrl(){
    const targetHref = portalManifestHref();
    if (!targetHref) return;
    if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
    const link = document.getElementById('rdmManifestLink');
    if (link && link.getAttribute('href') !== targetHref) {
      link.setAttribute('href', targetHref);
    }
  }

  if ('serviceWorker' in navigator) {
    const regSW = () => {
      navigator.serviceWorker.register('sw.js?v=7700').then(reg => {
        if (reg && reg.active) upgradePortalManifestUrl();
      }).catch(console.warn);
      navigator.serviceWorker.addEventListener('controllerchange', upgradePortalManifestUrl);
      navigator.serviceWorker.ready.then(upgradePortalManifestUrl).catch(() => {});
    };
    if (document.readyState === 'complete') regSW();
    else window.addEventListener('load', regSW, { once: true });
  }

  let promptEvent = null;

  function portalAppLabel(){
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role === 'admin') {
      return {
        noun: 'Admin App',
        title: 'RDM Admin Studio',
        desc: 'Install the dedicated Admin control app onto your home screen — opens directly as an offline-ready app.'
      };
    }
    if (role === 'player') {
      const pName = (typeof window.D !== 'undefined' && window.session?.playerId)
        ? (window.D.players.find(p => p.id === window.session.playerId)?.name || 'My Profile')
        : 'My Profile';
      return {
        noun: 'My App',
        title: pName + ' · RDM App',
        desc: 'Install your personal player app directly onto your home screen — works offline with instant 1-tap access.'
      };
    }
    return {
      noun: 'RDM App',
      title: 'Rehan Dominators App',
      desc: 'Direct Play-Store style install — no Play Store needed, works offline with native bottom navigation.'
    };
  }

  function currentActivePageId(){
    const active = document.querySelector('main .page.active');
    return active?.id || 'home';
  }

  function updateAppHeaderTitle(pageId){
    const el = document.getElementById('rdmAppScreenTitle');
    if (!el) return;
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role === 'admin') el.textContent = 'Admin Studio';
    else if (role === 'player') el.textContent = 'Player Portal';
    else el.textContent = PAGE_TITLES[pageId] || 'Official Club';
  }

  function buildBottomNav(){
    const bar = document.getElementById('rdmBottomNav');
    if (!bar) return;
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role === 'admin') {
      bar.innerHTML = [
        ['overview', 'Studio', ICONS.home],
        ['players', 'Players', ICONS.squad],
        ['branding', 'Branding', ICONS.brand],
        ['links', 'Share Links', ICONS.link]
      ].map(([act, label, svg], idx) =>
        `<button type="button" class="rdmTabBtn ${idx === 0 ? 'active' : ''}" data-app-scroll="${act}">${svg}<span>${label}</span></button>`
      ).join('');
      return;
    }
    if (role === 'player') {
      bar.innerHTML = [
        ['profile-top', 'Profile', ICONS.profile],
        ['profile-avail', 'Status', ICONS.check],
        ['profile-stats', 'Stats', ICONS.records],
        ['profile-edit', 'Edit', ICONS.edit]
      ].map(([act, label, svg], idx) =>
        `<button type="button" class="rdmTabBtn ${idx === 0 ? 'active' : ''}" data-player-tab="${act}">${svg}<span>${label}</span></button>`
      ).join('');
      return;
    }
    const activeId = currentActivePageId();
    const primaryTabs = ['home', 'squad', 'matches', 'records'];
    const isMoreActive = !primaryTabs.includes(activeId);
    bar.innerHTML = [
      ['home', 'Home', ICONS.home],
      ['squad', 'Squad', ICONS.squad],
      ['matches', 'Matches', ICONS.matches],
      ['records', 'Records', ICONS.records]
    ].map(([id, label, svg]) =>
      `<button type="button" class="rdmTabBtn ${activeId === id ? 'active' : ''}" data-app-page="${id}">${svg}<span>${label}</span></button>`
    ).join('') +
      `<button type="button" class="rdmTabBtn ${isMoreActive ? 'active' : ''}" data-app-more="1">${ICONS.more}<span>More</span></button>`;
  }

  function syncBottomNavActive(pageId){
    const bar = document.getElementById('rdmBottomNav');
    if (!bar) return;
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role === 'public') {
      const primary = ['home', 'squad', 'matches', 'records'];
      bar.querySelectorAll('[data-app-page]').forEach(b => b.classList.toggle('active', b.dataset.appPage === pageId));
      const moreBtn = bar.querySelector('[data-app-more]');
      if (moreBtn) moreBtn.classList.toggle('active', !primary.includes(pageId));
    }
    updateAppHeaderTitle(pageId);
  }

  function openMoreSheet(){
    const sheet = document.getElementById('rdmAppMoreSheet');
    if (!sheet) return;
    const activeId = currentActivePageId();
    const tiles = [
      ['tournaments', '🏆', 'Tournaments'],
      ['lineup', '🏏', 'Playing XI'],
      ['honours', '🎖️', 'Honours'],
      ['gallery', '🖼️', 'Gallery'],
      ['news', '📰', 'Team News'],
      ['updates', '📢', 'Updates'],
      ['socials', '🔗', 'Socials']
    ];
    if (!isStandalone()) {
      tiles.push(['download', '📲', 'Install App']);
    }
    const grid = sheet.querySelector('#rdmMoreGrid');
    if (grid) {
      grid.innerHTML = tiles.map(([id, ico, lbl]) =>
        `<button type="button" class="rdmMoreTile ${activeId === id ? 'active' : ''}" data-more-page="${id}"><i>${ico}</i><span>${lbl}</span></button>`
      ).join('') +
      `<button type="button" class="rdmMoreTile" id="rdmMoreShareBtn"><i>📤</i><span>Share App</span></button>`;
    }
    sheet.classList.add('show');
    sheet.hidden = false;
  }

  function closeMoreSheet(){
    const sheet = document.getElementById('rdmAppMoreSheet');
    if (!sheet) return;
    sheet.classList.remove('show');
    sheet.hidden = true;
  }

  function wireGoSync(){
    if (typeof window.go === 'function' && !window.go.__rdmAppWrapped) {
      const origGo = window.go;
      const wrapped = function(id){
        const res = origGo.apply(this, arguments);
        const nowId = currentActivePageId();
        syncBottomNavActive(nowId);
        closeMoreSheet();
        return res;
      };
      wrapped.__rdmAppWrapped = true;
      window.go = wrapped;
    }
  }

  async function copyTextFallback(text){
    try {
      if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(text); return true; }
    } catch {}
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }

  window.rdmShareApp = async function(btn){
    const info = portalAppLabel();
    const url = location.href;
    const text = `${info.title} — Open directly & install on home screen (no Play Store needed):`;
    if (navigator.share) {
      try {
        await navigator.share({ title: info.title, text, url });
        return;
      } catch (e) {
        if (e && e.name === 'AbortError') return;
      }
    }
    const ok = await copyTextFallback(url);
    if (ok) {
      if (btn) {
        const prev = btn.textContent;
        btn.textContent = 'Link Copied ✓';
        setTimeout(() => { if (btn.isConnected) btn.textContent = prev; }, 1800);
      }
      window.toast?.('Share link copied');
    } else {
      window.toast?.('Copy failed');
    }
  };

  window.rdmEnterAppMode = function(){
    try { sessionStorage.setItem('rdm-app-mode', '1'); } catch {}
    syncRootModeClasses();
    buildBottomNav();
    syncBottomNavActive(currentActivePageId());
    if (currentActivePageId() === 'download' && (window.__rdmUrlKeyRole || 'public') === 'public') {
      window.go?.('home');
    }
    window.toast?.('App Mode Active');
  };

  window.rdmExitAppMode = function(){
    try { sessionStorage.removeItem('rdm-app-mode'); } catch {}
    if (window.history && history.replaceState && /[?&]app=1/.test(location.search)) {
      const u = new URL(location.href);
      u.searchParams.delete('app');
      history.replaceState(null, '', u.pathname + u.search + u.hash);
    }
    syncRootModeClasses();
    window.toast?.('Switched to Website View');
  };

  function syncInstallButtons(){
    const info = portalAppLabel();
    const installed = isStandalone() || !!window.__rdmAppInstalled;
    const btns = document.querySelectorAll('[data-rdm-install-btn], #downloadApplicationBtn');
    const help = document.getElementById('downloadApplicationHelp');
    btns.forEach(btn => {
      if (!btn.dataset.baseLabel) btn.dataset.baseLabel = btn.textContent.trim();
      if (installed) {
        btn.textContent = info.noun + ' Installed ✓';
        btn.disabled = true;
      } else if (promptEvent) {
        btn.disabled = false;
        btn.textContent = 'Install ' + info.noun;
      } else {
        btn.disabled = false;
        btn.textContent = btn.id === 'downloadApplicationBtn' ? 'Install App' : ('Install ' + info.noun);
      }
    });
    if (help) {
      if (installed) help.textContent = info.noun + ' is installed on this device · Works offline';
      else if (promptEvent) help.textContent = 'Ready — 1-tap direct install (No Play Store required)';
      else help.textContent = 'Direct shareable app · Works offline after install';
    }
  }
  window.rdmSyncInstallButtons = syncInstallButtons;

  function openInstallGuideModal(){
    document.getElementById('rdmInstallGuideModal')?.remove();
    const info = portalAppLabel();
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const inIframe = window.self !== window.top;
    const m = document.createElement('div');
    m.id = 'rdmInstallGuideModal';
    m.className = 'modal show rdmUnifiedModal';
    let body = '';
    if (inIframe) {
      body = `<p class="authModalSub">Embedded preview frames block direct app installation. Open this exact link in Chrome/Safari to install cleanly onto your phone, or test App Mode right here.</p>
      <div class="installGuideActions">
        <a class="primary wide" href="${location.href}" target="_blank" rel="noopener noreferrer">Open in Browser to Install</a>
        <button type="button" class="secondary wide" id="rdmGuideOpenAppMode">Preview App Mode Here</button>
        <button type="button" class="secondary wide" id="rdmCopyInstallUrl">Share / Copy Link for Players</button>
      </div>`;
    } else if (isIOS) {
      body = `<p class="authModalSub">${info.desc}</p>
      <div class="installGuideSteps">
        <div><strong>1.</strong> Tap <strong>Share</strong> icon in Safari's bottom/top bar.</div>
        <div><strong>2.</strong> Tap <strong>Add to Home Screen</strong>.</div>
        <div><strong>3.</strong> Tap <strong>Add</strong> — launches as a full offline app.</div>
      </div>
      <div class="installGuideActions">
        <button type="button" class="primary wide" id="rdmGuideOpenAppMode">Open App Mode Now</button>
        <button type="button" class="secondary wide" id="rdmCopyInstallUrl">Share / Copy App Link</button>
      </div>`;
    } else {
      body = `<p class="authModalSub">${info.desc}</p>
      <div class="installGuideSteps">
        <div><strong>Android Chrome:</strong> Tap browser menu (<strong>⋮</strong>) → <strong>Install app</strong> / <strong>Add to Home screen</strong> (creates standalone phone app, no Play Store needed).</div>
        <div><strong>Desktop Chrome / Edge:</strong> Click the <strong>Install (⊕)</strong> icon in the address bar.</div>
      </div>
      <div class="installGuideActions">
        <button type="button" class="primary wide" id="rdmGuideOpenAppMode">Open App Mode Now</button>
        <button type="button" class="secondary wide" id="rdmCopyInstallUrl">Share / Copy Link for Players</button>
      </div>`;
    }
    m.innerHTML = `<div class="dialog rdmUnifiedDialog installGuideDialog" role="dialog" aria-modal="true">
      <button class="close" type="button" aria-label="Close">×</button>
      <div class="installGuideHead">
        <img src="assets/rdm-logo.png?v=7400" alt="RDM Logo">
        <div>
          <span class="sectionKicker">Direct App Install</span>
          <h2>${info.title}</h2>
        </div>
      </div>
      ${body}
    </div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('.close').onclick = close;
    m.querySelector('#rdmCopyInstallUrl')?.addEventListener('click', e => window.rdmShareApp(e.currentTarget));
    m.querySelector('#rdmGuideOpenAppMode')?.addEventListener('click', () => { close(); window.rdmEnterAppMode(); });
    m.addEventListener('click', e => { if (e.target === m) close(); });
    const onEsc = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); } };
    document.addEventListener('keydown', onEsc);
  }

  window.rdmPromptInstall = async function(){
    if (isStandalone() || window.__rdmAppInstalled) return 'installed';
    if (!promptEvent) {
      openInstallGuideModal();
      return 'unavailable';
    }
    const e = promptEvent;
    promptEvent = null;
    try {
      await e.prompt();
      const choice = await e.userChoice;
      const outcome = choice && choice.outcome ? choice.outcome : 'dismissed';
      if (outcome === 'accepted') {
        window.__rdmAppInstalled = true;
      }
      syncInstallButtons();
      return outcome;
    } catch (_) {
      openInstallGuideModal();
      return 'dismissed';
    }
  };

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    promptEvent = e;
    syncInstallButtons();
  });

  window.addEventListener('appinstalled', () => {
    promptEvent = null;
    window.__rdmAppInstalled = true;
    syncInstallButtons();
    window.toast?.('App installed onto device');
  });

  try {
    const dm = window.matchMedia('(display-mode: standalone)');
    if (dm.addEventListener) dm.addEventListener('change', () => { syncRootModeClasses(); buildBottomNav(); syncInstallButtons(); });
  } catch {}

  function dismissSplash(){
    const sp = document.getElementById('rdmAppSplash');
    if (!sp) return;
    if (!isAppMode()) { sp.remove(); return; }
    setTimeout(() => {
      sp.classList.add('hide');
      setTimeout(() => sp.remove(), 320);
    }, 360);
  }

  document.addEventListener('DOMContentLoaded', () => {
    syncRootModeClasses();
    upgradePortalManifestUrl();
    wireGoSync();
    buildBottomNav();
    syncBottomNavActive(currentActivePageId());
    syncInstallButtons();
    dismissSplash();
  });

  window.addEventListener('rdm-auth-ready', () => {
    wireGoSync();
    buildBottomNav();
    syncBottomNavActive(currentActivePageId());
  });

  document.addEventListener('click', async e => {
    const t = e.target;
    if (t.closest?.('#rdmEnterAppModeBtn')) {
      e.preventDefault();
      window.rdmEnterAppMode();
      return;
    }
    if (t.closest?.('#rdmAppWebExitBtn')) {
      e.preventDefault();
      window.rdmExitAppMode();
      return;
    }
    if (t.closest?.('#rdmShareAppBtn, #rdmAppShareBtn, #rdmMoreShareBtn')) {
      e.preventDefault();
      closeMoreSheet();
      window.rdmShareApp(t.closest('button'));
      return;
    }
    const tab = t.closest?.('#rdmBottomNav .rdmTabBtn');
    if (tab) {
      if (tab.dataset.appPage) {
        window.go?.(tab.dataset.appPage);
      } else if (tab.dataset.appMore) {
        openMoreSheet();
      } else if (tab.dataset.appScroll) {
        tab.parentElement.querySelectorAll('.rdmTabBtn').forEach(x => x.classList.remove('active'));
        tab.classList.add('active');
        const map = {
          overview: '#adminBody .adminSessionBar',
          players: '#adminPlayerManager',
          branding: '.brandAdminBox',
          links: '#adminAccessLinksBox'
        };
        const target = document.querySelector(map[tab.dataset.appScroll]);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab.dataset.playerTab) {
        tab.parentElement.querySelectorAll('.rdmTabBtn').forEach(x => x.classList.remove('active'));
        tab.classList.add('active');
        const pAct = tab.dataset.playerTab;
        if (pAct === 'profile-edit') window.openProfileEditMenu?.();
        else if (pAct === 'profile-avail') document.querySelector('.playerPortalAvailRow')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        else if (pAct === 'profile-stats') document.querySelector('.playerPortalStatsGrid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    const moreItem = t.closest?.('[data-more-page]');
    if (moreItem) {
      window.go?.(moreItem.dataset.morePage);
      return;
    }
    if (t.closest?.('#rdmMoreClose') || t.id === 'rdmAppMoreSheet') {
      closeMoreSheet();
      return;
    }
    const navDownload = t.closest?.('#nav [data-page="download"]');
    if (navDownload && promptEvent && !isStandalone() && !window.__rdmAppInstalled) {
      setTimeout(() => { window.rdmPromptInstall(); }, 140);
      return;
    }
    const btn = t.closest?.('[data-rdm-install-btn], #downloadApplicationBtn');
    if (!btn) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const h = document.getElementById('downloadApplicationHelp');
    const outcome = await window.rdmPromptInstall();
    if (h) {
      if (outcome === 'installed') h.textContent = 'App is already installed on your device';
      else if (outcome === 'accepted') h.textContent = 'Installing RDM app onto your home screen…';
      else if (outcome === 'dismissed') h.textContent = 'Tap Install App again whenever ready';
    }
  }, true);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMoreSheet();
  });
})();
