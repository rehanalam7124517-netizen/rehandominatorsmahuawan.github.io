/* RDM V7.0.0 — reliable live leadership sync */
(function(){
  'use strict';
  function m(s){try{return typeof mini==='function'?mini(s||''):(s||'')}catch(e){return s||''}}
  function player(name){return (window.D&&Array.isArray(D.players))?D.players.find(function(p){return String(p.name||'').trim().toUpperCase()===name}):null}
  function validPlayerImage(src){
    src=String(src||'').trim();
    if(!src||/^data:image\/svg\+xml/i.test(src))return '';
    if(/(?:^|\/)assets\/(?:logo\.jpg|aistudio\/CRICKET_YOUR_TAGLINE_HERE-[^?#]+|images\/rdm_(?:crest_emblem|official_crest)_[^?#]+)(?:[?#].*)?$/i.test(src))return '';
    if(/(?:^|\/)(?:pwa-(?:192x192|512x512|maskable-512x512)|apple-touch-icon|assets\/favicon-(?:48|192|512))\.png(?:[?#].*)?$/i.test(src))return '';
    return src;
  }
  function fallbackLogo(){return (typeof window.rdmDefaultPlayerLogo==='function'?window.rdmDefaultPlayerLogo():'assets/rdm-logo.png?v=7400')}
  function setLeader(p,prefix,fallback){
    if(!p)return;
    var im=document.getElementById(prefix+'Image'),n=document.getElementById(prefix+'Name'),d=document.getElementById(prefix+'Detail');
    if(im){
      var src=validPlayerImage(p.image)||validPlayerImage(fallback)||fallbackLogo();
      im.hidden=false;im.src=src;im.removeAttribute('data-no-player-photo');
      var card=im.closest('.leadCard');
      if(card){var ph=card.querySelector('.leaderInitials');if(ph)ph.hidden=true;}
    }
    if(n)n.textContent=m(p.name);
    if(d)d.textContent=m([p.role,p.detail].filter(Boolean).join(' • '));
  }
  function sync(){setLeader(player('REHAN AKHTAR'),'homeCaptain','');setLeader(player('SAIF ALI'),'homeVice','')}
  window.rdmSyncLeadership=sync;
  var old=window.render;
  if(typeof old==='function')window.render=function(){var r=old.apply(this,arguments);queueMicrotask(sync);return r};
  document.addEventListener('DOMContentLoaded',function(){sync();[250,700,1500,3000,6000].forEach(function(t){setTimeout(sync,t)})});
})();
