/* RDM Direct Private-Link Session Controller (login system removed) */
(function(){
  'use strict';
  window.openPrivateKeyAuthModal = function(){};
  window.rdmLogout = function(){
    session = null;
    localStorage.removeItem('RDM_V33_SESSION');
    if (window.history && history.replaceState) {
      history.replaceState(null, '', location.pathname + location.hash);
    }
    window.__rdmUrlKeyRole = 'public';
    window.__rdmUrlPlayerId = null;
    updateAuthUI?.();
    render?.();
    go?.('home');
  };
  localStorage.removeItem('RDM_V33_SESSION');
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('rdm-auth-ready'));
  }, 0);
})();
