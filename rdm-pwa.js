(function(){
  'use strict';
  const standalone = matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js?v=7200').catch(console.warn));
  }

  let promptEvent = null;

  function syncInstallButtons(){
    const btn = document.getElementById('downloadApplicationBtn');
    const help = document.getElementById('downloadApplicationHelp');
    if (!btn) return;
    if (standalone || window.__rdmAppInstalled) {
      btn.textContent = 'App Installed ✓';
      btn.disabled = true;
      if (help) help.textContent = 'RDM app is installed on this device';
      return;
    }
    btn.disabled = false;
    if (promptEvent) {
      btn.textContent = 'Install App Now';
      if (help) help.textContent = 'Ready — tap to install directly onto your home screen';
    } else {
      btn.textContent = 'Download App';
    }
  }

  function openInstallGuideModal(){
    document.getElementById('rdmInstallGuideModal')?.remove();
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const inIframe = window.self !== window.top;
    const m = document.createElement('div');
    m.id = 'rdmInstallGuideModal';
    m.className = 'modal show rdmUnifiedModal';
    let title = 'Install RDM App';
    let body = '';
    if (inIframe) {
      body = `<p class="authModalSub">Direct browser installation is blocked inside an embedded preview frame. Open the app in a full browser tab, then tap Install.</p>
      <a class="primary wide" href="${location.href}" target="_blank" rel="noopener noreferrer">Open in Full Browser to Install</a>`;
    } else if (isIOS) {
      body = `<p class="authModalSub">Install Rehan Dominators Mahuawan on iPhone or iPad:</p>
      <div class="installGuideSteps">
        <div><strong>1.</strong> Tap the <strong>Share</strong> icon in Safari's toolbar.</div>
        <div><strong>2.</strong> Scroll down and tap <strong>Add to Home Screen</strong>.</div>
        <div><strong>3.</strong> Tap <strong>Add</strong> to finish installing RDM.</div>
      </div>`;
    } else {
      body = `<p class="authModalSub">Your browser hasn't triggered the quick install prompt yet. Install in 1 tap from your browser:</p>
      <div class="installGuideSteps">
        <div><strong>Android Chrome / Edge:</strong> Open browser menu (<strong>⋮</strong>) and tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</div>
        <div><strong>Desktop Chrome / Edge:</strong> Click the <strong>Install (⊕)</strong> icon in the address bar.</div>
      </div>`;
    }
    m.innerHTML = `<div class="dialog rdmUnifiedDialog installGuideDialog" role="dialog" aria-modal="true">
      <button class="close" type="button" aria-label="Close">×</button>
      <div class="installGuideHead">
        <img src="/assets/rdm-logo.png" alt="RDM Logo">
        <div>
          <span class="sectionKicker">Progressive Web App</span>
          <h2>${title}</h2>
        </div>
      </div>
      ${body}
    </div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('.close').onclick = close;
    m.addEventListener('click', e => { if (e.target === m) close(); });
  }

  window.rdmPromptInstall = async function(){
    if (standalone || window.__rdmAppInstalled) return 'installed';
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
    window.toast?.('RDM App installed');
  });

  document.addEventListener('DOMContentLoaded', syncInstallButtons);
  document.addEventListener('click', async e => {
    const navDownload = e.target.closest && e.target.closest('#nav [data-page="download"]');
    if (navDownload && promptEvent && !standalone && !window.__rdmAppInstalled) {
      setTimeout(() => { window.rdmPromptInstall(); }, 120);
      return;
    }
    const btn = e.target.closest && e.target.closest('#downloadApplicationBtn');
    if (!btn) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const h = document.getElementById('downloadApplicationHelp');
    const outcome = await window.rdmPromptInstall();
    if (h) {
      if (outcome === 'installed') h.textContent = 'RDM app is already installed on your device';
      else if (outcome === 'accepted') h.textContent = 'Installing RDM app to your home screen…';
      else if (outcome === 'dismissed') h.textContent = 'Tap Download App again whenever you are ready to install';
    }
  }, true);
})();
