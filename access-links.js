/* RDM V6.9.12 private-link router.
   Public URL (no ?key=) is strictly view-only.
   Player profile access requires that player's unique ?key= link.
   Admin Panel access requires the Admin ?key= URL check + Firebase Admin auth. */
(()=>{
const PLAYER_LINKS={"RDM001":"yJjA_yyMuR6OyPJgfvspRUmD","RDM003":"iGo217fTX-irxYyJoPfrlXBf","RDM006":"RLnuOF9niHZMV0yemW4-Mm5O","RDM004":"pArgda-19Jz59OJc6D-WszY4","RDM002":"6tYIAzsx4WM534_Ovd1mDaE1","RDM007":"ubl_kIeHJdMlhTrMeV39LTjq","RDM008":"HthzwXsiP1scviZJJUWIymep","RDM010":"kSHlVvpggLEs9wpLrlUfTMxs","RDM011":"GgSPtAUgj_zIrTTY2WMeLeXW","RDM005":"2GJogYcYn4dG23ug5zkC9c-D","RDM012":"mxXlPl2zOIzz-Lig_jsx6MEm","RDM016":"UpcsKFrMOK6GEnBLjTCZcdBk","RDM009":"88DTqmDck9JVXCybKZXajzzG","RDM013":"uwN3JA0MPpUewH_BFcRVoiJX","RDM014":"wKTMjxcXSV3sweGJWQ4AKZoX","RDM015":"FYnhheOTlpei4tJD6C43Qc66","RDM017":"YvKJ8KIvznZlq_7OQc9AYyvG"};
const ADMIN_LINK="0AqlZ35wF8lcXYiAkgz04KjzGeiSfnHs";
const params=new URLSearchParams(location.search);
const key=params.get('key')||'';
const requestedPlayer=Object.keys(PLAYER_LINKS).find(id=>PLAYER_LINKS[id]===key)||null;
const wantsAdmin=key===ADMIN_LINK;

window.__rdmUrlKeyRole=wantsAdmin?'admin':(requestedPlayer?'player':'public');
window.__rdmUrlPlayerId=requestedPlayer;

function publicMode(){
  document.body.classList.remove('admin');
  document.querySelector('#profileNav')?.setAttribute('hidden','');
  document.querySelector('#adminNav')?.setAttribute('hidden','');
  document.querySelectorAll('.adminOnly').forEach(x=>x.style.display='none');
  window.updateAuthUI?.();
}

function route(){
  if(wantsAdmin){
    document.querySelector('#adminNav')?.removeAttribute('hidden');
    if(session?.mode==='admin'){
      updateAuthUI();
      render();
      go('admin');
      return;
    }
    document.body.classList.remove('admin');
    updateAuthUI();
    render();
    go('admin');
    return;
  }
  if(requestedPlayer){
    if(session?.mode==='player'&&session.playerId===requestedPlayer){
      updateAuthUI();
      render();
      go('profile');
      return;
    }
    /* Never convert an authenticated admin session into a player session. */
    if(session?.mode==='admin'){
      updateAuthUI();
      render();
      setTimeout(()=>window.adminOpenPlayerProfile?.(requestedPlayer),80);
      return;
    }
    publicMode();
    render();
    window.openPrivateKeyAuthModal?.('player',requestedPlayer);
    return;
  }
  publicMode();
  render();
}
window.addEventListener('rdm-auth-ready',route);
setTimeout(route,500);
})();
