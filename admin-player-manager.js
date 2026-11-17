/* RDM V7.0.0 admin player browser + Private Access Links directory */
(()=>{
 function baseOriginUrl(){
   return location.origin + location.pathname;
 }
 window.rdmCopyAccessLink = async function(url, btn){
   let ok = false;
   try {
     if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url); ok = true; }
   } catch {}
   if (!ok) {
     try {
       const ta = document.createElement('textarea');
       ta.value = url;
       ta.style.position = 'fixed';
       ta.style.opacity = '0';
       document.body.appendChild(ta);
       ta.select();
       ok = document.execCommand('copy');
       ta.remove();
     } catch {}
   }
   if (ok) {
     if (btn) {
       const prev = btn.textContent;
       btn.textContent = 'Copied';
       setTimeout(() => { if (btn.isConnected) btn.textContent = prev; }, 1600);
     }
     window.toast?.('Link copied');
   } else {
     window.toast?.('Copy failed');
   }
 };

 function add(){
  if (!window.rdmAdmin?.() || !document.getElementById('adminBody')) return;
  const body = document.getElementById('adminBody');

  let box = document.getElementById('adminPlayerManager');
  if (!box) {
    box = document.createElement('section');
    box.id = 'adminPlayerManager';
    box.className = 'adminPlayerManager';
    body.prepend(box);
  }
  box.innerHTML =
    '<div class="sectionHead"><div><span>Player Manager</span><h2>All Player Profiles</h2><p>Open &amp; edit one player at a time</p></div></div>' +
    '<div class="adminPlayerGrid">' +
    D.players.map(p => `<button type="button" onclick="adminOpenPlayerProfile('${p.id}')"><img src="${p.image || '/assets/rdm-logo.png'}" alt="${p.name}"><span><b>${mini(p.name)}</b><small>${mini(typeof playerCode === 'function' ? playerCode(p.id) : p.id)}</small></span><i>›</i></button>`).join('') +
    '</div>';

  let linksBox = document.getElementById('adminAccessLinksBox');
  if (!linksBox) {
    linksBox = document.createElement('section');
    linksBox.id = 'adminAccessLinksBox';
    linksBox.className = 'adminPlayerManager adminLinksBox';
    body.appendChild(linksBox);
  }
  const base = baseOriginUrl();
  const adminUrl = `${base}?key=${encodeURIComponent(window.RDM_ADMIN_LINK || '')}`;
  const playerMap = window.RDM_PLAYER_LINKS || {};
  const rows = D.players.map(p => {
    const token = playerMap[p.id];
    const url = token ? `${base}?key=${encodeURIComponent(token)}` : base;
    const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
    return `<div class="accessLinkRow">
      <div class="accessLinkMeta">
        <strong>${mini(p.name)}</strong>
        <small>${p.id} · ${code}</small>
        <input type="text" readonly value="${url}" aria-label="${mini(p.name)} private link" onclick="this.select()">
      </div>
      <div class="accessLinkBtns">
        <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${url}', this)">Copy</button>
        <a class="tinyBtn" href="${url}" target="_blank" rel="noopener">Open</a>
      </div>
    </div>`;
  }).join('');

  linksBox.innerHTML = `
    <div class="sectionHead"><div><span>Direct Access</span><h2>Private Access Links</h2><p>Share each player's direct link to open their profile without login</p></div></div>
    <div class="accessLinkList">
      <div class="accessLinkRow accessLinkRowHighlight">
        <div class="accessLinkMeta">
          <strong>Public Website (View Only)</strong>
          <small>Share with fans &amp; opponents</small>
          <input type="text" readonly value="${base}" aria-label="Public website link" onclick="this.select()">
        </div>
        <div class="accessLinkBtns">
          <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${base}', this)">Copy</button>
          <a class="tinyBtn" href="${base}" target="_blank" rel="noopener">Open</a>
        </div>
      </div>
      <div class="accessLinkRow accessLinkRowHighlight">
        <div class="accessLinkMeta">
          <strong>Admin Panel Link (Full Control)</strong>
          <small>Keep private — unlocks Admin Panel directly</small>
          <input type="text" readonly value="${adminUrl}" aria-label="Admin private link" onclick="this.select()">
        </div>
        <div class="accessLinkBtns">
          <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${adminUrl}', this)">Copy</button>
        </div>
      </div>
      ${rows}
    </div>`;
 }

 window.rdmInjectPlayerManager = add;
 const old = window.renderAdmin;
 window.renderAdmin = function(){ old?.(); setTimeout(add, 0); };
 window.addEventListener('rdm-auth-ready', () => setTimeout(add, 100));
})();
