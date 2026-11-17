/* RDM V7.0.0 direct private-link router (no login required).
   - Public URL (no ?key=): strictly public view-only.
   - Player private link (?key=<PLAYER_TOKEN>): directly unlocks that specific player's Profile portal.
   - Admin private link (?key=<ADMIN_TOKEN>): directly unlocks Admin Panel & full club management. */
(()=>{
const PLAYER_LINKS = {
  "RDM001": "yJjA_yyMuR6OyPJgfvspRUmD",
  "RDM003": "iGo217fTX-irxYyJoPfrlXBf",
  "RDM006": "RLnuOF9niHZMV0yemW4-Mm5O",
  "RDM004": "pArgda-19Jz59OJc6D-WszY4",
  "RDM002": "6tYIAzsx4WM534_Ovd1mDaE1",
  "RDM007": "ubl_kIeHJdMlhTrMeV39LTjq",
  "RDM008": "HthzwXsiP1scviZJJUWIymep",
  "RDM010": "kSHlVvpggLEs9wpLrlUfTMxs",
  "RDM011": "GgSPtAUgj_zIrTTY2WMeLeXW",
  "RDM005": "2GJogYcYn4dG23ug5zkC9c-D",
  "RDM012": "mxXlPl2zOIzz-Lig_jsx6MEm",
  "RDM016": "UpcsKFrMOK6GEnBLjTCZcdBk",
  "RDM009": "88DTqmDck9JVXCybKZXajzzG",
  "RDM013": "uwN3JA0MPpUewH_BFcRVoiJX",
  "RDM014": "wKTMjxcXSV3sweGJWQ4AKZoX",
  "RDM015": "FYnhheOTlpei4tJD6C43Qc66",
  "RDM017": "YvKJ8KIvznZlq_7OQc9AYyvG"
};
const ADMIN_LINK = "0AqlZ35wF8lcXYiAkgz04KjzGeiSfnHs";

window.RDM_PLAYER_LINKS = PLAYER_LINKS;
window.RDM_ADMIN_LINK = ADMIN_LINK;

const params = new URLSearchParams(location.search);
const key = (params.get('key') || '').trim();
const requestedPlayer = Object.keys(PLAYER_LINKS).find(id => PLAYER_LINKS[id] === key) || null;
const wantsAdmin = key === ADMIN_LINK;

window.__rdmUrlKeyRole = wantsAdmin ? 'admin' : (requestedPlayer ? 'player' : 'public');
window.__rdmUrlPlayerId = requestedPlayer;

function setPortal(role){
  document.documentElement.dataset.rdmPortal=role;
  if(document.body)document.body.dataset.rdmPortal=role;
}

if (wantsAdmin) {
  session = { mode: 'admin', realRole: 'admin', playerId: 'RDM001', viaLink: true };
  setPortal('admin');
} else if (requestedPlayer) {
  session = { mode: 'player', realRole: 'player', playerId: requestedPlayer, viaLink: true };
  setPortal('player');
} else {
  session = null;
  setPortal('public');
}

function publicMode(){
  setPortal('public');
  document.body.classList.remove('admin');
  document.querySelector('#profileNav')?.setAttribute('hidden', '');
  document.querySelector('#adminNav')?.setAttribute('hidden', '');
  document.querySelectorAll('.adminOnly').forEach(x => { x.style.display = 'none'; });
  window.updateAuthUI?.();
}

function route(){
  if (wantsAdmin) {
    session = { mode: 'admin', realRole: 'admin', playerId: 'RDM001', viaLink: true };
    setPortal('admin');
    document.body.classList.add('admin');
    document.querySelector('#adminNav')?.removeAttribute('hidden');
    document.querySelector('#profileNav')?.setAttribute('hidden', '');
    updateAuthUI?.();
    render?.();
    go('admin');
    return;
  }
  if (requestedPlayer) {
    session = { mode: 'player', realRole: 'player', playerId: requestedPlayer, viaLink: true };
    setPortal('player');
    document.body.classList.remove('admin');
    document.querySelector('#profileNav')?.removeAttribute('hidden');
    document.querySelector('#adminNav')?.setAttribute('hidden', '');
    updateAuthUI?.();
    render?.();
    go('profile');
    return;
  }
  publicMode();
  render?.();
}

window.addEventListener('rdm-auth-ready', route);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', route, { once: true });
} else {
  route();
}
})();

