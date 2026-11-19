(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const k={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cricket_stadium_1794890926411.jpg",heritageImagePath:"src/assets/images/club_heritage_banner_1794890926814.jpg"},ce={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},ve={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},J=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((e,t)=>{var a,r;return{id:e[0],name:e[1],role:e[2],detail:e[3],jersey:e[4],image:"",nick:((a=ve[e[0]])==null?void 0:a.nick)||"",bio:((r=ve[e[0]])==null?void 0:r.bio)||"",socials:[],order:t+1,_docId:e[0]}}),ke=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],Ee=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function b(e=""){const t=String(e??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!t)return"";const a={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},r=t.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,o=>a[o]||o);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(r)?r.toUpperCase():r===r.toUpperCase()&&/[A-Z]{2,}/.test(r)&&r.length>4?r.toLowerCase().replace(/\b([a-z])/g,(n,d,s,c)=>{var v;const p=((v=c.slice(s).match(/^[a-z]+/i))==null?void 0:v[0])||"";return s>0&&c[s-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(p.toLowerCase())?p.toLowerCase().charAt(0):d.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,n=>n.toUpperCase()).replace(/\bSk\./gi,"SK."):r}function l(e=""){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function x(e=""){const t=String(e||"").trim();return/^https?:\/\//i.test(t)?t:""}function ae(e=""){const t=String(e||"").trim();return!!(!t||/^data:image\/svg\+xml/i.test(t)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(t))}function Ge(e,t=""){const a=String(e||"").trim();return ae(a)?t&&!ae(t)?t:k.logoPath:a}function re(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function W(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function Y(){var e,t,a,r;return((r=(a=(t=(e=window.firebase)==null?void 0:e.firestore)==null?void 0:t.FieldValue)==null?void 0:a.serverTimestamp)==null?void 0:r.call(a))||new Date}const L=e=>({...e.data(),_docId:e.id}),i={ready:!1,loadingData:!1,loadError:"",authChecked:!1,user:null,account:null,role:"guest",playerId:null,brandLogo:k.logoPath,players:J.map(e=>({...e})),matches:[],news:[],updates:[],honours:ke.map(e=>({...e})),gallery:[],socials:Ee.map(e=>({...e})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function X(){return!!(i.user&&i.account&&i.account.active===!0&&i.account.role==="admin"&&i.role==="admin")}function it(e,t,a){const r=new Map(J.map((s,c)=>[s.id,c+1])),o=new Map(J.map(s=>[s.id,s]));let n;return e.length>0?(n=e.map(s=>{const c=o.get(s.id);return{id:s.id,name:s.name||(c==null?void 0:c.name)||s.id,role:s.role||(c==null?void 0:c.role)||"",detail:s.detail||(c==null?void 0:c.detail)||"",jersey:s.jersey??(c==null?void 0:c.jersey)??"",image:ae(s.image)?"":s.image||"",nick:"",bio:"",socials:[],order:typeof s.order=="number"?s.order:r.get(s.id)||999,active:s.active!==!1,_docId:s._docId||s.id}}),J.forEach(s=>{n.some(c=>c.id===s.id)||n.push({...s})})):n=J.map(s=>({...s})),n.sort((s,c)=>(s.order||999)-(c.order||999)),[...t].sort((s,c)=>{const p=a&&s._docId===a?1:0,v=a&&c._docId===a?1:0;return p-v}).forEach(s=>{const c=n.find(p=>p.id===s.playerId);c&&(s.jersey!==void 0&&s.jersey!==null&&s.jersey!==""&&(c.jersey=String(s.jersey)),s.nick!==void 0&&s.nick!==null&&s.nick!==""&&(c.nick=String(s.nick)),s.bio!==void 0&&s.bio!==null&&s.bio!==""&&(c.bio=String(s.bio)),"image"in s&&s.image!==void 0&&s.image!==null&&(c.image=ae(s.image)?"":String(s.image)),Array.isArray(s.socials)&&(c.socials=s.socials.slice(0,3)),c._profileUid=s._docId)}),n.forEach(s=>{const c=ve[s.id];c&&(s.nick||(s.nick=c.nick),s.bio||(s.bio=c.bio))}),n.filter(s=>s.active!==!1)}let Pe=[],$e=[],Q=[];function ge(){var t,a;const e=((a=(t=re())==null?void 0:t.currentUser)==null?void 0:a.uid)||"";i.players=it(Pe,$e,e)}function lt(e){const t=W();if(!t)return()=>{};Q.forEach(n=>{try{n()}catch{}}),Q=[];let a=null;const r=()=>{typeof e=="function"&&(clearTimeout(a),a=setTimeout(()=>{i.ready=!0,e()},50))},o=(n,d)=>{try{const s=t.collection(n).onSnapshot(c=>{d(c.docs.map(L)),r()},()=>{});Q.push(s)}catch{}};o("TeamPlayers",n=>{Pe=n,ge()}),o("PlayerProfiles",n=>{$e=n,ge()}),o("Matches",n=>{i.matches=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("News",n=>{i.news=n.sort((d,s)=>(s.pinned?1:0)-(d.pinned?1:0)||(s.createdMs||0)-(d.createdMs||0))}),o("Honours",n=>{i.honours=n.length?n.sort((d,s)=>(d.order||999)-(s.order||999)):ke.map(d=>({...d}))}),o("Gallery",n=>{i.gallery=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("Socials",n=>{i.socials=n.length?n.sort((d,s)=>(d.order||999)-(s.order||999)):Ee.map(d=>({...d}))}),o("PlayerStats",n=>{i.stats=n}),o("Achievements",n=>{i.achievements=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("Availability",n=>{i.availability=n}),o("PlayingXI",n=>{i.lineups=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("TeamRecords",n=>{i.records=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("Tournaments",n=>{i.tournaments=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("Opponents",n=>{i.opponents=n.sort((d,s)=>(s.createdMs||0)-(d.createdMs||0))}),o("Updates",n=>{i.updates=n.filter(d=>d._docId!=="_news_updates_swap_v1").sort((d,s)=>(s.pinned?1:0)-(d.pinned?1:0)||(s.createdMs||0)-(d.createdMs||0))});try{const n=t.collection("BrandSettings").doc("main").onSnapshot(d=>{if(d.exists){const s=d.data()||{};s.logo&&!ae(s.logo)&&(i.brandLogo=s.logo,r())}},()=>{});Q.push(n)}catch{}return()=>{clearTimeout(a),Q.forEach(n=>{try{n()}catch{}}),Q=[]}}async function H(){const e=W();if(!e)return i.loadError="Firebase is unavailable. Check your internet connection and retry.",i.ready=!0,!1;i.loadingData=!0,i.loadError="";try{const[t,a,r,o,n,d,s,c,p,v,f,y,g,w,$]=await Promise.all([e.collection("TeamPlayers").get(),e.collection("Matches").get(),e.collection("News").get(),e.collection("Honours").get(),e.collection("Gallery").get(),e.collection("Socials").get(),e.collection("PlayerProfiles").get(),e.collection("PlayerStats").get(),e.collection("Achievements").get(),e.collection("Availability").get(),e.collection("PlayingXI").get(),e.collection("TeamRecords").get(),e.collection("Tournaments").get(),e.collection("Opponents").get(),e.collection("Updates").get()]);Pe=t.docs.map(L),$e=s.docs.map(L),ge(),i.matches=a.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.news=r.docs.map(L).sort((m,S)=>(S.pinned?1:0)-(m.pinned?1:0)||(S.createdMs||0)-(m.createdMs||0)),i.honours=o.empty?ke.map(m=>({...m})):o.docs.map(L).sort((m,S)=>(m.order||999)-(S.order||999)),i.gallery=n.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.socials=d.empty?Ee.map(m=>({...m})):d.docs.map(L).sort((m,S)=>(m.order||999)-(S.order||999)),i.stats=c.docs.map(L),i.achievements=p.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.availability=v.docs.map(L),i.lineups=f.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.records=y.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.tournaments=g.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.opponents=w.docs.map(L).sort((m,S)=>(S.createdMs||0)-(m.createdMs||0)),i.updates=$.docs.filter(m=>m.id!=="_news_updates_swap_v1").map(L).sort((m,S)=>(S.pinned?1:0)-(m.pinned?1:0)||(S.createdMs||0)-(m.createdMs||0));try{const m=await e.collection("BrandSettings").doc("main").get();if(m.exists){const S=m.data()||{};S.logo&&!ae(S.logo)&&(i.brandLogo=S.logo)}}catch{i.brandLogo=k.logoPath}return i.ready=!0,!0}catch(t){return console.error("Club data load failed",t),i.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",i.ready=!0,!1}finally{i.loadingData=!1}}async function Ve(e){var r,o,n,d;const t=re(),a=W();if(!e||!a)return i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const s=await a.collection("Accounts").doc(e.uid).get();if(!s.exists)return await((r=t==null?void 0:t.signOut)==null?void 0:r.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const c=s.data()||{};if(c.active!==!0)return await((o=t==null?void 0:t.signOut)==null?void 0:o.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(c.role==="admin")return i.user=e,i.account=c,i.role="admin",i.playerId=c.playerId||null,{ok:!0,role:"admin",account:c};const p=typeof c.playerId=="string"?c.playerId.trim():"";return p&&(i.players.some(f=>f.id===p)||J.some(f=>f.id===p))?(i.user=e,i.account=c,i.role="player",i.playerId=p,{ok:!0,role:"player",playerId:p,account:c}):(await((n=t==null?void 0:t.signOut)==null?void 0:n.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(s){return console.error("Account verification failed",s),await((d=t==null?void 0:t.signOut)==null?void 0:d.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:(s==null?void 0:s.code)||"VERIFICATION_ERROR"}}}async function ct(e,t){const a=re();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const r=String(e||"").trim(),o=String(t||"");if(!r||!o)throw new Error("EMAIL_PASSWORD_REQUIRED");const n=await a.signInWithEmailAndPassword(r,o),d=await Ve(n.user);if(!d.ok){const s=new Error(d.reason||"ACCOUNT_NOT_AUTHORIZED");throw s.code=d.reason,s}return await H(),d}async function dt(e){const t=re();if(!t)throw new Error("FIREBASE_UNAVAILABLE");const a=String(e||"").trim();if(!a)throw new Error("EMAIL_REQUIRED");await t.sendPasswordResetEmail(a)}async function Le(){const e=re();e&&await e.signOut(),i.user=null,i.account=null,i.role="guest",i.playerId=null}function ut(e){const t=re();return t?t.onAuthStateChanged(async a=>{if(!a){i.user=null,i.account=null,i.role="guest",i.playerId=null,i.authChecked=!0,e({role:"guest",verified:!1});return}const r=await Ve(a);i.authChecked=!0,e({role:r.ok?r.role:"guest",verified:r.ok,reason:r.ok?"":r.reason})}):(i.authChecked=!0,e({role:"guest",verified:!1}),()=>{})}async function pt(e,t){const a=W();if(!a||!i.user)throw new Error("AUTH_REQUIRED");const r=String(t||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(r))throw new Error("INVALID_STATUS");if(!X()&&!(i.role==="player"&&i.playerId===e))throw new Error("NOT_ALLOWED");await a.collection("Availability").doc(e).set({playerId:e,status:r,updatedAt:Y()},{merge:!0}),await H()}async function B(e,t,a){const r=W();if(!r||!X())throw new Error("ADMIN_REQUIRED");const o={...a,updatedAt:Y()};delete o._docId,t?await r.collection(e).doc(t).set(o,{merge:!0}):await r.collection(e).add({...o,createdMs:o.createdMs||Date.now()}),await H()}async function mt(e,t){const a=W();if(!a||!X())throw new Error("ADMIN_REQUIRED");const r={id:e,name:String(t.name||"").trim(),role:String(t.role||"").trim(),detail:String(t.detail||"").trim(),jersey:String(t.jersey||"").trim(),active:!0,updatedAt:Y()};"image"in t&&t.image!==void 0&&(r.image=t.image),await a.collection("TeamPlayers").doc(e).set(r,{merge:!0});const o=i.players.find(s=>s.id===e),n=(o==null?void 0:o._profileUid)||`profile_${e}`,d={playerId:e,jersey:r.jersey,nick:String(t.nick??(o==null?void 0:o.nick)??"").trim(),bio:String(t.bio??(o==null?void 0:o.bio)??"").trim(),updatedAt:Y()};"image"in t&&t.image!==void 0&&(d.image=t.image),await a.collection("PlayerProfiles").doc(n).set(d,{merge:!0}),await H()}async function ht(e,t){const a=W();if(!a||!X()||!t)throw new Error("ADMIN_REQUIRED");await a.collection(e).doc(t).delete(),await H()}async function bt(e){const t=W();if(!t||!X()||!e)throw new Error("ADMIN_REQUIRED");J.some(r=>r.id===e)?await t.collection("TeamPlayers").doc(e).set({id:e,active:!1,updatedAt:Y()},{merge:!0}):await t.collection("TeamPlayers").doc(e).delete(),await H()}async function ft(e,t,a){const r=W();if(!r||!X())throw new Error("ADMIN_REQUIRED");if(a){const o=await r.collection(e).where("pinned","==",!0).get();if(!o.empty){const n=r.batch();o.docs.forEach(d=>{d.id!==t&&n.set(d.ref,{pinned:!1,updatedAt:Y()},{merge:!0})}),await n.commit()}}await r.collection(e).doc(t).set({pinned:!!a,updatedAt:Y()},{merge:!0}),await H()}function we(e,t=960,a=.74){return new Promise((r,o)=>{if(!e)return r("");const n=new FileReader;n.onerror=()=>o(new Error("READ_FAILED")),n.onload=()=>{const d=new Image;d.onerror=()=>o(new Error("IMAGE_INVALID")),d.onload=()=>{const s=Math.min(1,t/Math.max(d.width,d.height)),c=document.createElement("canvas");c.width=Math.max(1,Math.round(d.width*s)),c.height=Math.max(1,Math.round(d.height*s)),c.getContext("2d").drawImage(d,0,0,c.width,c.height);let p=c.toDataURL("image/jpeg",a);if(p.length>72e4&&(p=c.toDataURL("image/jpeg",.56)),p.length>9e5)return o(new Error("IMAGE_TOO_LARGE"));r(p)},d.src=n.result},n.readAsDataURL(e)})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var ne;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(ne||(ne={}));class fe extends Error{constructor(t,a,r){super(t),this.message=t,this.code=a,this.data=r}}const yt=e=>{var t,a;return e!=null&&e.androidBridge?"android":!((a=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},vt=e=>{const t=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},r=a.Plugins=a.Plugins||{},o=()=>t!==null?t.name:yt(e),n=()=>o()!=="web",d=f=>{const y=p.get(f);return!!(y!=null&&y.platforms.has(o())||s(f))},s=f=>{var y;return(y=a.PluginHeaders)===null||y===void 0?void 0:y.find(g=>g.name===f)},c=f=>e.console.error(f),p=new Map,v=(f,y={})=>{const g=p.get(f);if(g)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),g.proxy;const w=o(),$=s(f);let m;const S=async()=>(!m&&w in y?m=typeof y[w]=="function"?m=await y[w]():m=y[w]:t!==null&&!m&&"web"in y&&(m=typeof y.web=="function"?m=await y.web():m=y.web),m),K=(P,D)=>{var N,G;if($){const V=$==null?void 0:$.methods.find(O=>D===O.name);if(V)return V.rtype==="promise"?O=>a.nativePromise(f,D.toString(),O):(O,oe)=>a.nativeCallback(f,D.toString(),O,oe);if(P)return(N=P[D])===null||N===void 0?void 0:N.bind(P)}else{if(P)return(G=P[D])===null||G===void 0?void 0:G.bind(P);throw new fe(`"${f}" plugin is not implemented on ${w}`,ne.Unimplemented)}},h=P=>{let D;const N=(...G)=>{const V=S().then(O=>{const oe=K(O,P);if(oe){const ie=oe(...G);return D=ie==null?void 0:ie.remove,ie}else throw new fe(`"${f}.${P}()" is not implemented on ${w}`,ne.Unimplemented)});return P==="addListener"&&(V.remove=async()=>D()),V};return N.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(N,"name",{value:P,writable:!1,configurable:!1}),N},R=h("addListener"),T=h("removeListener"),F=(P,D)=>{const N=R({eventName:P},D).then(O=>O),G=async()=>{const O=await N;await T({eventName:P,callbackId:O})},V=new Promise(O=>N.then(()=>O({remove:G})));return V.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await G()},V},C=new Proxy({},{get(P,D){switch(D){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?F:R;case"removeListener":return T;default:return h(D)}}});return r[f]=C,p.set(f,{name:f,proxy:C,platforms:new Set([...Object.keys(y),...$?[w]:[]])}),C};return a.convertFileSrc||(a.convertFileSrc=f=>f),a.getPlatform=o,a.handleError=c,a.isNativePlatform=n,a.isPluginAvailable=d,a.registerPlugin=v,a.Exception=fe,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},gt=e=>e.Capacitor=vt(e),_=gt(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),z=_.registerPlugin;class Me{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,a){let r=!1;this.listeners[t]||(this.listeners[t]=[],r=!0),this.listeners[t].push(a);const n=this.windowListeners[t];n&&!n.registered&&this.addWindowListener(n),r&&this.sendRetainedArgumentsForEvent(t);const d=async()=>this.removeListener(t,a);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,a,r){const o=this.listeners[t];if(!o){if(r){let n=this.retainedEventArguments[t];n||(n=[]),n.push(a),this.retainedEventArguments[t]=n}return}o.forEach(n=>n(a))}hasListeners(t){var a;return!!(!((a=this.listeners[t])===null||a===void 0)&&a.length)}registerWindowListener(t,a){this.windowListeners[a]={registered:!1,windowEventName:t,pluginEventName:a,handler:r=>{this.notifyListeners(a,r)}}}unimplemented(t="not implemented"){return new _.Exception(t,ne.Unimplemented)}unavailable(t="not available"){return new _.Exception(t,ne.Unavailable)}async removeListener(t,a){const r=this.listeners[t];if(!r)return;const o=r.indexOf(a);o!==-1&&this.listeners[t].splice(o,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const a=this.retainedEventArguments[t];a&&(delete this.retainedEventArguments[t],a.forEach(r=>{this.notifyListeners(t,r)}))}}const Ce=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Ie=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class wt extends Me{async getCookies(){const t=document.cookie,a={};return t.split(";").forEach(r=>{if(r.length<=0)return;let[o,n]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=Ie(o).trim(),n=Ie(n).trim(),a[o]=n}),a}async setCookie(t){try{const a=Ce(t.key),r=Ce(t.value),o=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",n=(t.path||"/").replace("path=",""),d=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${a}=${r||""}${o}; path=${n}; ${d};`}catch(a){return Promise.reject(a)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const a of t)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}z("CapacitorCookies",{web:()=>new wt});const St=async e=>new Promise((t,a)=>{const r=new FileReader;r.onload=()=>{const o=r.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},r.onerror=o=>a(o),r.readAsDataURL(e)}),At=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(o=>o.toLocaleLowerCase()).reduce((o,n,d)=>(o[n]=e[t[d]],o),{})},kt=(e,t=!0)=>e?Object.entries(e).reduce((r,o)=>{const[n,d]=o;let s,c;return Array.isArray(d)?(c="",d.forEach(p=>{s=t?encodeURIComponent(p):p,c+=`${n}=${s}&`}),c.slice(0,-1)):(s=t?encodeURIComponent(d):d,c=`${n}=${s}`),`${r}&${c}`},"").substr(1):null,Et=(e,t={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},t),o=At(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[d,s]of Object.entries(e.data||{}))n.set(d,s);a.body=n.toString()}else if(o.includes("multipart/form-data")||e.data instanceof FormData){const n=new FormData;if(e.data instanceof FormData)e.data.forEach((s,c)=>{n.append(c,s)});else for(const s of Object.keys(e.data))n.append(s,e.data[s]);a.body=n;const d=new Headers(a.headers);d.delete("content-type"),a.headers=d}else(o.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class Pt extends Me{async request(t){const a=Et(t,t.webFetchExtra),r=kt(t.params,t.shouldEncodeUrlParams),o=r?`${t.url}?${r}`:t.url,n=await fetch(o,a),d=n.headers.get("content-type")||"";let{responseType:s="text"}=n.ok?t:{};d.includes("application/json")&&(s="json");let c,p;switch(s){case"arraybuffer":case"blob":p=await n.blob(),c=await St(p);break;case"json":c=await n.json();break;case"document":case"text":default:c=await n.text()}const v={};return n.headers.forEach((f,y)=>{v[y]=f}),{data:c,headers:v,status:n.status,url:n.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}z("CapacitorHttp",{web:()=>new Pt});var Oe;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Oe||(Oe={}));var Fe;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Fe||(Fe={}));class $t extends Me{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}z("SystemBars",{web:()=>new $t});const Mt="modulepreload",Tt=function(e,t){return new URL(e,t).href},Be={},Te=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){let d=function(v){return Promise.all(v.map(f=>Promise.resolve(f).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const s=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=d(a.map(v=>{if(v=Tt(v,r),v in Be)return;Be[v]=!0;const f=v.endsWith(".css"),y=f?'[rel="stylesheet"]':"";if(!!r)for(let $=s.length-1;$>=0;$--){const m=s[$];if(m.href===v&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${y}`))return;const w=document.createElement("link");if(w.rel=f?"stylesheet":Mt,f||(w.as="script"),w.crossOrigin="",w.href=v,p&&w.setAttribute("nonce",p),document.head.appendChild(w),f)return new Promise(($,m)=>{w.addEventListener("load",$),w.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${v}`)))})}))}function n(d){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=d,window.dispatchEvent(s),!s.defaultPrevented)throw d}return o.then(d=>{for(const s of d||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})},ze=z("App",{web:()=>Te(()=>import("./web-LBFQ0Pge.js"),[],import.meta.url).then(e=>new e.AppWeb)});var de;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(de||(de={}));var Ne;(function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"})(Ne||(Ne={}));const ye=z("StatusBar"),Rt=z("SplashScreen",{web:()=>Te(()=>import("./web-DdXxyyth.js"),[],import.meta.url).then(e=>new e.SplashScreenWeb)});var xe;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(xe||(xe={}));var He;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(He||(He={}));const _e=z("Keyboard"),Dt=z("Browser",{web:()=>Te(()=>import("./web-D3CN7LZj.js"),[],import.meta.url).then(e=>new e.BrowserWeb)});let Ue=!1,Z=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Z=e,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function Ke(){return _.isNativePlatform()}function Je(){return!_.isNativePlatform()&&!!Z}async function Lt(){if(!Z)return!1;try{await Z.prompt();const e=await Z.userChoice;if((e==null?void 0:e.outcome)==="accepted")return Z=null,!0}catch{}return!1}async function Ye(e="azure"){const t={azure:"#F2F7FD",daylight:"#FFFFFF",turf:"#F4F9F6",night:"#071224"},a=t[e]||t.azure,r=document.getElementById("rdmThemeMeta");if(r&&(r.content=a),!!_.isNativePlatform())try{await ye.setOverlaysWebView({overlay:!1}),await ye.setBackgroundColor({color:a}),await ye.setStyle({style:e==="night"?de.Dark:de.Light})}catch{}}async function Ct(e){const t=localStorage.getItem("rdm-app-theme")||"azure";if(await Ye(t),_.isNativePlatform()){try{_e.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const a=document.activeElement;a&&typeof a.scrollIntoView=="function"&&setTimeout(()=>{try{a.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),_e.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!Ue&&typeof e=="function"){Ue=!0;try{ze.addListener("backButton",({canGoBack:a})=>{e({canGoBack:a})})}catch{}}}}async function qe(){if(_.isNativePlatform())try{await Rt.hide({fadeOutDuration:220})}catch{}}async function It(){if(_.isNativePlatform())try{await ze.exitApp()}catch{}}async function Ot(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(_.isNativePlatform())try{return await Dt.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}let se=[];function E(e){const t=document.getElementById("rdmToast");t&&(t.textContent=String(e||""),t.classList.add("show"),clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),2200))}function Se(){return se.length>0}function Xe(){const e=se.pop();return e&&e.isConnected?(e.remove(),!0):!1}function me(e){return se.push(e),()=>{se=se.filter(t=>t!==e),e.isConnected&&e.remove()}}function Ae({title:e,message:t,confirmLabel:a="Confirm",danger:r=!1,onConfirm:o}){const n=document.createElement("div");n.className="sheetOverlay show",n.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${l(e)}</h3>
      </div>
      <p class="confirmMessage">${l(t)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${r?"btnDanger":"btnPrimary"}" data-ok>${l(a)}</button>
      </div>
    </div>
  `,document.body.appendChild(n);const d=me(n);n.querySelector("[data-cancel]").onclick=d,n.addEventListener("click",s=>{s.target===n&&d()}),n.querySelector("[data-ok]").onclick=async s=>{const c=s.currentTarget;c.disabled=!0;try{await o(),d()}catch(p){c.disabled=!1,E((p==null?void 0:p.message)||"Action failed")}}}function I({title:e,subtitle:t="",fields:a,submitLabel:r="Save",onSubmit:o}){const n=document.createElement("div");n.className="sheetOverlay show";const d=a.map(c=>{const p=c.required?"required":"",v=l(c.value??"");if(c.type==="textarea")return`
        <label class="fieldBlock">
          <span>${l(c.label)}</span>
          <textarea name="${l(c.name)}" rows="${c.rows||4}" placeholder="${l(c.placeholder||"")}" ${p}>${v}</textarea>
        </label>
      `;if(c.type==="select"){const f=(c.options||[]).map(y=>{const g=typeof y=="object"?y.value:y,w=typeof y=="object"?y.label:y,$=String(g)===String(c.value??"")?"selected":"";return`<option value="${l(g)}" ${$}>${l(w)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${l(c.label)}</span>
          <select name="${l(c.name)}">${f}</select>
        </label>
      `}return c.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${l(c.name)}" ${c.checked?"checked":""}>
          <span>${l(c.label)}</span>
        </label>
      `:c.type==="file"?`
        <label class="fieldBlock">
          <span>${l(c.label)}</span>
          <input type="file" name="${l(c.name)}" accept="image/*" ${p}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${l(c.label)}</span>
        <input type="${l(c.type||"text")}" name="${l(c.name)}" value="${v}" placeholder="${l(c.placeholder||"")}" ${p}>
      </label>
    `}).join("");n.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${l(e)}</h3>
          ${t?`<p class="sheetSub">${l(t)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${d}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${l(r)}</button>
      </div>
    </form>
  `,document.body.appendChild(n);const s=me(n);n.querySelector("[data-cancel]").onclick=s,n.addEventListener("click",c=>{c.target===n&&s()}),n.querySelector("form").onsubmit=async c=>{c.preventDefault();const p=c.currentTarget,v=p.querySelector('[type="submit"]');v.disabled=!0;try{const f={};a.forEach(y=>{var w;const g=p.elements[y.name];g&&(y.type==="checkbox"?f[y.name]=g.checked:y.type==="file"?f[y.name]=((w=g.files)==null?void 0:w[0])||null:y.type==="textarea"?f[y.name]=String(g.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):f[y.name]=String(g.value??"").trim())}),await o(f),s()}catch(f){v.disabled=!1,E((f==null?void 0:f.message)||"Save failed")}}}function je({currentTheme:e,onSelectTheme:t}){const a=document.createElement("div");a.className="sheetOverlay show";const r=[{id:"azure",name:"Sky Azure",desc:"Official Light Blue & White team palette",swatches:["#F2F7FD","#FFFFFF","#0958D9"]},{id:"daylight",name:"Stadium Daylight",desc:"Crisp high-clarity bright white canvas",swatches:["#FFFFFF","#F6F9FC","#1D4ED8"]},{id:"turf",name:"Emerald Turf",desc:"Championship cricket pitch green & white",swatches:["#F4F9F6","#FFFFFF","#0D7A4E"]},{id:"night",name:"Floodlight Night",desc:"Deep stadium navy dark mode",swatches:["#071224","#0E1F3A","#38BDF8"]}];a.innerHTML=`
    <div class="sheetCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>App Appearance</h3>
          <p class="sheetSub">Tap a palette to apply immediately</p>
        </div>
      </div>
      <div class="themeChoiceList">
        ${r.map(n=>`
          <button type="button" class="themeChoiceRow ${e===n.id?"active":""}" data-pick-theme="${n.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${n.swatches.map(d=>`<span style="background:${d}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${l(n.name)}</strong>
              <span>${l(n.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${e===n.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(a);const o=me(a);a.addEventListener("click",n=>{n.target===a&&o()}),a.querySelectorAll("[data-pick-theme]").forEach(n=>{n.addEventListener("click",()=>{t(n.dataset.pickTheme),o()})})}function We(e,t=""){const a=document.createElement("div");a.className="lightboxOverlay show",a.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${l(t||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${l(e)}" alt="${l(t||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(a);const r=me(a);a.querySelector(".iconCloseBtn").onclick=r,a.addEventListener("click",o=>{(o.target===a||o.target.classList.contains("lightboxCanvas"))&&r()})}async function Ft({player:e,brandLogo:t}){const o=document.createElement("canvas");o.width=1080,o.height=1350;const n=o.getContext("2d"),d=g=>new Promise((w,$)=>{const m=new Image;m.crossOrigin="anonymous",m.onload=()=>w(m),m.onerror=$,m.src=g}),s=(g,w,$,m,S,K,h)=>{n.beginPath(),n.moveTo(g+S,w),n.arcTo(g+$,w,g+$,w+m,S),n.arcTo(g+$,w+m,g,w+m,S),n.arcTo(g,w+m,g,w,S),n.arcTo(g,w,g+$,w,S),n.closePath(),K&&(n.fillStyle=K,n.fill()),h&&(n.strokeStyle=h,n.lineWidth=2,n.stroke())},c=n.createLinearGradient(0,0,1080,1350);c.addColorStop(0,"#EDF5FF"),c.addColorStop(1,"#FFFFFF"),n.fillStyle=c,n.fillRect(0,0,1080,1350),s(40,40,1e3,1270,40,"#FFFFFF","#C9DFF7"),s(80,80,920,10,5,"#0958D9",null);let p=null;try{p=await d(t||k.logoPath)}catch{}p&&n.drawImage(p,84,120,74,74),n.textAlign="left",n.fillStyle="#0B2340",n.font='800 34px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',n.fillText("REHAN DOMINATORS MAHUAWAN",176,156),n.fillStyle="#5B7693",n.font='600 18px "Plus Jakarta Sans", sans-serif',n.fillText("MAHUAWAN • GOPALGANJ • BIHAR",176,186);let v=null;try{v=await d(Ge(e.image,t))}catch{v=p}if(v){n.save(),n.beginPath(),n.arc(1080/2,370,140,0,Math.PI*2),n.clip();const g=Math.max(280/v.width,280/v.height);n.drawImage(v,1080/2-v.width*g/2,370-v.height*g/2,v.width*g,v.height*g),n.restore(),n.strokeStyle="#0958D9",n.lineWidth=8,n.beginPath(),n.arc(1080/2,370,146,0,Math.PI*2),n.stroke()}n.textAlign="center",n.fillStyle="#0B2340",n.font='800 58px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',n.fillText(b(e.name),1080/2,580),s(120,620,840,124,24,"#F2F7FD","#CFE2F7"),n.fillStyle="#0958D9",n.font='700 16px "Plus Jakarta Sans", sans-serif',n.fillText("PLAYER CODE",330,662),n.fillText("JERSEY NUMBER",750,662),n.fillStyle="#0B2340",n.font='700 30px "JetBrains Mono", monospace',n.fillText(ce[e.id]||e.id,330,708),n.fillText(e.jersey?`#${e.jersey}`:"—",750,708),s(120,774,840,140,24,"#F8FBFF","#D9E8F7"),n.fillStyle="#0958D9",n.font='700 24px "Plus Jakarta Sans", sans-serif',n.fillText(b(e.role||""),1080/2,828),n.fillStyle="#3E5A78",n.font='600 20px "Plus Jakarta Sans", sans-serif',n.fillText(b(e.detail||"").slice(0,66),1080/2,872),n.fillStyle="#0958D9",n.font='700 18px "Plus Jakarta Sans", sans-serif',n.fillText("ONE TEAM • ONE DREAM • ONE DOMINATION",1080/2,1234),n.fillStyle="#5B7693",n.font='600 15px "Plus Jakarta Sans", sans-serif',n.fillText("RDM OFFICIAL • PLAYER IDENTITY CARD",1080/2,1266);const f=o.toDataURL("image/png"),y=document.createElement("a");y.href=f,y.download=`${e.id}-${String(e.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,document.body.appendChild(y),y.click(),y.remove(),E("Player card downloaded")}const he=[{id:"azure",label:"Sky Azure",desc:"Light Blue & White",swatches:["#F2F7FD","#FFFFFF","#0958D9"]},{id:"daylight",label:"Stadium Daylight",desc:"Crisp High-Key White",swatches:["#FFFFFF","#F6F9FC","#1D4ED8"]},{id:"turf",label:"Emerald Turf",desc:"Cricket Pitch Green",swatches:["#F4F9F6","#FFFFFF","#0D7A4E"]},{id:"night",label:"Floodlight Night",desc:"Deep Stadium Navy",swatches:["#071224","#0E1F3A","#38BDF8"]}],u={screen:"public",portalMode:"public",portalPlayerId:null,publicTab:"home",matchesSubTab:"fixtures",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",drawerOpen:!1,theme:Nt(),loginError:"",loginBusy:!1,lastBackPressAt:0},M=[];function Qe(){return{screen:u.screen,publicTab:u.publicTab,matchesSubTab:u.matchesSubTab,detailPlayerId:u.detailPlayerId,morePage:u.morePage,adminTab:u.adminTab}}function Bt(e,t){return e&&t&&e.screen===t.screen&&e.publicTab===t.publicTab&&e.matchesSubTab===t.matchesSubTab&&e.detailPlayerId===t.detailPlayerId&&e.morePage===t.morePage&&e.adminTab===t.adminTab}function te(e){return e.screen==="playerDetail"&&e.detailPlayerId?`#player-${e.detailPlayerId}`:e.screen==="subpage"?`#section-${e.morePage}`:(e.screen==="playerPortal"&&u.portalPlayerId,e.screen==="portalAuth"?"#portal-verify":e.screen==="admin"?`#admin-${e.adminTab}`:`#${e.publicTab||"home"}`)}function Re(e){u.screen=e.screen,u.publicTab=e.publicTab||"home",u.matchesSubTab=e.matchesSubTab||"fixtures",u.detailPlayerId=e.detailPlayerId||null,u.morePage=e.morePage||"news",u.adminTab=e.adminTab||"overview",u.drawerOpen=!1,A(),window.scrollTo({top:0,behavior:"auto"})}function q(e,{push:t=!0,replace:a=!1}={}){e.screen==="admin"&&(e={screen:"public",publicTab:"home"}),e.screen==="playerPortal"&&(e={screen:"public",publicTab:"home"}),e.screen==="portalAuth"&&(e={screen:"public",publicTab:"home"});const r={...Qe(),...e},o=M[M.length-1];if(!Bt(o,r)){if(a&&M.length>0){M[M.length-1]=r;try{window.history.replaceState({rdmIdx:M.length-1},"",te(r))}catch{}}else if(t||M.length===0){M.push(r);try{window.history.pushState({rdmIdx:M.length-1},"",te(r))}catch{}}}Re(r)}function ee(e){u.drawerOpen=!!e;const t=document.getElementById("drawerOverlay");if(t){const a=t.querySelector(".drawerPanel");a&&(a.style.transform=""),t.classList.remove("dragging"),t.classList.toggle("open",u.drawerOpen),t.setAttribute("aria-hidden",u.drawerOpen?"false":"true")}else A()}function Ze(){if(Se())return Xe(),!0;if(u.drawerOpen)return ee(!1),!0;if(M.length>1){M.pop();const e=M[M.length-1];try{window.history.replaceState({rdmIdx:M.length-1},"",te(e))}catch{}return Re(e),!0}return!1}function Nt(){try{const e=localStorage.getItem("rdm-app-theme")||"azure";return he.some(t=>t.id===e)?e:"azure"}catch{return"azure"}}function et(e){var t;return((t=he.find(a=>a.id===e))==null?void 0:t.label)||"Sky Azure"}function le(e){const t=he.some(a=>a.id===e)?e:"azure";u.theme=t,document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("rdm-app-theme",t)}catch{}Ye(t),A()}function U(){return i.brandLogo||k.logoPath}function De(e){const t=Ge(e,U()),a=t===U()||t===k.logoPath;return{src:t,cls:a?"avatarCircle is-crest":"avatarCircle is-photo"}}function j(e){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[e]||""}function tt(e){return{home:j("home"),squad:j("squad"),matches:j("matches"),gallery:j("gallery"),more:j("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[e]||""}function ue({title:e="RDM Official",showBack:t=!1,showPublicNav:a=!0,rightActionHtml:r=""}){const o=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],n=t?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,d=r||'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>';return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${n}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${l(U())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
            <span class="topBrandText">${l(e)}</span>
          </button>
        </div>
        ${a?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${o.map(([s,c])=>`
              <button type="button" class="topNavLink ${u.screen==="public"&&u.publicTab===s?"active":""}" data-public-tab="${s}">${c}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${d}
        </div>
      </div>
    </header>
  `}function xt(){const e=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]];return`
    <div class="drawerOverlay ${u.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${u.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${l(U())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${e.map(([a,r])=>`
            <button type="button" class="drawerNavBtn ${u.screen==="subpage"&&u.morePage===a?"active":""}" data-open-subpage="${a}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${tt(a)}</span>
                <span>${r}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${l(et(u.theme))}</button>
          
        </div>
      </aside>
    </div>
  `}function pe(){return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${l(U())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
          <div>
            <strong>${l(b(k.orgName))}</strong>
            <span>${l(k.location)} · Est. ${l(k.founded)}</span>
          </div>
        </div>
        <div class="webFooterLinks">
          <button type="button" class="webFooterLink" data-public-tab="home">Home</button>
          <button type="button" class="webFooterLink" data-public-tab="squad">Squad</button>
          <button type="button" class="webFooterLink" data-public-tab="matches">Matches</button>
          <button type="button" class="webFooterLink" data-public-tab="gallery">Gallery</button>
          <button type="button" class="webFooterLink" data-open-subpage="records">Records</button>
          <button type="button" class="webFooterLink" data-open-subpage="honours">Honours</button>
          <button type="button" class="webFooterLink" data-ext-url="${l(k.captainContactUrl)}">WhatsApp Captain ↗</button>
        </div>
      </div>
    </footer>
  `}function Ht(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([t,a])=>`
          <button type="button" class="navTabBtn ${u.screen==="public"&&u.publicTab===t?"active":""}" data-public-tab="${t}" aria-current="${u.screen==="public"&&u.publicTab===t?"page":"false"}">
            <span class="navIconPill">${j(t)}</span>
            <span>${a}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function _t(){const e=i.matches.find(p=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${p.matchStatus||""} ${p.status||""} ${p.note||""}`)),t=i.matches.find(p=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${p.matchStatus||""} ${p.status||""} ${p.note||""}`)),a=i.updates.find(p=>p.pinned)||i.updates[0],r=i.news.find(p=>p.pinned)||i.news[0],o=a||r,n=i.players.find(p=>p.id==="RDM001")||i.players[0],d=i.players.find(p=>p.id==="RDM003"),s=i.players.find(p=>p.id==="RDM006"),c=[n,d,s].filter(Boolean);return`
    ${i.loadError?`<div class="infoBanner"><span>${l(i.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${l(k.heritageImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerInner">
        <div class="heroBannerTop">
          <img class="heroBannerLogo" src="${l(U())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
          <div class="heroBannerCopy">
            <span class="heroEyebrow">OFFICIAL CRICKET TEAM</span>
            <h1 class="heroDisplayTitle">${l(k.orgName)}</h1>
            <p>${l(k.motto)}</p>
          </div>
        </div>
        <div class="heroBannerBottom">
          <div class="heroBannerMeta">
            <span>Est. ${l(k.founded)}</span>
            <span aria-hidden="true">·</span>
            <span>${l(k.locationLabel)}</span>
          </div>
          <div class="heroToolbarActions">
            <button type="button" class="heroGhostBtn" data-open-subpage="news">Team News</button>
            <button type="button" class="heroPrimaryBtn" data-public-tab="squad">Explore Squad</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kpiStripGrid" aria-label="Team overview metrics">
      <button type="button" class="kpiCardBtn" data-public-tab="squad">
        <div>
          <strong class="kpiValue num">${i.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${j("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${i.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${tt("honours")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${i.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${j("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${i.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${j("gallery")}</span>
      </button>
    </section>

    <div class="homeSplitGrid">
      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Match Centre</span>
              <h2 class="sectionTitle">${e?"Upcoming Fixture":t?"Recent Match":"Match Schedule"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-public-tab="matches">Matches ›</button>
          </div>
          ${e||t?at(e||t):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${o?l(b(o.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${o?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${l(b(o.text||""))}</p>
            ${o.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${l(o.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${a!=null&&a.url&&x(a.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${l(x(a.url))}">Open Link ↗</button>
          </div>
        `:""}
      </article>
    </div>

    <section>
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Team Leadership</span>
          <h2 class="sectionTitle">Leading the Dominators</h2>
        </div>
        <button type="button" class="btnGhost btnSm" data-public-tab="squad">Full Squad ›</button>
      </div>
      <div class="leaderRow">
        ${c.map(p=>{const v=De(p.image);return`
            <button type="button" class="leaderCard" data-open-player="${l(p.id)}">
              <img class="${v.cls}" src="${l(v.src)}" alt="${l(p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
              <div>
                <div class="leaderCardMeta">${l(b(p.role))}</div>
                <div class="leaderCardTitle">${l(b(p.name))}</div>
                ${p.detail?`<div class="leaderCardSub">${l(b(p.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function at(e){const t=b(e.matchStatus||e.status||"Match"),a=[e.date,e.time,e.venueName||e.venue].filter(Boolean).map(b).join(" · ");return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${l(b(e.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${l(t)}</span>
      </div>
      ${a?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${l(a)}</div>`:""}
      ${e.ourScore||e.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${l(e.ourScore||"—")}</span>
          <span>${l(b(e.opponent||"Opp"))}: ${l(e.oppScore||"—")}</span>
        </div>
      `:""}
      ${e.result||e.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${l(b(e.result?`${e.result}${e.margin?" · "+e.margin:""}`:e.note))}</p>`:""}
      ${e.potm?`<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-blue);">Player of the Match: ${l(b(e.potm))}</p>`:""}
    </div>
  `}function Ut(){const e=u.squadQuery.trim().toLowerCase(),t=i.players.filter(a=>{const r=String(a.role||"").toUpperCase();return u.squadFilter==="ALL"||u.squadFilter==="LEADERS"&&(r.includes("CAPTAIN")||r.includes("KEEPER"))||u.squadFilter==="ALLROUNDER"&&r.includes("ALL-ROUNDER")||u.squadFilter==="BATSMAN"&&r.includes("BATSMAN")&&!r.includes("ALL-ROUNDER")?e?`${a.name} ${a.role} ${a.detail} ${a.id} ${ce[a.id]||""} ${a.jersey||""}`.toLowerCase().includes(e):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${i.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${l(u.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([a,r])=>`<button type="button" class="segTab ${u.squadFilter===a?"active":""}" data-squad-filter="${a}">${r}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="squadGrid">
        ${t.map(a=>{const r=ce[a.id]||a.id,o=De(a.image);return`
            <button type="button" class="playerCard" data-open-player="${l(a.id)}">
              <img class="playerCardAvatar ${o.cls}" src="${l(o.src)}" alt="${l(a.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${l(r)}${a.jersey?" · #"+l(a.jersey):""}</span>
                <h3>${l(b(a.name))}</h3>
                <div class="playerCardRole">${l(b(a.role))}</div>
                ${a.detail?`<div class="playerCardDetail">${l(b(a.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function qt(){let e="";return u.matchesSubTab==="fixtures"?e=i.matches.length?`<div class="stackList">${i.matches.map(t=>`<article class="surfaceCard">${at(t)}</article>`).join("")}</div>`:'<div class="emptyState">No fixtures or match results added yet.</div>':u.matchesSubTab==="xi"?e=nt():e=rt(),`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Schedule &amp; Results</span>
        <h2 class="sectionTitle">Matches Centre</h2>
      </div>
    </div>
    <div class="filterRow">
      ${[["fixtures","Fixtures & Results"],["xi","Playing XI"],["tournaments","Tournaments & Records"]].map(([t,a])=>`<button type="button" class="segTab ${u.matchesSubTab===t?"active":""}" data-matches-sub="${t}">${a}</button>`).join("")}
    </div>
    ${e}
  `}function nt(){return i.lineups.length?`<div class="stackList">${i.lineups.map(e=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${l(b(e.title||"Playing XI"))}</h3>
      ${e.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${l(b(e.match))}</p>`:""}
      <div class="xiGrid num">
        ${(e.players||[]).map((t,a)=>{const r=i.players.find(n=>n.id===t),o=`${a+1}. ${b((r==null?void 0:r.name)||t)}`;return r?`<button type="button" class="xiPlayerBtn" data-open-player="${l(t)}">${l(o)}</button>`:`<div style="padding:6px 8px;">${l(o)}</div>`}).join("")}
      </div>
      ${(e.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${e.subs.map(t=>{var a;return l(b(((a=i.players.find(r=>r.id===t))==null?void 0:a.name)||t))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function rt(){return i.tournaments.length>0||i.records.length>0||i.opponents.length>0?`
    <div class="stackList">
      ${i.tournaments.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${l(b(t.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${l(b(t.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[t.season,t.position,t.venueName||t.venue].filter(Boolean).map(b).join(" · ")}</p>
          ${t.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${l(t.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${i.records.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${l(b(t.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${l(b(t.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${l(b(t.value||""))}${t.player?" · "+l(b(t.player)):""}</p>
        </article>
      `).join("")}
      ${i.opponents.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${l(b(t.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(t.played||0)} Played · ${Number(t.won||0)} Won · ${Number(t.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function st(){return`
    <div class="honoursGrid">
      ${i.honours.map(e=>`
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${l(e.image||U())}" data-zoom-cap="${l(`${e.year} · ${e.title} — ${e.sub}`)}">
            <img src="${l(e.image||U())}" alt="${l(e.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${l(e.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${l(b(e.title))}</h3>
            <p class="honourCardSub">${l(b(e.sub))}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `}function jt(){const e=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],t=i.gallery.filter(a=>{const r=String(a.album||"MEMORIES").toUpperCase();return u.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(r):r===u.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${e.map(a=>`<button type="button" class="segTab ${u.galleryAlbum===a?"active":""}" data-gallery-album="${a}">${l(b(a))}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="galleryGrid">
        ${t.map((a,r)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${r}">
            <img src="${l(a.image)}" alt="${l(a.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${l(b(a.album||"Memories"))}</strong>
              <span>${l(b(a.caption||"RDM Memory"))}</span>
            </div>
          </button>
        `).join("")}
      </div>
    `:'<div class="emptyState">No photos added in this album yet.</div>'}

    <div class="sectionHeader" style="margin-top:8px;">
      <div>
        <span class="sectionKicker">Trophy Cabinet</span>
        <h2 class="sectionTitle">Team Honours</h2>
      </div>
    </div>
    ${st()}
  `}function Wt(){const e=Je();return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Preferences &amp; Team Channels</span>
        <h2 class="sectionTitle">Settings &amp; More</h2>
        <p class="sectionSub">Use the top-left menu drawer to browse News, Records, Playing XI, and Team History.</p>
      </div>
    </div>

    <section class="surfaceCard">
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Theme Studio</span>
          <h3 class="sectionTitle" style="font-size:1.25rem;">Appearance &amp; Palette</h3>
          <p class="sectionSub">Active: ${l(et(u.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${he.map(t=>`
          <button type="button" class="themeChoiceRow ${u.theme===t.id?"active":""}" data-quick-theme="${t.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${t.swatches.map(a=>`<span style="background:${a}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${l(t.label)}</strong>
              <span>${l(t.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${u.theme===t.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${l(k.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${i.socials.filter(t=>x(t.url)).map(t=>`
          <button type="button" class="linkActionBtn" data-ext-url="${l(x(t.url))}">${l(b(t.displayName||t.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Device &amp; Sync</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App Preferences</h3>
          <p class="sectionSub">${Ke()?"RDM Official Android App":"RDM Official Web &amp; Installable App"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${e?'<button type="button" class="btnPrimary btnSm" id="btnInstallWebApp">Install App</button>':""}
        </div>
      </div>
    </section>
  `}function Gt(){const e=i.players.find(s=>s.id===u.detailPlayerId);if(!e)return`
      ${ue({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${pe()}
    `;const t=De(e.image),a=i.stats.find(s=>s.playerId===e.id),r=i.availability.find(s=>s.playerId===e.id),o=ce[e.id]||e.id,n=(Array.isArray(e.socials)?e.socials:[]).filter(s=>x((s==null?void 0:s.url)||s)),d=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${ue({title:b(e.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${t.cls}" src="${l(t.src)}" alt="${l(e.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${k.logoPath}'">
        <div>
          <span class="metaCode">${l(o)} · ${l(e.id)}${e.jersey?" · #"+l(e.jersey):""}</span>
          <h1 class="fullProfileName">${l(b(e.name))}</h1>
          <div class="fullProfileRole">${l(b(e.role))}</div>
          ${e.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${l(b(e.detail))}</p>`:""}
          ${e.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${l(b(e.nick))}</p>`:""}
          ${r!=null&&r.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-blue);">Match Status: ${l(b(r.status))}</p>`:""}
        </div>
        <div>
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${e.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${l(b(e.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${d?`
          <div class="statGrid4">
            <div class="statCell"><strong class="num">${Number(a.matches||0)}</strong><span>Matches</span></div>
            <div class="statCell"><strong class="num">${Number(a.runs||0)}</strong><span>Runs</span></div>
            <div class="statCell"><strong class="num">${Number(a.highScore||0)}</strong><span>High Score</span></div>
            <div class="statCell"><strong class="num">${Number(a.wickets||0)}</strong><span>Wickets</span></div>
          </div>
          <div class="statSubRow num">
            <span>4s/6s: ${Number(a.fours||0)}/${Number(a.sixes||0)}</span>
            <span>50s/100s: ${Number(a.fifties||0)}/${Number(a.hundreds||0)}</span>
            <span>SR: ${Number(a.strikeRate||0)}</span>
            <span>Econ: ${Number(a.economy||0)}</span>
            <span>Best: ${l(a.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${n.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${n.map((s,c)=>{const p=x(typeof s=="string"?s:s.url),v=typeof s=="string"?`Social ${c+1}`:s.name||`Social ${c+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${l(p)}">${l(b(v))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${pe()}
  `}function Vt(){const t={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[u.morePage]||"Team Info";let a="";if(u.morePage==="news")a=i.news.length?`<div class="stackList">${i.news.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${r.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${l(b(r.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${l(b(r.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(u.morePage==="updates")a=i.updates.length?`<div class="stackList">${i.updates.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${l(b(r.category||"Official Update"))}${r.date?" · "+l(r.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${l(b(r.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${l(b(r.text||""))}</p>
            ${r.url&&x(r.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${l(x(r.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(u.morePage==="xi")a=nt();else if(u.morePage==="records")a=i.records.length?`<div class="stackList">${i.records.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${l(b(r.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${l(b(r.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${l(b(r.value||""))}${r.player?" · "+l(b(r.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>';else if(u.morePage==="tournaments")a=rt();else if(u.morePage==="honours")a=st();else if(u.morePage==="socials")a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${l(k.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${i.socials.filter(r=>x(r.url)).map(r=>`
            <button type="button" class="linkActionBtn" data-ext-url="${l(x(r.url))}">${l(b(r.displayName||r.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(u.morePage==="about")a=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <img src="${l(U())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:64px;height:64px;border-radius:50%;background:#FFFFFF;border:1px solid var(--border-strong);padding:4px;object-fit:contain;">
          <div>
            <h3 class="sectionTitle">${l(b(k.orgName))}</h3>
            <p class="sectionSub">Founded ${l(k.founded)} · ${l(k.location)}</p>
          </div>
        </div>
        <p class="richText" style="margin:0;color:var(--ink-secondary);">${l(k.motto)} — Official cricket team app uniting the squad, fixtures, honours, and supporters of Rehan Dominators Mahuawan.</p>
      </div>
    `;else{const r=Je();a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Android App</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Mobile Experience</h3>
        <p style="margin:0 0 14px;color:var(--ink-secondary);font-size:0.9rem;">
          ${Ke()?"You are running the native RDM Official Android app.":"Install RDM Official on your Android phone via browser Install App, or compile the native Android APK using the Capacitor Android project."}
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${r?'<button type="button" class="btnPrimary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `}return`
    ${ue({title:t,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${l(t)}</h1>
        </div>
      </div>
      ${a}
    </div>
    ${pe()}
  `}function zt(){return be()}function Kt(){return be()}function Jt(){return be()}function be(){let e="";return u.publicTab==="home"?e=_t():u.publicTab==="squad"?e=Ut():u.publicTab==="matches"?e=qt():u.publicTab==="gallery"?e=jt():e=Wt(),`
    ${ue({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${e}</div>
    ${pe()}
    ${Ht()}
  `}function A(){const e=document.getElementById("appViewport");if(!e)return;let t="";u.screen==="playerDetail"?t=Gt():u.screen==="subpage"?t=Vt():u.screen==="playerPortal"?t=Kt():u.screen==="portalAuth"?t=zt():u.screen==="admin"?t=Jt():t=be(),e.innerHTML=t+xt(),Yt()}function Yt(){var o,n,d,s,c,p,v,f,y,g,w,$,m,S,K;const e=h=>document.getElementById(h);(o=e("btnStepBack"))==null||o.addEventListener("click",()=>{Ze()||q({screen:"public",publicTab:"home"})}),(n=e("btnOpenDrawer"))==null||n.addEventListener("click",()=>{ee(!0)});const t=e("drawerOverlay"),a=e("drawerPanel");if(t==null||t.addEventListener("click",h=>{h.target.id==="drawerOverlay"&&ee(!1)}),t&&a){let h=0,R=0,T=!1;a.addEventListener("touchstart",C=>{!u.drawerOpen||C.touches.length!==1||(h=C.touches[0].clientX,R=0,T=!0,t.classList.add("dragging"))},{passive:!0}),a.addEventListener("touchmove",C=>{if(!T||C.touches.length!==1)return;const P=C.touches[0].clientX-h;R=Math.min(0,P),a.style.transform=`translateX(${R}px)`},{passive:!0});const F=()=>{T&&(T=!1,t.classList.remove("dragging"),a.style.transform="",R<=-68&&ee(!1))};a.addEventListener("touchend",F,{passive:!0}),a.addEventListener("touchcancel",F,{passive:!0})}(d=e("btnPickTheme"))==null||d.addEventListener("click",()=>{je({currentTheme:u.theme,onSelectTheme:le})}),(s=e("btnDrawerTheme"))==null||s.addEventListener("click",()=>{ee(!1),je({currentTheme:u.theme,onSelectTheme:le})}),document.querySelectorAll("[data-quick-theme]").forEach(h=>{h.addEventListener("click",()=>le(h.dataset.quickTheme))}),(c=e("btnBrandHome"))==null||c.addEventListener("click",()=>{q({screen:"public",publicTab:"home"})}),(p=e("btnPortalPublicView"))==null||p.addEventListener("click",()=>{q({screen:"public",publicTab:"home"})}),(v=e("btnReturnPortal"))==null||v.addEventListener("click",()=>{}),(f=e("btnRefreshClub"))==null||f.addEventListener("click",async()=>{E("Syncing team data..."),await H(),A(),E("Team data synced")}),(y=e("btnRetrySync"))==null||y.addEventListener("click",async()=>{await H(),A()}),(g=e("btnInstallWebApp"))==null||g.addEventListener("click",async()=>{await Lt()&&(A(),E("App installed"))}),(w=e("btnLogout"))==null||w.addEventListener("click",()=>{Ae({title:"Confirm Sign Out",message:"Sign out of Cloud Sync on this browser?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{await Le(),u.drawerOpen=!1,u.portalMode==="admin"||A(),E("Signed out")}})}),($=e("btnTogglePw"))==null||$.addEventListener("click",()=>{const h=e("loginPassword"),R=e("btnTogglePw");if(!h||!R)return;const T=h.type==="password";h.type=T?"text":"password",R.textContent=T?"Hide":"Show"}),(m=e("btnForgotPw"))==null||m.addEventListener("click",()=>{var R,T;const h=((T=(R=e("loginEmail"))==null?void 0:R.value)==null?void 0:T.trim())||"";I({title:"Reset Password",subtitle:"Receive a Firebase password reset link on your registered email",fields:[{name:"email",label:"Registered Email",type:"email",value:h,required:!0}],submitLabel:"Send Reset Link",onSubmit:async F=>{await dt(F.email),E("Password reset email sent")}})}),(S=e("rdmPortalAuthForm"))==null||S.addEventListener("submit",async h=>{var F,C;h.preventDefault();const R=((F=e("loginEmail"))==null?void 0:F.value)||"",T=((C=e("loginPassword"))==null?void 0:C.value)||"";u.loginBusy=!0,u.loginError="",A();try{const P=await ct(R,T);if(u.loginBusy=!1,P.role!=="admin"){await Le(),u.loginError="Admin authorization required for this private link.",A();return}E("Admin Cloud Sync verified"),q({screen:"admin",adminTab:"overview"},{replace:!0})}catch(P){u.loginBusy=!1;const D=String((P==null?void 0:P.code)||(P==null?void 0:P.message)||"");D.includes("wrong-password")||D.includes("invalid-credential")||D.includes("user-not-found")||D.includes("INVALID_LOGIN_CREDENTIALS")?u.loginError="Invalid email or password.":D==="ACCOUNT_INACTIVE"||D==="NO_ACCOUNT_RECORD"||D==="INVALID_ROLE_MAPPING"?u.loginError="Your account is inactive or lacks Admin authorization.":D.includes("too-many-requests")?u.loginError="Too many attempts. Please wait before trying again.":u.loginError="Verification failed. Check your network and credentials.",A()}}),document.querySelectorAll("[data-public-tab]").forEach(h=>{h.addEventListener("click",()=>{q({screen:"public",publicTab:h.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(h=>{h.addEventListener("click",()=>{q({screen:"subpage",morePage:h.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(h=>{h.addEventListener("click",()=>{q({screen:"playerDetail",detailPlayerId:h.dataset.openPlayer})})}),(K=e("btnDownloadDetailCard"))==null||K.addEventListener("click",async()=>{const h=i.players.find(R=>R.id===u.detailPlayerId);if(h)try{await Ft({player:h,brandLogo:U()})}catch{E("Unable to export profile card")}});const r=e("squadSearchInput");r&&r.addEventListener("input",h=>{const R=h.target.selectionStart;u.squadQuery=h.target.value,A();const T=document.getElementById("squadSearchInput");if(T){T.focus();try{T.setSelectionRange(R,R)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(h=>{h.addEventListener("click",()=>{u.squadFilter=h.dataset.squadFilter,A()})}),document.querySelectorAll("[data-matches-sub]").forEach(h=>{h.addEventListener("click",()=>{u.matchesSubTab=h.dataset.matchesSub,A()})}),document.querySelectorAll("[data-gallery-album]").forEach(h=>{h.addEventListener("click",()=>{u.galleryAlbum=h.dataset.galleryAlbum,A()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(h=>{h.addEventListener("click",()=>{const T=i.gallery.filter(F=>{const C=String(F.album||"MEMORIES").toUpperCase();return u.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(C):C===u.galleryAlbum})[Number(h.dataset.zoomGallery)];T!=null&&T.image&&We(T.image,b(T.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(h=>{h.addEventListener("click",()=>We(h.dataset.zoomSrc,h.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(h=>{h.addEventListener("click",()=>Ot(h.dataset.extUrl))}),Xt()}function Xt(){X()&&(document.querySelectorAll("[data-admin-tab]").forEach(e=>{e.addEventListener("click",()=>{q({screen:"admin",adminTab:e.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(e=>{e.addEventListener("click",()=>Qt(e.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(e=>{e.addEventListener("click",()=>{const t=i.players.find(a=>a.id===e.dataset.adminEditPlayer);t&&I({title:`Edit ${b(t.name)}`,fields:[{name:"name",label:"Player Name",value:t.name,required:!0},{name:"role",label:"Role",value:t.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:t.detail,rows:3},{name:"jersey",label:"Jersey Number",value:t.jersey||""},{name:"nick",label:"Nickname",value:t.nick||""},{name:"bio",label:"Bio",type:"textarea",value:t.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async a=>{const r={...a};a.photo&&(r.image=await we(a.photo,700,.74)),await mt(t.id,r),A(),E("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.adminRemovePlayer,a=i.players.find(r=>r.id===t);Ae({title:"Remove Player",message:`Remove ${b((a==null?void 0:a.name)||t)} (${t}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:async()=>{await bt(t),A(),E("Player removed")}})})}),document.querySelectorAll("[data-admin-edit-stats]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.adminEditStats,a=i.players.find(o=>o.id===t),r=i.stats.find(o=>o.playerId===t)||{};I({title:`Stats · ${b((a==null?void 0:a.name)||t)}`,fields:[{name:"matches",label:"Matches",type:"number",value:r.matches||0},{name:"runs",label:"Runs",type:"number",value:r.runs||0},{name:"highScore",label:"High Score",type:"number",value:r.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:r.wickets||0},{name:"fours",label:"Fours",type:"number",value:r.fours||0},{name:"sixes",label:"Sixes",type:"number",value:r.sixes||0},{name:"fifties",label:"50s",type:"number",value:r.fifties||0},{name:"hundreds",label:"100s",type:"number",value:r.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:r.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:r.economy||0},{name:"bestBowling",label:"Best Bowling",value:r.bestBowling||""},{name:"season",label:"Season",value:r.season||"2027"}],onSubmit:async o=>{const n=d=>Number(d||0)||0;await B("PlayerStats",t,{playerId:t,matches:n(o.matches),runs:n(o.runs),highScore:n(o.highScore),wickets:n(o.wickets),fours:n(o.fours),sixes:n(o.sixes),fifties:n(o.fifties),hundreds:n(o.hundreds),strikeRate:n(o.strikeRate),economy:n(o.economy),bestBowling:o.bestBowling,season:o.season}),A(),E("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(e=>{e.addEventListener("click",()=>{var r;const t=e.dataset.adminAvail,a=((r=i.availability.find(o=>o.playerId===t))==null?void 0:r.status)||"AVAILABLE";I({title:`Availability · ${t}`,fields:[{name:"status",label:"Status",type:"select",value:a,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async o=>{await pt(t,o.status),A(),E("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(e=>{e.addEventListener("click",()=>{const t=i.matches.find(a=>a._docId===e.dataset.adminEditMatch);t&&ot(t)})}),document.querySelectorAll("[data-admin-edit-social]").forEach(e=>{e.addEventListener("click",()=>{const t=i.socials.find(a=>a._docId===e.dataset.adminEditSocial);t&&I({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:t.name||"",required:!0},{name:"displayName",label:"Display Title",value:t.displayName||t.name||""},{name:"url",label:"URL",value:t.url||"",placeholder:"https://..."}],onSubmit:async a=>{await B("Socials",t._docId,{name:a.name.toUpperCase(),displayName:a.displayName||a.name,url:a.url,icon:t.icon||"↗",order:t.order||9}),A(),E("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(e=>{e.addEventListener("click",async()=>{const[t,a,r]=e.dataset.adminPin.split(":");try{await ft(t,a,r==="1"),A(),E(r==="1"?"Pinned to Home":"Unpinned")}catch(o){E((o==null?void 0:o.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(e=>{e.addEventListener("click",()=>{const[t,a]=e.dataset.adminDel.split(":");Ae({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:async()=>{await ht(t,a),A(),E("Deleted")}})})}))}function ot(e=null){I({title:e?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(e==null?void 0:e.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(e==null?void 0:e.matchStatus)||(e==null?void 0:e.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(e==null?void 0:e.date)||""},{name:"time",label:"Time",type:"time",value:(e==null?void 0:e.time)||""},{name:"venueName",label:"Venue / Ground",value:(e==null?void 0:e.venueName)||(e==null?void 0:e.venue)||""},{name:"ourScore",label:"RDM Score",value:(e==null?void 0:e.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(e==null?void 0:e.oppScore)||""},{name:"result",label:"Result (if completed)",value:(e==null?void 0:e.result)||""},{name:"potm",label:"Player of the Match",value:(e==null?void 0:e.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(e==null?void 0:e.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async t=>{await B("Matches",(e==null?void 0:e._docId)||null,{...t,venue:t.venueName,status:t.matchStatus==="COMPLETED"?"RESULT":t.matchStatus,createdMs:(e==null?void 0:e.createdMs)||Date.now()}),A(),E("Match saved")}})}function Qt(e){if(e==="addMatch")return ot(null);if(e==="addNews")return I({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async t=>{await B("News",null,{title:t.title,text:t.text,pinned:!!t.pinned,createdMs:Date.now()}),A(),E("News added")}});if(e==="addUpdate")return I({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async t=>{await B("Updates",null,{category:t.category,title:t.title,text:t.text,url:t.url,pinned:!!t.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),A(),E("Update saved")}});if(e==="addGallery")return I({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async t=>{if(!t.photo)throw new Error("Image required");const a=await we(t.photo,960,.72);await B("Gallery",null,{image:a,caption:t.caption,album:t.album,createdMs:Date.now()}),A(),E("Photo uploaded")}});if(e==="addPlayer"){const t=i.players.map(r=>Number(String(r.id).replace(/\D/g,""))).filter(Number.isFinite),a=`RDM${String(Math.max(17,...t)+1).padStart(3,"0")}`;return I({title:`Add Player (${a})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async r=>{const o=r.photo?await we(r.photo,700,.74):"";await B("TeamPlayers",a,{id:a,name:r.name.toUpperCase(),role:r.role.toUpperCase(),detail:r.detail.toUpperCase(),jersey:r.jersey,image:o,order:i.players.length+1,active:!0}),A(),E("Player added")}})}if(e==="addLineup")return I({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async t=>{const a=n=>[...new Set(String(n||"").split(",").map(d=>d.trim().toUpperCase()).filter(d=>/^RDM\d{3}$/.test(d)))],r=a(t.players).slice(0,11),o=a(t.subs).filter(n=>!r.includes(n));if(r.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await B("PlayingXI",null,{title:t.title,match:t.match,players:r,subs:o,createdMs:Date.now()}),A(),E("Playing XI published")}});if(e==="addHonour")return I({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0}],onSubmit:async t=>{await B("Honours",null,{year:t.year,title:t.title,sub:t.sub,image:k.logoPath,order:i.honours.length+1}),A(),E("Honour saved")}});if(e==="addTournament")return I({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async t=>{await B("Tournaments",null,{...t,venue:t.venueName,createdMs:Date.now()}),A(),E("Tournament added")}});if(e==="addSocial")return I({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async t=>{await B("Socials",null,{name:t.name.toUpperCase(),displayName:t.displayName||t.name,url:t.url,icon:"↗",order:i.socials.length+1}),A(),E("Social channel added")}})}function Zt(){if(Ze())return;const e=Date.now();if(e-u.lastBackPressAt<2e3){It();return}u.lastBackPressAt=e,E("Press back again to exit RDM Official")}async function ea(){le(u.theme);const e=Qe();M.length=0,M.push(e);try{window.history.replaceState({rdmIdx:0},"",te(e))}catch{}window.addEventListener("popstate",()=>{if(Se()){Xe();try{window.history.pushState({rdmIdx:M.length-1},"",te(M[M.length-1]))}catch{}return}if(u.drawerOpen){ee(!1);try{window.history.pushState({rdmIdx:M.length-1},"",te(M[M.length-1]))}catch{}return}M.length>1&&(M.pop(),Re(M[M.length-1]))}),await Ct(Zt),window.addEventListener("rdm-pwa-ready",()=>{(u.screen==="public"&&u.publicTab==="more"||u.screen==="subpage"&&u.morePage==="download")&&A()}),await H(),lt(()=>{const t=document.activeElement,a=t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT");!Se()&&!a&&A()}),ut(({role:t,verified:a})=>{u.screen==="admin"||u.screen==="portalAuth"||u.screen==="playerPortal"?q({screen:"public",publicTab:"home"},{replace:!0}):A(),qe()}),setTimeout(()=>qe(),1200)}ea();export{Me as W};
