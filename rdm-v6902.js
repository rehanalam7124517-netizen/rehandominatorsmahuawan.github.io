/* RDM V6.9.02 — lean assets + cloud branding manager */
(()=>{
'use strict';
const STATIC_PLAYER=/^(?:\.?\/)?assets\/(?:rehan\.png|players\/)/i;
const BRAND_DOC=()=>window.rdmDB?.collection('BrandSettings').doc('main');
let brand={logo:'',favicon:'',appIcon:'',socialPreview:''};
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function initials(name){return String(name||'RDM').trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase()||'RDM'}
function placeholder(name){const t=initials(name);return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="128" fill="#ebf2ee"/><circle cx="128" cy="128" r="118" fill="none" stroke="#0e6347" stroke-width="6"/><text x="128" y="145" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-size="68" font-weight="700" fill="#0e6347">${t}</text></svg>`)}
function cleanPlayers(){if(!window.D?.players)return;D.players.forEach(p=>{if(!p.image||STATIC_PLAYER.test(String(p.image)))p.image=placeholder(p.name)})}
window.rdmCleanStaticPlayerImages=cleanPlayers;
const DEFAULT_LOGO='/assets/aistudio/CRICKET_YOUR_TAGLINE_HERE-_20261103_131851_0000_634ce955.png';
function applyBrand(){
 const logo=brand.logo||DEFAULT_LOGO, fav=brand.favicon||brand.appIcon||logo, app=brand.appIcon||fav, social=brand.socialPreview||logo;
 document.querySelectorAll('header .brand img,.heroLogo img,footer img,.downloadAppCard>img,#brandLogoPreview').forEach(x=>{if(x.getAttribute('src')!==logo)x.src=logo;});
 document.querySelectorAll('link[rel="icon"]').forEach(x=>{if(x.getAttribute('href')!==fav)x.href=fav;});
 document.querySelectorAll('link[rel="apple-touch-icon"]').forEach(x=>{if(x.getAttribute('href')!==app)x.href=app;});
 const og=document.querySelector('meta[property="og:image"]');if(og&&og.content!==social)og.content=social;
 const tw=document.querySelector('meta[name="twitter:image"]');if(tw&&tw.content!==social)tw.content=social;
}
async function loadBrand(){try{if(!BRAND_DOC())return;const d=await BRAND_DOC().get();if(d.exists)brand={...brand,...d.data()};applyBrand()}catch(e){console.warn('Brand load',e)}}
async function compress(file,max=700,q=.76){if(!file)return'';const u=await new Promise((r,j)=>{const f=new FileReader;f.onload=()=>r(f.result);f.onerror=j;f.readAsDataURL(file)});const im=await new Promise((r,j)=>{const x=new Image;x.onload=()=>r(x);x.onerror=j;x.src=u});const s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*s));c.height=Math.max(1,Math.round(im.height*s));c.getContext('2d').drawImage(im,0,0,c.width,c.height);let out=c.toDataURL('image/png');if(out.length>780000)out=c.toDataURL('image/jpeg',q);if(out.length>900000)throw Error('IMAGE_TOO_LARGE');return out}
function brandingBox(){
 const logo=brand.logo||DEFAULT_LOGO;
 return `<section class="brandAdminBox"><div class="sectionHead subHead"><div><span>Branding</span><h2>Manage Logo &amp; App Assets</h2><p>Update the official club logo, favicon, app icon, and link preview image</p></div></div>
 <div class="brandLogoPreviewRow"><img id="brandLogoPreview" src="${esc(logo)}" alt="Current RDM Logo"><div><strong>Current Club Logo</strong><p>Displayed across header, hero crest, footer, and download card.</p><button type="button" class="tinyBtn danger" onclick="rdmResetBrandAsset('logo')">Reset to Default Logo</button></div></div>
 <div class="brandAdminGrid">
 <label>Website Logo<input id="brandLogoFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('logo','brandLogoFile')">Update Logo</button></label>
 <label>Favicon<input id="brandFaviconFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('favicon','brandFaviconFile')">Update Favicon</button></label>
 <label>PWA / App Icon<input id="brandAppFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('appIcon','brandAppFile')">Update App Icon</button></label>
 <label>Social / SEO Preview<input id="brandSocialFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('socialPreview','brandSocialFile')">Update Preview</button></label>
 </div><p class="adminHint">Player photos are managed from each player profile. Trophy images are preserved.</p></section>`;
}
window.rdmSaveBrandAsset=async function(key,inputId){try{if(!window.session||session.mode!=='admin'||window.__rdmUrlKeyRole!=='admin')return;const f=document.getElementById(inputId)?.files?.[0];if(!f)return window.toast?.('Select an image');const val=await compress(f,key==='favicon'?256:key==='appIcon'?512:800);await BRAND_DOC().set({[key]:val,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});brand[key]=val;applyBrand();window.toast?.('Branding updated')}catch(e){console.error(e);window.toast?.('Update failed')}};
window.rdmResetBrandAsset=async function(key){try{if(!window.session||session.mode!=='admin'||window.__rdmUrlKeyRole!=='admin')return;await BRAND_DOC().set({[key]:'',updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});brand[key]='';applyBrand();window.toast?.('Logo reset to default')}catch(e){console.error(e);window.toast?.('Reset failed')}};
function injectAdmin(){const b=document.getElementById('adminBody');if(!b||b.querySelector('.brandAdminBox')||window.session?.mode!=='admin'||window.__rdmUrlKeyRole!=='admin')return;b.insertAdjacentHTML('beforeend',brandingBox())}
window.rdmInjectBrandAdmin=injectAdmin;
const oldAdmin=window.renderAdmin;window.renderAdmin=function(){oldAdmin?.();setTimeout(injectAdmin,40)};
const oldRefresh=window.rdmRefresh;window.rdmRefresh=function(){cleanPlayers();oldRefresh?.();applyBrand()};
const oldLoad=window.rdmLoadAll;if(oldLoad)window.rdmLoadAll=async function(){await oldLoad.apply(this,arguments);cleanPlayers();try{window.render?.();if(session?.mode==='player'&&window.__rdmUrlKeyRole==='player')window.renderProfile?.();if(session?.mode==='admin'&&window.__rdmUrlKeyRole==='admin')window.renderAdmin?.()}catch{}applyBrand()};
new MutationObserver(()=>applyBrand()).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',()=>{cleanPlayers();loadBrand();setTimeout(injectAdmin,800)});loadBrand();
})();
