(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const g={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cricket_stadium_1794890926411.jpg",heritageImagePath:"src/assets/images/club_heritage_banner_1794890926814.jpg"},ue={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},fe={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},J=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((e,t)=>{var a,n;return{id:e[0],name:e[1],role:e[2],detail:e[3],jersey:e[4],image:"",nick:((a=fe[e[0]])==null?void 0:a.nick)||"",bio:((n=fe[e[0]])==null?void 0:n.bio)||"",socials:[],order:t+1,_docId:e[0]}}),_e=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],Ue=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function p(e=""){const t=String(e??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!t)return"";const a={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},n=t.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,i=>a[i]||i);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(n)?n.toUpperCase():n===n.toUpperCase()&&/[A-Z]{2,}/.test(n)&&n.length>4?n.toLowerCase().replace(/\b([a-z])/g,(s,u,l,c)=>{var f;const m=((f=c.slice(l).match(/^[a-z]+/i))==null?void 0:f[0])||"";return l>0&&c[l-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(m.toLowerCase())?m.toLowerCase().charAt(0):u.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,s=>s.toUpperCase()).replace(/\bSk\./gi,"SK."):n}function r(e=""){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function j(e=""){const t=String(e||"").trim();return/^https?:\/\//i.test(t)?t:""}function oe(e=""){const t=String(e||"").trim();return!!(!t||/^data:image\/svg\+xml/i.test(t)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(t))}function qe(e,t=""){const a=String(e||"").trim();return oe(a)?t&&!oe(t)?t:g.logoPath:a}function se(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function K(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function Y(){var e,t,a,n;return((n=(a=(t=(e=window.firebase)==null?void 0:e.firestore)==null?void 0:t.FieldValue)==null?void 0:a.serverTimestamp)==null?void 0:n.call(a))||new Date}const N=e=>({...e.data(),_docId:e.id}),o={ready:!1,loadingData:!1,loadError:"",authChecked:!1,user:null,account:null,role:"guest",playerId:null,brandLogo:g.logoPath,players:J.map(e=>({...e})),matches:[],news:[],updates:[],honours:_e.map(e=>({...e})),gallery:[],socials:Ue.map(e=>({...e})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function x(){return!!(o.user&&o.account&&o.account.active===!0&&o.account.role==="admin"&&o.role==="admin")}function st(e,t,a){const n=new Map(J.map((l,c)=>[l.id,c+1])),i=new Map(J.map(l=>[l.id,l]));let s;return e.length>0?(s=e.map(l=>{const c=i.get(l.id);return{id:l.id,name:l.name||(c==null?void 0:c.name)||l.id,role:l.role||(c==null?void 0:c.role)||"",detail:l.detail||(c==null?void 0:c.detail)||"",jersey:l.jersey??(c==null?void 0:c.jersey)??"",image:oe(l.image)?"":l.image||"",nick:"",bio:"",socials:[],order:typeof l.order=="number"?l.order:n.get(l.id)||999,active:l.active!==!1,_docId:l._docId||l.id}}),J.forEach(l=>{s.some(c=>c.id===l.id)||s.push({...l})})):s=J.map(l=>({...l})),s.sort((l,c)=>(l.order||999)-(c.order||999)),[...t].sort((l,c)=>{const m=a&&l._docId===a?1:0,f=a&&c._docId===a?1:0;return m-f}).forEach(l=>{const c=s.find(m=>m.id===l.playerId);c&&(l.jersey!==void 0&&l.jersey!==null&&l.jersey!==""&&(c.jersey=String(l.jersey)),l.nick!==void 0&&l.nick!==null&&l.nick!==""&&(c.nick=String(l.nick)),l.bio!==void 0&&l.bio!==null&&l.bio!==""&&(c.bio=String(l.bio)),"image"in l&&l.image!==void 0&&l.image!==null&&(c.image=oe(l.image)?"":String(l.image)),Array.isArray(l.socials)&&(c.socials=l.socials.slice(0,3)),c._profileUid=l._docId)}),s.forEach(l=>{const c=fe[l.id];c&&(l.nick||(l.nick=c.nick),l.bio||(l.bio=c.bio))}),s.filter(l=>l.active!==!1)}async function W(){var t,a;const e=K();if(!e)return o.loadError="Firebase is unavailable. Check your internet connection and retry.",o.ready=!0,!1;o.loadingData=!0,o.loadError="";try{const[n,i,s,u,l,c,m,f,b,y,w,S,M,E,H]=await Promise.all([e.collection("TeamPlayers").get(),e.collection("Matches").get(),e.collection("News").get(),e.collection("Honours").get(),e.collection("Gallery").get(),e.collection("Socials").get(),e.collection("PlayerProfiles").get(),e.collection("PlayerStats").get(),e.collection("Achievements").get(),e.collection("Availability").get(),e.collection("PlayingXI").get(),e.collection("TeamRecords").get(),e.collection("Tournaments").get(),e.collection("Opponents").get(),e.collection("Updates").get()]),z=((a=(t=se())==null?void 0:t.currentUser)==null?void 0:a.uid)||"";o.players=st(n.docs.map(N),m.docs.map(N),z),o.matches=i.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.news=s.docs.map(N).sort((v,A)=>(A.pinned?1:0)-(v.pinned?1:0)||(A.createdMs||0)-(v.createdMs||0)),o.honours=u.empty?_e.map(v=>({...v})):u.docs.map(N).sort((v,A)=>(v.order||999)-(A.order||999)),o.gallery=l.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.socials=c.empty?Ue.map(v=>({...v})):c.docs.map(N).sort((v,A)=>(v.order||999)-(A.order||999)),o.stats=f.docs.map(N),o.achievements=b.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.availability=y.docs.map(N),o.lineups=w.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.records=S.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.tournaments=M.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.opponents=E.docs.map(N).sort((v,A)=>(A.createdMs||0)-(v.createdMs||0)),o.updates=H.docs.filter(v=>v.id!=="_news_updates_swap_v1").map(N).sort((v,A)=>(A.pinned?1:0)-(v.pinned?1:0)||(A.createdMs||0)-(v.createdMs||0));try{const v=await e.collection("BrandSettings").doc("main").get();if(v.exists){const A=v.data()||{};A.logo&&!oe(A.logo)&&(o.brandLogo=A.logo)}}catch{o.brandLogo=g.logoPath}return o.ready=!0,!0}catch(n){return console.error("Club data load failed",n),o.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",o.ready=!0,!1}finally{o.loadingData=!1}}async function je(e){var n,i,s,u;const t=se(),a=K();if(!e||!a)return o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const l=await a.collection("Accounts").doc(e.uid).get();if(!l.exists)return await((n=t==null?void 0:t.signOut)==null?void 0:n.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const c=l.data()||{};if(c.active!==!0)return await((i=t==null?void 0:t.signOut)==null?void 0:i.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(c.role==="admin")return o.user=e,o.account=c,o.role="admin",o.playerId=c.playerId||null,{ok:!0,role:"admin",account:c};const m=typeof c.playerId=="string"?c.playerId.trim():"";return m&&(o.players.some(b=>b.id===m)||J.some(b=>b.id===m))?(o.user=e,o.account=c,o.role="player",o.playerId=m,{ok:!0,role:"player",playerId:m,account:c}):(await((s=t==null?void 0:t.signOut)==null?void 0:s.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(l){return console.error("Account verification failed",l),await((u=t==null?void 0:t.signOut)==null?void 0:u.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:(l==null?void 0:l.code)||"VERIFICATION_ERROR"}}}async function rt(e,t){const a=se();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const n=String(e||"").trim(),i=String(t||"");if(!n||!i)throw new Error("EMAIL_PASSWORD_REQUIRED");const s=await a.signInWithEmailAndPassword(n,i),u=await je(s.user);if(!u.ok){const l=new Error(u.reason||"ACCOUNT_NOT_AUTHORIZED");throw l.code=u.reason,l}return await W(),u}async function it(e){const t=se();if(!t)throw new Error("FIREBASE_UNAVAILABLE");const a=String(e||"").trim();if(!a)throw new Error("EMAIL_REQUIRED");await t.sendPasswordResetEmail(a)}async function Ee(){const e=se();e&&await e.signOut(),o.user=null,o.account=null,o.role="guest",o.playerId=null}function ot(e){const t=se();return t?t.onAuthStateChanged(async a=>{if(!a){o.user=null,o.account=null,o.role="guest",o.playerId=null,o.authChecked=!0,e({role:"guest",verified:!1});return}const n=await je(a);o.authChecked=!0,e({role:n.ok?n.role:"guest",verified:n.ok,reason:n.ok?"":n.reason})}):(o.authChecked=!0,e({role:"guest",verified:!1}),()=>{})}async function lt(e,t){const a=K();if(!a||!o.user)throw new Error("AUTH_REQUIRED");const n=String(t||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(n))throw new Error("INVALID_STATUS");if(!x()&&!(o.role==="player"&&o.playerId===e))throw new Error("NOT_ALLOWED");await a.collection("Availability").doc(e).set({playerId:e,status:n,updatedAt:Y()},{merge:!0}),await W()}async function U(e,t,a){const n=K();if(!n||!x())throw new Error("ADMIN_REQUIRED");const i={...a,updatedAt:Y()};delete i._docId,t?await n.collection(e).doc(t).set(i,{merge:!0}):await n.collection(e).add({...i,createdMs:i.createdMs||Date.now()}),await W()}async function ct(e,t){const a=K();if(!a||!x())throw new Error("ADMIN_REQUIRED");const n={id:e,name:String(t.name||"").trim(),role:String(t.role||"").trim(),detail:String(t.detail||"").trim(),jersey:String(t.jersey||"").trim(),active:!0,updatedAt:Y()};"image"in t&&t.image!==void 0&&(n.image=t.image),await a.collection("TeamPlayers").doc(e).set(n,{merge:!0});const i=o.players.find(l=>l.id===e),s=(i==null?void 0:i._profileUid)||`profile_${e}`,u={playerId:e,jersey:n.jersey,nick:String(t.nick??(i==null?void 0:i.nick)??"").trim(),bio:String(t.bio??(i==null?void 0:i.bio)??"").trim(),updatedAt:Y()};"image"in t&&t.image!==void 0&&(u.image=t.image),await a.collection("PlayerProfiles").doc(s).set(u,{merge:!0}),await W()}async function dt(e,t){const a=K();if(!a||!x()||!t)throw new Error("ADMIN_REQUIRED");await a.collection(e).doc(t).delete(),await W()}async function ut(e){const t=K();if(!t||!x()||!e)throw new Error("ADMIN_REQUIRED");J.some(n=>n.id===e)?await t.collection("TeamPlayers").doc(e).set({id:e,active:!1,updatedAt:Y()},{merge:!0}):await t.collection("TeamPlayers").doc(e).delete(),await W()}async function mt(e,t,a){const n=K();if(!n||!x())throw new Error("ADMIN_REQUIRED");if(a){const i=await n.collection(e).where("pinned","==",!0).get();if(!i.empty){const s=n.batch();i.docs.forEach(u=>{u.id!==t&&s.set(u.ref,{pinned:!1,updatedAt:Y()},{merge:!0})}),await s.commit()}}await n.collection(e).doc(t).set({pinned:!!a,updatedAt:Y()},{merge:!0}),await W()}function ve(e,t=960,a=.74){return new Promise((n,i)=>{if(!e)return n("");const s=new FileReader;s.onerror=()=>i(new Error("READ_FAILED")),s.onload=()=>{const u=new Image;u.onerror=()=>i(new Error("IMAGE_INVALID")),u.onload=()=>{const l=Math.min(1,t/Math.max(u.width,u.height)),c=document.createElement("canvas");c.width=Math.max(1,Math.round(u.width*l)),c.height=Math.max(1,Math.round(u.height*l)),c.getContext("2d").drawImage(u,0,0,c.width,c.height);let m=c.toDataURL("image/jpeg",a);if(m.length>72e4&&(m=c.toDataURL("image/jpeg",.56)),m.length>9e5)return i(new Error("IMAGE_TOO_LARGE"));n(m)},u.src=s.result},s.readAsDataURL(e)})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var ae;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(ae||(ae={}));class be extends Error{constructor(t,a,n){super(t),this.message=t,this.code=a,this.data=n}}const pt=e=>{var t,a;return e!=null&&e.androidBridge?"android":!((a=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},ht=e=>{const t=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},n=a.Plugins=a.Plugins||{},i=()=>t!==null?t.name:pt(e),s=()=>i()!=="web",u=b=>{const y=m.get(b);return!!(y!=null&&y.platforms.has(i())||l(b))},l=b=>{var y;return(y=a.PluginHeaders)===null||y===void 0?void 0:y.find(w=>w.name===b)},c=b=>e.console.error(b),m=new Map,f=(b,y={})=>{const w=m.get(b);if(w)return console.warn(`Capacitor plugin "${b}" already registered. Cannot register plugins twice.`),w.proxy;const S=i(),M=l(b);let E;const H=async()=>(!E&&S in y?E=typeof y[S]=="function"?E=await y[S]():E=y[S]:t!==null&&!E&&"web"in y&&(E=typeof y.web=="function"?E=await y.web():E=y.web),E),z=(D,I)=>{var h,T;if(M){const k=M==null?void 0:M.methods.find(L=>I===L.name);if(k)return k.rtype==="promise"?L=>a.nativePromise(b,I.toString(),L):(L,O)=>a.nativeCallback(b,I.toString(),L,O);if(D)return(h=D[I])===null||h===void 0?void 0:h.bind(D)}else{if(D)return(T=D[I])===null||T===void 0?void 0:T.bind(D);throw new be(`"${b}" plugin is not implemented on ${S}`,ae.Unimplemented)}},v=D=>{let I;const h=(...T)=>{const k=H().then(L=>{const O=z(L,D);if(O){const F=O(...T);return I=F==null?void 0:F.remove,F}else throw new be(`"${b}.${D}()" is not implemented on ${S}`,ae.Unimplemented)});return D==="addListener"&&(k.remove=async()=>I()),k};return h.toString=()=>`${D.toString()}() { [capacitor code] }`,Object.defineProperty(h,"name",{value:D,writable:!1,configurable:!1}),h},A=v("addListener"),re=v("removeListener"),ce=(D,I)=>{const h=A({eventName:D},I).then(L=>L),T=async()=>{const L=await h;await re({eventName:D,callbackId:L})},k=new Promise(L=>h.then(()=>L({remove:T})));return k.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await T()},k},Q=new Proxy({},{get(D,I){switch(I){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return M?ce:A;case"removeListener":return re;default:return v(I)}}});return n[b]=Q,m.set(b,{name:b,proxy:Q,platforms:new Set([...Object.keys(y),...M?[S]:[]])}),Q};return a.convertFileSrc||(a.convertFileSrc=b=>b),a.getPlatform=i,a.handleError=c,a.isNativePlatform=s,a.isPluginAvailable=u,a.registerPlugin=f,a.Exception=be,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},bt=e=>e.Capacitor=ht(e),G=bt(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),X=G.registerPlugin;class we{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,a){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(a);const s=this.windowListeners[t];s&&!s.registered&&this.addWindowListener(s),n&&this.sendRetainedArgumentsForEvent(t);const u=async()=>this.removeListener(t,a);return Promise.resolve({remove:u})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,a,n){const i=this.listeners[t];if(!i){if(n){let s=this.retainedEventArguments[t];s||(s=[]),s.push(a),this.retainedEventArguments[t]=s}return}i.forEach(s=>s(a))}hasListeners(t){var a;return!!(!((a=this.listeners[t])===null||a===void 0)&&a.length)}registerWindowListener(t,a){this.windowListeners[a]={registered:!1,windowEventName:t,pluginEventName:a,handler:n=>{this.notifyListeners(a,n)}}}unimplemented(t="not implemented"){return new G.Exception(t,ae.Unimplemented)}unavailable(t="not available"){return new G.Exception(t,ae.Unavailable)}async removeListener(t,a){const n=this.listeners[t];if(!n)return;const i=n.indexOf(a);i!==-1&&this.listeners[t].splice(i,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const a=this.retainedEventArguments[t];a&&(delete this.retainedEventArguments[t],a.forEach(n=>{this.notifyListeners(t,n)}))}}const Pe=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Te=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class yt extends we{async getCookies(){const t=document.cookie,a={};return t.split(";").forEach(n=>{if(n.length<=0)return;let[i,s]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Te(i).trim(),s=Te(s).trim(),a[i]=s}),a}async setCookie(t){try{const a=Pe(t.key),n=Pe(t.value),i=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",s=(t.path||"/").replace("path=",""),u=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${a}=${n||""}${i}; path=${s}; ${u};`}catch(a){return Promise.reject(a)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const a of t)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}X("CapacitorCookies",{web:()=>new yt});const ft=async e=>new Promise((t,a)=>{const n=new FileReader;n.onload=()=>{const i=n.result;t(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>a(i),n.readAsDataURL(e)}),vt=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(i=>i.toLocaleLowerCase()).reduce((i,s,u)=>(i[s]=e[t[u]],i),{})},gt=(e,t=!0)=>e?Object.entries(e).reduce((n,i)=>{const[s,u]=i;let l,c;return Array.isArray(u)?(c="",u.forEach(m=>{l=t?encodeURIComponent(m):m,c+=`${s}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(u):u,c=`${s}=${l}`),`${n}&${c}`},"").substr(1):null,wt=(e,t={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},t),i=vt(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[u,l]of Object.entries(e.data||{}))s.set(u,l);a.body=s.toString()}else if(i.includes("multipart/form-data")||e.data instanceof FormData){const s=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{s.append(c,l)});else for(const l of Object.keys(e.data))s.append(l,e.data[l]);a.body=s;const u=new Headers(a.headers);u.delete("content-type"),a.headers=u}else(i.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class St extends we{async request(t){const a=wt(t,t.webFetchExtra),n=gt(t.params,t.shouldEncodeUrlParams),i=n?`${t.url}?${n}`:t.url,s=await fetch(i,a),u=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?t:{};u.includes("application/json")&&(l="json");let c,m;switch(l){case"arraybuffer":case"blob":m=await s.blob(),c=await ft(m);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const f={};return s.headers.forEach((b,y)=>{f[y]=b}),{data:c,headers:f,status:s.status,url:s.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}X("CapacitorHttp",{web:()=>new St});var Me;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Me||(Me={}));var Re;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Re||(Re={}));class At extends we{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}X("SystemBars",{web:()=>new At});const kt="modulepreload",$t=function(e,t){return new URL(e,t).href},Le={},Se=function(t,a,n){let i=Promise.resolve();if(a&&a.length>0){let u=function(f){return Promise.all(f.map(b=>Promise.resolve(b).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),m=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=u(a.map(f=>{if(f=$t(f,n),f in Le)return;Le[f]=!0;const b=f.endsWith(".css"),y=b?'[rel="stylesheet"]':"";if(!!n)for(let M=l.length-1;M>=0;M--){const E=l[M];if(E.href===f&&(!b||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${y}`))return;const S=document.createElement("link");if(S.rel=b?"stylesheet":kt,b||(S.as="script"),S.crossOrigin="",S.href=f,m&&S.setAttribute("nonce",m),document.head.appendChild(S),b)return new Promise((M,E)=>{S.addEventListener("load",M),S.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(u){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=u,window.dispatchEvent(l),!l.defaultPrevented)throw u}return i.then(u=>{for(const l of u||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},We=X("App",{web:()=>Se(()=>import("./web-DeopEV9O.js"),[],import.meta.url).then(e=>new e.AppWeb)});var me;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(me||(me={}));var De;(function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"})(De||(De={}));const ye=X("StatusBar"),Et=X("SplashScreen",{web:()=>Se(()=>import("./web-Dw_-AfoS.js"),[],import.meta.url).then(e=>new e.SplashScreenWeb)});var Ce;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Ce||(Ce={}));var Ie;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(Ie||(Ie={}));const Oe=X("Keyboard"),Pt=X("Browser",{web:()=>Se(()=>import("./web-Ct6N1xxT.js"),[],import.meta.url).then(e=>new e.BrowserWeb)});let Fe=!1,Z=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Z=e,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function Ge(){return G.isNativePlatform()}function ze(){return!G.isNativePlatform()&&!!Z}async function Tt(){if(!Z)return!1;try{await Z.prompt();const e=await Z.userChoice;if((e==null?void 0:e.outcome)==="accepted")return Z=null,!0}catch{}return!1}async function Ve(e="azure"){const t={azure:"#F2F7FD",daylight:"#FFFFFF",turf:"#F4F9F6",night:"#071224"},a=t[e]||t.azure,n=document.getElementById("rdmThemeMeta");if(n&&(n.content=a),!!G.isNativePlatform())try{await ye.setOverlaysWebView({overlay:!1}),await ye.setBackgroundColor({color:a}),await ye.setStyle({style:e==="night"?me.Dark:me.Light})}catch{}}async function Mt(e){const t=localStorage.getItem("rdm-app-theme")||"azure";if(await Ve(t),G.isNativePlatform()){try{Oe.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const a=document.activeElement;a&&typeof a.scrollIntoView=="function"&&setTimeout(()=>{try{a.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),Oe.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!Fe&&typeof e=="function"){Fe=!0;try{We.addListener("backButton",({canGoBack:a})=>{e({canGoBack:a})})}catch{}}}}async function Ne(){if(G.isNativePlatform())try{await Et.hide({fadeOutDuration:220})}catch{}}async function Rt(){if(G.isNativePlatform())try{await We.exitApp()}catch{}}async function Lt(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(G.isNativePlatform())try{return await Pt.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}let ie=[];function P(e){const t=document.getElementById("rdmToast");t&&(t.textContent=String(e||""),t.classList.add("show"),clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),2200))}function Ke(){return ie.length>0}function Xe(){const e=ie.pop();return e&&e.isConnected?(e.remove(),!0):!1}function pe(e){return ie.push(e),()=>{ie=ie.filter(t=>t!==e),e.isConnected&&e.remove()}}function ge({title:e,message:t,confirmLabel:a="Confirm",danger:n=!1,onConfirm:i}){const s=document.createElement("div");s.className="sheetOverlay show",s.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${r(e)}</h3>
      </div>
      <p class="confirmMessage">${r(t)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${n?"btnDanger":"btnPrimary"}" data-ok>${r(a)}</button>
      </div>
    </div>
  `,document.body.appendChild(s);const u=pe(s);s.querySelector("[data-cancel]").onclick=u,s.addEventListener("click",l=>{l.target===s&&u()}),s.querySelector("[data-ok]").onclick=async l=>{const c=l.currentTarget;c.disabled=!0;try{await i(),u()}catch(m){c.disabled=!1,P((m==null?void 0:m.message)||"Action failed")}}}function B({title:e,subtitle:t="",fields:a,submitLabel:n="Save",onSubmit:i}){const s=document.createElement("div");s.className="sheetOverlay show";const u=a.map(c=>{const m=c.required?"required":"",f=r(c.value??"");if(c.type==="textarea")return`
        <label class="fieldBlock">
          <span>${r(c.label)}</span>
          <textarea name="${r(c.name)}" rows="${c.rows||4}" placeholder="${r(c.placeholder||"")}" ${m}>${f}</textarea>
        </label>
      `;if(c.type==="select"){const b=(c.options||[]).map(y=>{const w=typeof y=="object"?y.value:y,S=typeof y=="object"?y.label:y,M=String(w)===String(c.value??"")?"selected":"";return`<option value="${r(w)}" ${M}>${r(S)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${r(c.label)}</span>
          <select name="${r(c.name)}">${b}</select>
        </label>
      `}return c.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${r(c.name)}" ${c.checked?"checked":""}>
          <span>${r(c.label)}</span>
        </label>
      `:c.type==="file"?`
        <label class="fieldBlock">
          <span>${r(c.label)}</span>
          <input type="file" name="${r(c.name)}" accept="image/*" ${m}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${r(c.label)}</span>
        <input type="${r(c.type||"text")}" name="${r(c.name)}" value="${f}" placeholder="${r(c.placeholder||"")}" ${m}>
      </label>
    `}).join("");s.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${r(e)}</h3>
          ${t?`<p class="sheetSub">${r(t)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${u}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${r(n)}</button>
      </div>
    </form>
  `,document.body.appendChild(s);const l=pe(s);s.querySelector("[data-cancel]").onclick=l,s.addEventListener("click",c=>{c.target===s&&l()}),s.querySelector("form").onsubmit=async c=>{c.preventDefault();const m=c.currentTarget,f=m.querySelector('[type="submit"]');f.disabled=!0;try{const b={};a.forEach(y=>{var S;const w=m.elements[y.name];w&&(y.type==="checkbox"?b[y.name]=w.checked:y.type==="file"?b[y.name]=((S=w.files)==null?void 0:S[0])||null:y.type==="textarea"?b[y.name]=String(w.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):b[y.name]=String(w.value??"").trim())}),await i(b),l()}catch(b){f.disabled=!1,P((b==null?void 0:b.message)||"Save failed")}}}function Be({currentTheme:e,onSelectTheme:t}){const a=document.createElement("div");a.className="sheetOverlay show";const n=[{id:"azure",name:"Sky Azure",desc:"Official Light Blue & White team palette",swatches:["#F2F7FD","#FFFFFF","#0958D9"]},{id:"daylight",name:"Stadium Daylight",desc:"Crisp high-clarity bright white canvas",swatches:["#FFFFFF","#F6F9FC","#1D4ED8"]},{id:"turf",name:"Emerald Turf",desc:"Championship cricket pitch green & white",swatches:["#F4F9F6","#FFFFFF","#0D7A4E"]},{id:"night",name:"Floodlight Night",desc:"Deep stadium navy dark mode",swatches:["#071224","#0E1F3A","#38BDF8"]}];a.innerHTML=`
    <div class="sheetCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>App Appearance</h3>
          <p class="sheetSub">Tap a palette to apply immediately</p>
        </div>
      </div>
      <div class="themeChoiceList">
        ${n.map(s=>`
          <button type="button" class="themeChoiceRow ${e===s.id?"active":""}" data-pick-theme="${s.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${s.swatches.map(u=>`<span style="background:${u}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${r(s.name)}</strong>
              <span>${r(s.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${e===s.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(a);const i=pe(a);a.addEventListener("click",s=>{s.target===a&&i()}),a.querySelectorAll("[data-pick-theme]").forEach(s=>{s.addEventListener("click",()=>{t(s.dataset.pickTheme),i()})})}function xe(e,t=""){const a=document.createElement("div");a.className="lightboxOverlay show",a.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${r(t||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${r(e)}" alt="${r(t||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(a);const n=pe(a);a.querySelector(".iconCloseBtn").onclick=n,a.addEventListener("click",i=>{(i.target===a||i.target.classList.contains("lightboxCanvas"))&&n()})}async function Dt({player:e,brandLogo:t}){const i=document.createElement("canvas");i.width=1080,i.height=1350;const s=i.getContext("2d"),u=w=>new Promise((S,M)=>{const E=new Image;E.crossOrigin="anonymous",E.onload=()=>S(E),E.onerror=M,E.src=w}),l=(w,S,M,E,H,z,v)=>{s.beginPath(),s.moveTo(w+H,S),s.arcTo(w+M,S,w+M,S+E,H),s.arcTo(w+M,S+E,w,S+E,H),s.arcTo(w,S+E,w,S,H),s.arcTo(w,S,w+M,S,H),s.closePath(),z&&(s.fillStyle=z,s.fill()),v&&(s.strokeStyle=v,s.lineWidth=2,s.stroke())},c=s.createLinearGradient(0,0,1080,1350);c.addColorStop(0,"#EDF5FF"),c.addColorStop(1,"#FFFFFF"),s.fillStyle=c,s.fillRect(0,0,1080,1350),l(40,40,1e3,1270,40,"#FFFFFF","#C9DFF7"),l(80,80,920,10,5,"#0958D9",null);let m=null;try{m=await u(t||g.logoPath)}catch{}m&&s.drawImage(m,84,120,74,74),s.textAlign="left",s.fillStyle="#0B2340",s.font='800 34px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',s.fillText("REHAN DOMINATORS MAHUAWAN",176,156),s.fillStyle="#5B7693",s.font='600 18px "Plus Jakarta Sans", sans-serif',s.fillText("MAHUAWAN • GOPALGANJ • BIHAR",176,186);let f=null;try{f=await u(qe(e.image,t))}catch{f=m}if(f){s.save(),s.beginPath(),s.arc(1080/2,370,140,0,Math.PI*2),s.clip();const w=Math.max(280/f.width,280/f.height);s.drawImage(f,1080/2-f.width*w/2,370-f.height*w/2,f.width*w,f.height*w),s.restore(),s.strokeStyle="#0958D9",s.lineWidth=8,s.beginPath(),s.arc(1080/2,370,146,0,Math.PI*2),s.stroke()}s.textAlign="center",s.fillStyle="#0B2340",s.font='800 58px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',s.fillText(p(e.name),1080/2,580),l(120,620,840,124,24,"#F2F7FD","#CFE2F7"),s.fillStyle="#0958D9",s.font='700 16px "Plus Jakarta Sans", sans-serif',s.fillText("PLAYER CODE",330,662),s.fillText("JERSEY NUMBER",750,662),s.fillStyle="#0B2340",s.font='700 30px "JetBrains Mono", monospace',s.fillText(ue[e.id]||e.id,330,708),s.fillText(e.jersey?`#${e.jersey}`:"—",750,708),l(120,774,840,140,24,"#F8FBFF","#D9E8F7"),s.fillStyle="#0958D9",s.font='700 24px "Plus Jakarta Sans", sans-serif',s.fillText(p(e.role||""),1080/2,828),s.fillStyle="#3E5A78",s.font='600 20px "Plus Jakarta Sans", sans-serif',s.fillText(p(e.detail||"").slice(0,66),1080/2,872),s.fillStyle="#0958D9",s.font='700 18px "Plus Jakarta Sans", sans-serif',s.fillText("ONE TEAM • ONE DREAM • ONE DOMINATION",1080/2,1234),s.fillStyle="#5B7693",s.font='600 15px "Plus Jakarta Sans", sans-serif',s.fillText("RDM OFFICIAL • PLAYER IDENTITY CARD",1080/2,1266);const b=i.toDataURL("image/png"),y=document.createElement("a");y.href=b,y.download=`${e.id}-${String(e.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,document.body.appendChild(y),y.click(),y.remove(),P("Player card downloaded")}const he=[{id:"azure",label:"Sky Azure",desc:"Light Blue & White",swatches:["#F2F7FD","#FFFFFF","#0958D9"]},{id:"daylight",label:"Stadium Daylight",desc:"Crisp High-Key White",swatches:["#FFFFFF","#F6F9FC","#1D4ED8"]},{id:"turf",label:"Emerald Turf",desc:"Cricket Pitch Green",swatches:["#F4F9F6","#FFFFFF","#0D7A4E"]},{id:"night",label:"Floodlight Night",desc:"Deep Stadium Navy",swatches:["#071224","#0E1F3A","#38BDF8"]}],d={screen:"welcome",publicTab:"home",matchesSubTab:"fixtures",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",drawerOpen:!1,theme:It(),loginError:"",loginBusy:!1,lastBackPressAt:0},R=[];function Je(){return{screen:d.screen,publicTab:d.publicTab,matchesSubTab:d.matchesSubTab,detailPlayerId:d.detailPlayerId,morePage:d.morePage,adminTab:d.adminTab}}function Ct(e,t){return e&&t&&e.screen===t.screen&&e.publicTab===t.publicTab&&e.matchesSubTab===t.matchesSubTab&&e.detailPlayerId===t.detailPlayerId&&e.morePage===t.morePage&&e.adminTab===t.adminTab}function te(e){return e.screen==="welcome"?"#welcome":e.screen==="playerDetail"&&e.detailPlayerId?`#player-${e.detailPlayerId}`:e.screen==="subpage"?`#section-${e.morePage}`:e.screen==="login"?"#admin-login":e.screen==="admin"?`#admin-${e.adminTab}`:`#${e.publicTab||"home"}`}function Ae(e){d.screen=e.screen,d.publicTab=e.publicTab||"home",d.matchesSubTab=e.matchesSubTab||"fixtures",d.detailPlayerId=e.detailPlayerId||null,d.morePage=e.morePage||"news",d.adminTab=e.adminTab||"overview",d.drawerOpen=!1,$(),window.scrollTo({top:0,behavior:"auto"})}function C(e,{push:t=!0,replace:a=!1}={}){e.screen==="admin"&&!x()&&(P("Admin authorization required"),e={...e,screen:"login"});const n={...Je(),...e},i=R[R.length-1];if(!Ct(i,n)){if(a&&R.length>0){R[R.length-1]=n;try{window.history.replaceState({rdmIdx:R.length-1},"",te(n))}catch{}}else if(t||R.length===0){R.push(n);try{window.history.pushState({rdmIdx:R.length-1},"",te(n))}catch{}}}Ae(n)}function ee(e){d.drawerOpen=!!e;const t=document.getElementById("drawerOverlay");if(t){const a=t.querySelector(".drawerPanel");a&&(a.style.transform=""),t.classList.remove("dragging"),t.classList.toggle("open",d.drawerOpen),t.setAttribute("aria-hidden",d.drawerOpen?"false":"true")}else $()}function Ye(){if(Ke())return Xe(),!0;if(d.drawerOpen)return ee(!1),!0;if(R.length>1){R.pop();const e=R[R.length-1];try{window.history.replaceState({rdmIdx:R.length-1},"",te(e))}catch{}return Ae(e),!0}return!1}function It(){try{const e=localStorage.getItem("rdm-app-theme")||"azure";return he.some(t=>t.id===e)?e:"azure"}catch{return"azure"}}function ke(e){var t;return((t=he.find(a=>a.id===e))==null?void 0:t.label)||"Sky Azure"}function de(e){const t=he.some(a=>a.id===e)?e:"azure";d.theme=t,document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("rdm-app-theme",t)}catch{}Ve(t),$()}function _(){return o.brandLogo||g.logoPath}function $e(e){const t=qe(e,_()),a=t===_()||t===g.logoPath;return{src:t,cls:a?"avatarCircle is-crest":"avatarCircle is-photo"}}function q(e){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[e]||""}function He(e){return{home:q("home"),squad:q("squad"),matches:q("matches"),gallery:q("gallery"),more:q("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[e]||""}function Ot(){return`
    <section class="welcomeScreen" aria-label="Welcome to RDM Official Cricket Team">
      <div class="welcomeBackdrop" aria-hidden="true">
        <img src="${r(g.heroImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="welcomeTopStrip">
        <span class="welcomeTopMark">CRICKET TEAM · EST. ${r(g.founded)}</span>
        <button type="button" class="iconActionBtn" id="btnPickTheme" aria-label="Change app theme">
          <span>Theme · ${r(ke(d.theme))}</span>
        </button>
      </div>
      <div class="welcomeMainGrid">
        <div class="welcomeCenter">
          <div class="welcomeCrest">
            <img src="${r(_())}" alt="RDM Official Cricket Team Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
          </div>
          <span class="welcomeKicker">OFFICIAL CRICKET TEAM</span>
          <h1 class="welcomeHeading">WELCOME TO RDM OFFICIAL</h1>
          <p class="welcomeSubtitle">${r(g.subtitle)}</p>
          <p class="welcomeTagline">${r(g.tagline)}</p>
          <div class="welcomeFactsRow" aria-label="Team highlights">
            <div class="welcomeFactItem">
              <strong class="num">${o.players.length}</strong>
              <span>Squad</span>
            </div>
            <div class="welcomeFactItem">
              <strong class="num">${o.honours.length}</strong>
              <span>Honours</span>
            </div>
            <div class="welcomeFactItem">
              <strong class="num">${r(g.founded)}</strong>
              <span>Founded</span>
            </div>
          </div>
          <div class="welcomeActions">
            <button type="button" class="btnPrimary btnFull" id="btnContinueGuest">
              <span>CONTINUE AS GUEST</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div class="welcomeShowcase" aria-hidden="true">
          <img src="${r(g.heroImagePath)}" alt="" referrerPolicy="no-referrer">
          <div class="welcomeShowcaseCaption">
            <strong>${r(p(g.orgName))}</strong>
            <span>${r(g.locationLabel)} · Official Cricket Team</span>
          </div>
        </div>
      </div>
      <footer class="welcomeFooter">${r(g.location)}</footer>
    </section>
  `}function ne({title:e="RDM Official",showBack:t=!1,showPublicNav:a=!0,rightActionHtml:n=""}){const i=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],s=t?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,u=n||(x()?'<button type="button" class="topActionBtn is-primary" id="btnTopAdminDash">Admin Console</button>':'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>');return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${s}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${r(_())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
            <span class="topBrandText">${r(e)}</span>
          </button>
        </div>
        ${a?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${i.map(([l,c])=>`
              <button type="button" class="topNavLink ${d.screen==="public"&&d.publicTab===l?"active":""}" data-public-tab="${l}">${c}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${u}
        </div>
      </div>
    </header>
  `}function Ft(){const e=x(),t=[["home","Home"],["squad","Squad Roster"],["matches","Matches Centre"],["gallery","Team Gallery"],["more","Settings & More"]],a=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]];return`
    <div class="drawerOverlay ${d.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${d.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${r(_())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Main</div>
          ${t.map(([n,i])=>`
            <button type="button" class="drawerNavBtn ${d.screen==="public"&&d.publicTab===n?"active":""}" data-public-tab="${n}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${He(n)}</span>
                <span>${i}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}

          <div class="drawerGroupLabel">Team Sections</div>
          ${a.map(([n,i])=>`
            <button type="button" class="drawerNavBtn ${d.screen==="subpage"&&d.morePage===n?"active":""}" data-open-subpage="${n}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${He(n)}</span>
                <span>${i}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${r(ke(d.theme))}</button>
          ${e?`<button type="button" class="btnPrimary btnSm btnFull" id="btnDrawerAdmin">Admin Console</button>
               <button type="button" class="btnDanger btnSm btnFull" id="btnLogout">Admin Logout</button>`:'<button type="button" class="btnGhost btnSm btnFull" id="btnDrawerAdminLogin">Admin Access</button>'}
        </div>
      </aside>
    </div>
  `}function le(){const e=x();return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${r(_())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
          <div>
            <strong>${r(p(g.orgName))}</strong>
            <span>${r(g.location)} · Est. ${r(g.founded)}</span>
          </div>
        </div>
        <div class="webFooterLinks">
          <button type="button" class="webFooterLink" data-public-tab="home">Home</button>
          <button type="button" class="webFooterLink" data-public-tab="squad">Squad</button>
          <button type="button" class="webFooterLink" data-public-tab="matches">Matches</button>
          <button type="button" class="webFooterLink" data-public-tab="gallery">Gallery</button>
          <button type="button" class="webFooterLink" data-open-subpage="records">Records</button>
          <button type="button" class="webFooterLink" data-open-subpage="honours">Honours</button>
          <button type="button" class="webFooterLink" data-ext-url="${r(g.captainContactUrl)}">WhatsApp Captain ↗</button>
          <button type="button" class="webFooterLink" id="btnFooterAdmin">${e?"Admin Console":"Admin Access"}</button>
        </div>
      </div>
    </footer>
  `}function Nt(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([t,a])=>`
          <button type="button" class="navTabBtn ${d.screen==="public"&&d.publicTab===t?"active":""}" data-public-tab="${t}" aria-current="${d.screen==="public"&&d.publicTab===t?"page":"false"}">
            <span class="navIconPill">${q(t)}</span>
            <span>${a}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function Bt(){const e=o.matches.find(m=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${m.matchStatus||""} ${m.status||""} ${m.note||""}`)),t=o.matches.find(m=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${m.matchStatus||""} ${m.status||""} ${m.note||""}`)),a=o.updates.find(m=>m.pinned)||o.updates[0],n=o.news.find(m=>m.pinned)||o.news[0],i=a||n,s=o.players.find(m=>m.id==="RDM001")||o.players[0],u=o.players.find(m=>m.id==="RDM003"),l=o.players.find(m=>m.id==="RDM006"),c=[s,u,l].filter(Boolean);return`
    ${o.loadError?`<div class="infoBanner"><span>${r(o.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${r(g.heritageImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerInner">
        <div class="heroBannerTop">
          <img class="heroBannerLogo" src="${r(_())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
          <div class="heroBannerCopy">
            <h1 class="heroDisplayTitle">${r(g.orgName)}</h1>
            <p>${r(g.motto)}</p>
          </div>
        </div>
        <div class="heroBannerBottom">
          <div class="heroBannerMeta">
            <span>Est. ${r(g.founded)}</span>
            <span aria-hidden="true">·</span>
            <span>${r(g.locationLabel)}</span>
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
          <strong class="kpiValue num">${o.players.length}</strong>
          <span class="kpiLabel">Registered Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${q("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${o.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${q("gallery")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${o.matches.length}</strong>
          <span class="kpiLabel">Matches Tracked</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${q("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${o.gallery.length}</strong>
          <span class="kpiLabel">Photo Archive</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${q("more")}</span>
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
          ${e||t?Qe(e||t):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${i?r(p(i.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${i?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${r(p(i.text||""))}</p>
            ${i.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${r(i.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${a!=null&&a.url&&j(a.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${r(j(a.url))}">Open Link ↗</button>
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
        ${c.map(m=>{const f=$e(m.image);return`
            <button type="button" class="leaderCard" data-open-player="${r(m.id)}">
              <img class="${f.cls}" src="${r(f.src)}" alt="${r(m.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
              <div>
                <div class="leaderCardMeta">${r(p(m.role))}</div>
                <div class="leaderCardTitle">${r(p(m.name))}</div>
                ${m.detail?`<div class="leaderCardSub">${r(p(m.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function Qe(e){const t=p(e.matchStatus||e.status||"Match"),a=[e.date,e.time,e.venueName||e.venue].filter(Boolean).map(p).join(" · ");return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${r(p(e.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${r(t)}</span>
      </div>
      ${a?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${r(a)}</div>`:""}
      ${e.ourScore||e.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${r(e.ourScore||"—")}</span>
          <span>${r(p(e.opponent||"Opp"))}: ${r(e.oppScore||"—")}</span>
        </div>
      `:""}
      ${e.result||e.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${r(p(e.result?`${e.result}${e.margin?" · "+e.margin:""}`:e.note))}</p>`:""}
      ${e.potm?`<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-blue);">Player of the Match: ${r(p(e.potm))}</p>`:""}
    </div>
  `}function xt(){const e=d.squadQuery.trim().toLowerCase(),t=o.players.filter(a=>{const n=String(a.role||"").toUpperCase();return d.squadFilter==="ALL"||d.squadFilter==="LEADERS"&&(n.includes("CAPTAIN")||n.includes("KEEPER"))||d.squadFilter==="ALLROUNDER"&&n.includes("ALL-ROUNDER")||d.squadFilter==="BATSMAN"&&n.includes("BATSMAN")&&!n.includes("ALL-ROUNDER")?e?`${a.name} ${a.role} ${a.detail} ${a.id} ${ue[a.id]||""} ${a.jersey||""}`.toLowerCase().includes(e):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${o.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${r(d.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([a,n])=>`<button type="button" class="segTab ${d.squadFilter===a?"active":""}" data-squad-filter="${a}">${n}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="squadGrid">
        ${t.map(a=>{const n=ue[a.id]||a.id,i=$e(a.image);return`
            <button type="button" class="playerCard" data-open-player="${r(a.id)}">
              <img class="playerCardAvatar ${i.cls}" src="${r(i.src)}" alt="${r(a.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${r(n)}${a.jersey?" · #"+r(a.jersey):""}</span>
                <h3>${r(p(a.name))}</h3>
                <div class="playerCardRole">${r(p(a.role))}</div>
                ${a.detail?`<div class="playerCardDetail">${r(p(a.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function Ht(){let e="";return d.matchesSubTab==="fixtures"?e=o.matches.length?`<div class="stackList">${o.matches.map(t=>`<article class="surfaceCard">${Qe(t)}</article>`).join("")}</div>`:'<div class="emptyState">No fixtures or match results added yet.</div>':d.matchesSubTab==="xi"?e=Ze():e=et(),`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Schedule &amp; Results</span>
        <h2 class="sectionTitle">Matches Centre</h2>
      </div>
    </div>
    <div class="filterRow">
      ${[["fixtures","Fixtures & Results"],["xi","Playing XI"],["tournaments","Tournaments & Records"]].map(([t,a])=>`<button type="button" class="segTab ${d.matchesSubTab===t?"active":""}" data-matches-sub="${t}">${a}</button>`).join("")}
    </div>
    ${e}
  `}function Ze(){return o.lineups.length?`<div class="stackList">${o.lineups.map(e=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${r(p(e.title||"Playing XI"))}</h3>
      ${e.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${r(p(e.match))}</p>`:""}
      <div class="xiGrid num">
        ${(e.players||[]).map((t,a)=>{const n=o.players.find(s=>s.id===t),i=`${a+1}. ${p((n==null?void 0:n.name)||t)}`;return n?`<button type="button" class="xiPlayerBtn" data-open-player="${r(t)}">${r(i)}</button>`:`<div style="padding:6px 8px;">${r(i)}</div>`}).join("")}
      </div>
      ${(e.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${e.subs.map(t=>{var a;return r(p(((a=o.players.find(n=>n.id===t))==null?void 0:a.name)||t))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function et(){return o.tournaments.length>0||o.records.length>0||o.opponents.length>0?`
    <div class="stackList">
      ${o.tournaments.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${r(p(t.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${r(p(t.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[t.season,t.position,t.venueName||t.venue].filter(Boolean).map(p).join(" · ")}</p>
          ${t.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${r(t.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${o.records.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${r(p(t.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${r(p(t.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${r(p(t.value||""))}${t.player?" · "+r(p(t.player)):""}</p>
        </article>
      `).join("")}
      ${o.opponents.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${r(p(t.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(t.played||0)} Played · ${Number(t.won||0)} Won · ${Number(t.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function tt(){return`
    <div class="stackList">
      ${o.honours.map(e=>`
        <article class="surfaceCard honourRow">
          <img src="${r(e.image||_())}" alt="${r(e.title)}" data-zoom-src="${r(e.image||_())}" data-zoom-cap="${r(`${e.year} · ${e.title}`)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
          <div>
            <span class="metaCode">${r(e.year)}</span>
            <strong style="display:block;font-size:1.05rem;">${r(p(e.title))}</strong>
            <span style="font-size:0.8125rem;color:var(--ink-muted);">${r(p(e.sub))}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `}function _t(){const e=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],t=o.gallery.filter(a=>{const n=String(a.album||"MEMORIES").toUpperCase();return d.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(n):n===d.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${e.map(a=>`<button type="button" class="segTab ${d.galleryAlbum===a?"active":""}" data-gallery-album="${a}">${r(p(a))}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="galleryGrid">
        ${t.map((a,n)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${n}">
            <img src="${r(a.image)}" alt="${r(a.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${r(p(a.album||"Memories"))}</strong>
              <span>${r(p(a.caption||"RDM Memory"))}</span>
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
    ${tt()}
  `}function Ut(){var a;const e=x(),t=ze();return`
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
          <p class="sectionSub">Active: ${r(ke(d.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${he.map(n=>`
          <button type="button" class="themeChoiceRow ${d.theme===n.id?"active":""}" data-quick-theme="${n.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${n.swatches.map(i=>`<span style="background:${i}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${r(n.label)}</strong>
              <span>${r(n.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${d.theme===n.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${r(g.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${o.socials.filter(n=>j(n.url)).map(n=>`
          <button type="button" class="linkActionBtn" data-ext-url="${r(j(n.url))}">${r(p(n.displayName||n.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Device &amp; Sync</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App Preferences</h3>
          <p class="sectionSub">${Ge()?"RDM Official Android App":"RDM Official Web &amp; Installable App"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          <button type="button" class="btnSecondary btnSm" id="btnGoWelcome">Welcome Screen</button>
          ${t?'<button type="button" class="btnPrimary btnSm" id="btnInstallWebApp">Install App</button>':""}
        </div>
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Management</span>
          <h3 class="sectionTitle" style="font-size:1.2rem;">Team Administration</h3>
          <p class="sectionSub">${e?`Signed in as Admin (${r(((a=o.user)==null?void 0:a.email)||"")})`:"Player &amp; Match management access for verified Admin"}</p>
        </div>
        <div class="rowActions">
          ${e?`<button type="button" class="btnPrimary btnSm" id="btnOpenAdminDash">Open Console</button>
               <button type="button" class="btnDanger btnSm" id="btnLogout">Logout</button>`:'<button type="button" class="btnSecondary btnSm" id="btnAdminLoginEntry">Admin Login</button>'}
        </div>
      </div>
    </section>
  `}function qt(){const e=o.players.find(l=>l.id===d.detailPlayerId);if(!e)return`
      ${ne({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${le()}
    `;const t=$e(e.image),a=o.stats.find(l=>l.playerId===e.id),n=o.availability.find(l=>l.playerId===e.id),i=ue[e.id]||e.id,s=(Array.isArray(e.socials)?e.socials:[]).filter(l=>j((l==null?void 0:l.url)||l)),u=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${ne({title:p(e.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${t.cls}" src="${r(t.src)}" alt="${r(e.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${g.logoPath}'">
        <div>
          <span class="metaCode">${r(i)} · ${r(e.id)}${e.jersey?" · #"+r(e.jersey):""}</span>
          <h1 class="fullProfileName">${r(p(e.name))}</h1>
          <div class="fullProfileRole">${r(p(e.role))}</div>
          ${e.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${r(p(e.detail))}</p>`:""}
          ${e.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${r(p(e.nick))}</p>`:""}
          ${n!=null&&n.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-blue);">Match Status: ${r(p(n.status))}</p>`:""}
        </div>
        <div>
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${e.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${r(p(e.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${u?`
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
            <span>Best: ${r(a.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${s.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${s.map((l,c)=>{const m=j(typeof l=="string"?l:l.url),f=typeof l=="string"?`Social ${c+1}`:l.name||`Social ${c+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${r(m)}">${r(p(f))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${le()}
  `}function jt(){const t={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[d.morePage]||"Team Info";let a="";if(d.morePage==="news")a=o.news.length?`<div class="stackList">${o.news.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${n.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${r(p(n.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${r(p(n.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(d.morePage==="updates")a=o.updates.length?`<div class="stackList">${o.updates.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${r(p(n.category||"Official Update"))}${n.date?" · "+r(n.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${r(p(n.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${r(p(n.text||""))}</p>
            ${n.url&&j(n.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${r(j(n.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(d.morePage==="xi")a=Ze();else if(d.morePage==="records")a=o.records.length?`<div class="stackList">${o.records.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${r(p(n.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${r(p(n.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${r(p(n.value||""))}${n.player?" · "+r(p(n.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>';else if(d.morePage==="tournaments")a=et();else if(d.morePage==="honours")a=tt();else if(d.morePage==="socials")a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${r(g.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${o.socials.filter(n=>j(n.url)).map(n=>`
            <button type="button" class="linkActionBtn" data-ext-url="${r(j(n.url))}">${r(p(n.displayName||n.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(d.morePage==="about")a=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <img src="${r(_())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:64px;height:64px;border-radius:50%;background:#FFFFFF;border:1px solid var(--border-strong);padding:4px;object-fit:contain;">
          <div>
            <h3 class="sectionTitle">${r(p(g.orgName))}</h3>
            <p class="sectionSub">Founded ${r(g.founded)} · ${r(g.location)}</p>
          </div>
        </div>
        <p class="richText" style="margin:0;color:var(--ink-secondary);">${r(g.motto)} — Official cricket team app uniting the squad, fixtures, honours, and supporters of Rehan Dominators Mahuawan.</p>
      </div>
    `;else{const n=ze();a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Android App</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Mobile Experience</h3>
        <p style="margin:0 0 14px;color:var(--ink-secondary);font-size:0.9rem;">
          ${Ge()?"You are running the native RDM Official Android app.":"Install RDM Official on your Android phone via browser Install App, or compile the native Android APK using the Capacitor Android project."}
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${n?'<button type="button" class="btnPrimary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" id="btnGoWelcome">View Welcome Screen</button>
        </div>
      </div>
    `}return`
    ${ne({title:t,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${r(t)}</h1>
        </div>
      </div>
      ${a}
    </div>
    ${le()}
  `}function at(){return`
    ${ne({title:"Admin Login",showBack:!0,showPublicNav:!1,rightActionHtml:"<div></div>"})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img src="${r(_())}" alt="RDM Crest" referrerPolicy="no-referrer">
        </div>
        <h2 class="sectionTitle" style="text-align:center;">Admin Console Login</h2>
        <p class="sectionSub" style="text-align:center;margin-bottom:16px;">Sign in with your verified Admin Firebase account to add or manage players, matches, and team media.</p>
        ${d.loginError?`<div class="errorBanner" style="margin-bottom:12px;">${r(d.loginError)}</div>`:""}
        <form id="rdmLoginForm" class="formStack">
          <label class="fieldBlock">
            <span>Admin Email</span>
            <input id="loginEmail" name="email" type="email" autocomplete="email" placeholder="admin@example.com" required>
          </label>
          <label class="fieldBlock">
            <span>Password</span>
            <div class="passwordWrap">
              <input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required>
              <button type="button" class="togglePwBtn" id="btnTogglePw">Show</button>
            </div>
          </label>
          <button type="submit" class="btnPrimary btnFull" id="btnLoginSubmit" ${d.loginBusy?"disabled":""}>
            ${d.loginBusy?"Verifying Admin…":"Sign In as Admin"}
          </button>
          <button type="button" class="btnGhost btnFull" id="btnForgotPw">Forgot Password?</button>
        </form>
      </div>
    </div>
  `}function Wt(){if(!x())return at();let e="";return d.adminTab==="overview"?e=`
      <div class="kpiStripGrid">
        <div class="factBox"><strong class="num">${o.players.length}</strong><span>Squad Players</span></div>
        <div class="factBox"><strong class="num">${o.matches.length}</strong><span>Matches</span></div>
        <div class="factBox"><strong class="num">${o.news.length+o.updates.length}</strong><span>News &amp; Updates</span></div>
        <div class="factBox"><strong class="num">${o.gallery.length}</strong><span>Gallery Photos</span></div>
      </div>

      <div class="surfaceCard">
        <h3 class="sectionTitle" style="font-size:1.25rem;margin-bottom:12px;">Quick Admin Actions</h3>
        <div class="adminActionGrid">
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match / Result</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ Team News</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addUpdate">+ Official Update</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addGallery">+ Gallery Photo</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addLineup">+ Playing XI</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addHonour">+ Team Honour</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addTournament">+ Tournament</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addSocial">+ Social Link</button>
        </div>
      </div>
    `:d.adminTab==="squad"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div><h3 class="sectionTitle" style="font-size:1.25rem;">Manage Squad (Add, Edit, Stats, Remove)</h3></div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
        </div>
        <div>
          ${o.players.map(t=>{var n;const a=((n=o.availability.find(i=>i.playerId===t.id))==null?void 0:n.status)||"NOT SET";return`
              <div class="listRowItem">
                <div style="min-width:0;">
                  <strong style="display:block;font-size:0.92rem;">${r(p(t.name))}</strong>
                  <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${r(t.id)} · ${r(p(a))}</span>
                </div>
                <div class="rowActions">
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${r(t.id)}">Edit</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${r(t.id)}">Stats</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-avail="${r(t.id)}">Avail</button>
                  <button type="button" class="btnDanger btnSm" data-admin-remove-player="${r(t.id)}">Remove</button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `:d.adminTab==="matches"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Matches (${o.matches.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
        </div>
        ${o.matches.length?o.matches.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">RDM vs ${r(p(t.opponent||"Opponent"))}</strong>
              <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${r(p(t.matchStatus||t.status||"Match"))} · ${r(t.date||"Date TBA")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-match="${r(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Matches:${r(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No matches yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Playing XI (${o.lineups.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addLineup">+ Lineup</button>
        </div>
        ${o.lineups.length?o.lineups.map(t=>`
          <div class="listRowItem">
            <div>
              <strong style="display:block;font-size:0.9rem;">${r(p(t.title||"Playing XI"))}</strong>
              <span style="font-size:0.76rem;color:var(--ink-muted);">${r(p(t.match||""))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="PlayingXI:${r(t._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No lineups yet.</p>'}
      </div>
    `:e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">News &amp; Official Updates</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ News</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addUpdate">+ Update</button>
          </div>
        </div>
        ${[...o.news.map(t=>({...t,_col:"News"})),...o.updates.map(t=>({...t,_col:"Updates"}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${t.pinned?"[Pinned] ":""}${r(p(t.title||"Item"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${r(t._col)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-pin="${r(t._col)}:${r(t._docId)}:${t.pinned?"0":"1"}">${t.pinned?"Unpin":"Pin"}</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${r(t._col)}:${r(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")||'<p class="sectionSub">No news or updates yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Gallery Photos (${o.gallery.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addGallery">+ Photo</button>
        </div>
        ${o.gallery.length?o.gallery.map(t=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${r(t.image)}" alt="" referrerPolicy="no-referrer" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.86rem;">${r(p(t.caption||"Memory"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${r(p(t.album||"MEMORIES"))}</span>
              </div>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Gallery:${r(t._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No gallery photos yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Social Channels</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addSocial">+ Social</button>
        </div>
        ${o.socials.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${r(p(t.displayName||t.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${r(t.url||"No link set")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-social="${r(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Socials:${r(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")}
      </div>
    `,`
    ${ne({title:"Admin Console",showBack:!0,showPublicNav:!0,rightActionHtml:'<button type="button" class="topActionBtn" id="btnLogout">Logout</button>'})}

    <div class="tabContent fullPageContent">
      <div class="filterRow">
        ${[["overview","Overview"],["squad","Squad & Stats"],["matches","Matches & XI"],["content","Content & Media"]].map(([t,a])=>`<button type="button" class="segTab ${d.adminTab===t?"active":""}" data-admin-tab="${t}">${a}</button>`).join("")}
      </div>
      ${e}
    </div>
    ${le()}
  `}function Gt(){let e="";return d.publicTab==="home"?e=Bt():d.publicTab==="squad"?e=xt():d.publicTab==="matches"?e=Ht():d.publicTab==="gallery"?e=_t():e=Ut(),`
    ${ne({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${e}</div>
    ${le()}
    ${Nt()}
  `}function $(){const e=document.getElementById("appViewport");if(!e)return;let t="";d.screen==="welcome"?t=Ot():d.screen==="playerDetail"?t=qt():d.screen==="subpage"?t=jt():d.screen==="login"?t=at():d.screen==="admin"?t=Wt():t=Gt(),e.innerHTML=t+Ft(),zt()}function zt(){var s,u,l,c,m,f,b,y,w,S,M,E,H,z,v,A,re,ce,Q,D,I;const e=h=>document.getElementById(h);(s=e("btnStepBack"))==null||s.addEventListener("click",()=>{Ye()||C({screen:"public",publicTab:"home"})}),(u=e("btnOpenDrawer"))==null||u.addEventListener("click",()=>{ee(!0)});const t=e("drawerOverlay"),a=e("drawerPanel");if(t==null||t.addEventListener("click",h=>{h.target.id==="drawerOverlay"&&ee(!1)}),t&&a){let h=0,T=0,k=!1;a.addEventListener("touchstart",O=>{!d.drawerOpen||O.touches.length!==1||(h=O.touches[0].clientX,T=0,k=!0,t.classList.add("dragging"))},{passive:!0}),a.addEventListener("touchmove",O=>{if(!k||O.touches.length!==1)return;const F=O.touches[0].clientX-h;T=Math.min(0,F),a.style.transform=`translateX(${T}px)`},{passive:!0});const L=()=>{k&&(k=!1,t.classList.remove("dragging"),a.style.transform="",T<=-68&&ee(!1))};a.addEventListener("touchend",L,{passive:!0}),a.addEventListener("touchcancel",L,{passive:!0})}(l=e("btnPickTheme"))==null||l.addEventListener("click",()=>{Be({currentTheme:d.theme,onSelectTheme:de})}),(c=e("btnDrawerTheme"))==null||c.addEventListener("click",()=>{ee(!1),Be({currentTheme:d.theme,onSelectTheme:de})}),document.querySelectorAll("[data-quick-theme]").forEach(h=>{h.addEventListener("click",()=>de(h.dataset.quickTheme))}),(m=e("btnBrandHome"))==null||m.addEventListener("click",()=>{C({screen:"public",publicTab:"home"})}),(f=e("btnContinueGuest"))==null||f.addEventListener("click",()=>{C({screen:"public",publicTab:"home"})}),(b=e("btnGoWelcome"))==null||b.addEventListener("click",()=>{C({screen:"welcome"})});const n=()=>{d.loginError="",x()?C({screen:"admin",adminTab:"overview"}):C({screen:"login"})};(y=e("btnAdminLoginEntry"))==null||y.addEventListener("click",n),(w=e("btnDrawerAdminLogin"))==null||w.addEventListener("click",n),(S=e("btnFooterAdmin"))==null||S.addEventListener("click",n),(M=e("btnTopAdminDash"))==null||M.addEventListener("click",()=>C({screen:"admin",adminTab:"overview"})),(E=e("btnOpenAdminDash"))==null||E.addEventListener("click",()=>C({screen:"admin",adminTab:"overview"})),(H=e("btnDrawerAdmin"))==null||H.addEventListener("click",()=>C({screen:"admin",adminTab:"overview"})),(z=e("btnRefreshClub"))==null||z.addEventListener("click",async()=>{P("Syncing team data..."),await W(),$(),P("Team data synced")}),(v=e("btnRetrySync"))==null||v.addEventListener("click",async()=>{await W(),$()}),(A=e("btnInstallWebApp"))==null||A.addEventListener("click",async()=>{await Tt()&&($(),P("App installed"))}),(re=e("btnLogout"))==null||re.addEventListener("click",()=>{ge({title:"Confirm Logout",message:"Sign out of your Admin session on this device?",confirmLabel:"Logout",danger:!0,onConfirm:async()=>{await Ee(),d.drawerOpen=!1,C({screen:"public",publicTab:"home"},{replace:!0}),P("Signed out")}})}),(ce=e("btnTogglePw"))==null||ce.addEventListener("click",()=>{const h=e("loginPassword"),T=e("btnTogglePw");if(!h||!T)return;const k=h.type==="password";h.type=k?"text":"password",T.textContent=k?"Hide":"Show"}),(Q=e("btnForgotPw"))==null||Q.addEventListener("click",()=>{var T,k;const h=((k=(T=e("loginEmail"))==null?void 0:T.value)==null?void 0:k.trim())||"";B({title:"Reset Admin Password",subtitle:"Receive a Firebase password reset link on your registered Admin email",fields:[{name:"email",label:"Registered Admin Email",type:"email",value:h,required:!0}],submitLabel:"Send Reset Link",onSubmit:async L=>{await it(L.email),P("Password reset email sent")}})}),(D=e("rdmLoginForm"))==null||D.addEventListener("submit",async h=>{var L,O;h.preventDefault();const T=((L=e("loginEmail"))==null?void 0:L.value)||"",k=((O=e("loginPassword"))==null?void 0:O.value)||"";d.loginBusy=!0,d.loginError="",$();try{const F=await rt(T,k);if(d.loginBusy=!1,F.role!=="admin"){await Ee(),d.loginError="Admin authorization required for RDM Team Management.",$();return}P("Admin verified"),C({screen:"admin",adminTab:"overview"},{replace:!0})}catch(F){d.loginBusy=!1;const V=String((F==null?void 0:F.code)||(F==null?void 0:F.message)||"");V.includes("wrong-password")||V.includes("invalid-credential")||V.includes("user-not-found")||V.includes("INVALID_LOGIN_CREDENTIALS")?d.loginError="Invalid email or password.":V==="ACCOUNT_INACTIVE"||V==="NO_ACCOUNT_RECORD"||V==="INVALID_ROLE_MAPPING"?d.loginError="Your account is inactive or lacks Admin authorization.":V.includes("too-many-requests")?d.loginError="Too many attempts. Please wait before trying again.":d.loginError="Login failed. Check your network and credentials.",$()}}),document.querySelectorAll("[data-public-tab]").forEach(h=>{h.addEventListener("click",()=>{C({screen:"public",publicTab:h.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(h=>{h.addEventListener("click",()=>{C({screen:"subpage",morePage:h.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(h=>{h.addEventListener("click",()=>{C({screen:"playerDetail",detailPlayerId:h.dataset.openPlayer})})}),(I=e("btnDownloadDetailCard"))==null||I.addEventListener("click",async()=>{const h=o.players.find(T=>T.id===d.detailPlayerId);if(h)try{await Dt({player:h,brandLogo:_()})}catch{P("Unable to export profile card")}});const i=e("squadSearchInput");i&&i.addEventListener("input",h=>{const T=h.target.selectionStart;d.squadQuery=h.target.value,$();const k=document.getElementById("squadSearchInput");if(k){k.focus();try{k.setSelectionRange(T,T)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(h=>{h.addEventListener("click",()=>{d.squadFilter=h.dataset.squadFilter,$()})}),document.querySelectorAll("[data-matches-sub]").forEach(h=>{h.addEventListener("click",()=>{d.matchesSubTab=h.dataset.matchesSub,$()})}),document.querySelectorAll("[data-gallery-album]").forEach(h=>{h.addEventListener("click",()=>{d.galleryAlbum=h.dataset.galleryAlbum,$()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(h=>{h.addEventListener("click",()=>{const k=o.gallery.filter(L=>{const O=String(L.album||"MEMORIES").toUpperCase();return d.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(O):O===d.galleryAlbum})[Number(h.dataset.zoomGallery)];k!=null&&k.image&&xe(k.image,p(k.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(h=>{h.addEventListener("click",()=>xe(h.dataset.zoomSrc,h.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(h=>{h.addEventListener("click",()=>Lt(h.dataset.extUrl))}),Vt()}function Vt(){x()&&(document.querySelectorAll("[data-admin-tab]").forEach(e=>{e.addEventListener("click",()=>{C({screen:"admin",adminTab:e.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(e=>{e.addEventListener("click",()=>Kt(e.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(e=>{e.addEventListener("click",()=>{const t=o.players.find(a=>a.id===e.dataset.adminEditPlayer);t&&B({title:`Edit ${p(t.name)}`,fields:[{name:"name",label:"Player Name",value:t.name,required:!0},{name:"role",label:"Role",value:t.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:t.detail,rows:3},{name:"jersey",label:"Jersey Number",value:t.jersey||""},{name:"nick",label:"Nickname",value:t.nick||""},{name:"bio",label:"Bio",type:"textarea",value:t.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async a=>{const n={...a};a.photo&&(n.image=await ve(a.photo,700,.74)),await ct(t.id,n),$(),P("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.adminRemovePlayer,a=o.players.find(n=>n.id===t);ge({title:"Remove Player",message:`Remove ${p((a==null?void 0:a.name)||t)} (${t}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:async()=>{await ut(t),$(),P("Player removed")}})})}),document.querySelectorAll("[data-admin-edit-stats]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.adminEditStats,a=o.players.find(i=>i.id===t),n=o.stats.find(i=>i.playerId===t)||{};B({title:`Stats · ${p((a==null?void 0:a.name)||t)}`,fields:[{name:"matches",label:"Matches",type:"number",value:n.matches||0},{name:"runs",label:"Runs",type:"number",value:n.runs||0},{name:"highScore",label:"High Score",type:"number",value:n.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:n.wickets||0},{name:"fours",label:"Fours",type:"number",value:n.fours||0},{name:"sixes",label:"Sixes",type:"number",value:n.sixes||0},{name:"fifties",label:"50s",type:"number",value:n.fifties||0},{name:"hundreds",label:"100s",type:"number",value:n.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:n.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:n.economy||0},{name:"bestBowling",label:"Best Bowling",value:n.bestBowling||""},{name:"season",label:"Season",value:n.season||"2027"}],onSubmit:async i=>{const s=u=>Number(u||0)||0;await U("PlayerStats",t,{playerId:t,matches:s(i.matches),runs:s(i.runs),highScore:s(i.highScore),wickets:s(i.wickets),fours:s(i.fours),sixes:s(i.sixes),fifties:s(i.fifties),hundreds:s(i.hundreds),strikeRate:s(i.strikeRate),economy:s(i.economy),bestBowling:i.bestBowling,season:i.season}),$(),P("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.adminAvail,a=((n=o.availability.find(i=>i.playerId===t))==null?void 0:n.status)||"AVAILABLE";B({title:`Availability · ${t}`,fields:[{name:"status",label:"Status",type:"select",value:a,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async i=>{await lt(t,i.status),$(),P("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(e=>{e.addEventListener("click",()=>{const t=o.matches.find(a=>a._docId===e.dataset.adminEditMatch);t&&nt(t)})}),document.querySelectorAll("[data-admin-edit-social]").forEach(e=>{e.addEventListener("click",()=>{const t=o.socials.find(a=>a._docId===e.dataset.adminEditSocial);t&&B({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:t.name||"",required:!0},{name:"displayName",label:"Display Title",value:t.displayName||t.name||""},{name:"url",label:"URL",value:t.url||"",placeholder:"https://..."}],onSubmit:async a=>{await U("Socials",t._docId,{name:a.name.toUpperCase(),displayName:a.displayName||a.name,url:a.url,icon:t.icon||"↗",order:t.order||9}),$(),P("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(e=>{e.addEventListener("click",async()=>{const[t,a,n]=e.dataset.adminPin.split(":");try{await mt(t,a,n==="1"),$(),P(n==="1"?"Pinned to Home":"Unpinned")}catch(i){P((i==null?void 0:i.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(e=>{e.addEventListener("click",()=>{const[t,a]=e.dataset.adminDel.split(":");ge({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:async()=>{await dt(t,a),$(),P("Deleted")}})})}))}function nt(e=null){B({title:e?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(e==null?void 0:e.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(e==null?void 0:e.matchStatus)||(e==null?void 0:e.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(e==null?void 0:e.date)||""},{name:"time",label:"Time",type:"time",value:(e==null?void 0:e.time)||""},{name:"venueName",label:"Venue / Ground",value:(e==null?void 0:e.venueName)||(e==null?void 0:e.venue)||""},{name:"ourScore",label:"RDM Score",value:(e==null?void 0:e.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(e==null?void 0:e.oppScore)||""},{name:"result",label:"Result (if completed)",value:(e==null?void 0:e.result)||""},{name:"potm",label:"Player of the Match",value:(e==null?void 0:e.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(e==null?void 0:e.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async t=>{await U("Matches",(e==null?void 0:e._docId)||null,{...t,venue:t.venueName,status:t.matchStatus==="COMPLETED"?"RESULT":t.matchStatus,createdMs:(e==null?void 0:e.createdMs)||Date.now()}),$(),P("Match saved")}})}function Kt(e){if(e==="addMatch")return nt(null);if(e==="addNews")return B({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async t=>{await U("News",null,{title:t.title,text:t.text,pinned:!!t.pinned,createdMs:Date.now()}),$(),P("News added")}});if(e==="addUpdate")return B({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async t=>{await U("Updates",null,{category:t.category,title:t.title,text:t.text,url:t.url,pinned:!!t.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),$(),P("Update saved")}});if(e==="addGallery")return B({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async t=>{if(!t.photo)throw new Error("Image required");const a=await ve(t.photo,960,.72);await U("Gallery",null,{image:a,caption:t.caption,album:t.album,createdMs:Date.now()}),$(),P("Photo uploaded")}});if(e==="addPlayer"){const t=o.players.map(n=>Number(String(n.id).replace(/\D/g,""))).filter(Number.isFinite),a=`RDM${String(Math.max(17,...t)+1).padStart(3,"0")}`;return B({title:`Add Player (${a})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async n=>{const i=n.photo?await ve(n.photo,700,.74):"";await U("TeamPlayers",a,{id:a,name:n.name.toUpperCase(),role:n.role.toUpperCase(),detail:n.detail.toUpperCase(),jersey:n.jersey,image:i,order:o.players.length+1,active:!0}),$(),P("Player added")}})}if(e==="addLineup")return B({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async t=>{const a=s=>[...new Set(String(s||"").split(",").map(u=>u.trim().toUpperCase()).filter(u=>/^RDM\d{3}$/.test(u)))],n=a(t.players).slice(0,11),i=a(t.subs).filter(s=>!n.includes(s));if(n.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await U("PlayingXI",null,{title:t.title,match:t.match,players:n,subs:i,createdMs:Date.now()}),$(),P("Playing XI published")}});if(e==="addHonour")return B({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0}],onSubmit:async t=>{await U("Honours",null,{year:t.year,title:t.title,sub:t.sub,image:g.logoPath,order:o.honours.length+1}),$(),P("Honour saved")}});if(e==="addTournament")return B({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async t=>{await U("Tournaments",null,{...t,venue:t.venueName,createdMs:Date.now()}),$(),P("Tournament added")}});if(e==="addSocial")return B({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async t=>{await U("Socials",null,{name:t.name.toUpperCase(),displayName:t.displayName||t.name,url:t.url,icon:"↗",order:o.socials.length+1}),$(),P("Social channel added")}})}function Xt(){if(Ye())return;const e=Date.now();if(e-d.lastBackPressAt<2e3){Rt();return}d.lastBackPressAt=e,P("Press back again to exit RDM Official")}async function Jt(){de(d.theme);const e=Je();R.length=0,R.push(e);try{window.history.replaceState({rdmIdx:0},"",te(e))}catch{}window.addEventListener("popstate",()=>{if(Ke()){Xe();try{window.history.pushState({rdmIdx:R.length-1},"",te(R[R.length-1]))}catch{}return}if(d.drawerOpen){ee(!1);try{window.history.pushState({rdmIdx:R.length-1},"",te(R[R.length-1]))}catch{}return}R.length>1&&(R.pop(),Ae(R[R.length-1]))}),await Mt(Xt),window.addEventListener("rdm-pwa-ready",()=>{(d.screen==="public"&&d.publicTab==="more"||d.screen==="subpage"&&d.morePage==="download")&&$()}),await W(),ot(({role:t,verified:a})=>{a&&t==="admin"?C({screen:"admin",adminTab:"overview"},{replace:!0}):!a&&d.screen==="admin"?C({screen:"public",publicTab:"home"},{replace:!0}):$(),Ne()}),setTimeout(()=>Ne(),1200)}Jt();export{we as W};
