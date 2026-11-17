/* RDM V6 Full Cricket Portal */
const V6COL={records:'TeamRecords',tournaments:'Tournaments',opponents:'Opponents'};
let V6={records:[],tournaments:[],opponents:[]},v6Season='ALL',v6RecordType='PLAYER';
const v6doc=d=>({...d.data(),_docId:d.id});
async function v6load(){try{const [r,t,o]=await Promise.all(Object.values(V6COL).map(c=>rdmDB.collection(c).get()));V6.records=r.docs.map(v6doc);V6.tournaments=t.docs.map(v6doc);V6.opponents=o.docs.map(v6doc);}catch(e){console.warn('V6 load',e)}
  const ov=window.rdmGetOverrides?.();
  if(ov?.v6){
    ['records','tournaments','opponents'].forEach(k=>{if(Array.isArray(ov.v6[k]))V6[k]=ov.v6[k];});
  }
  v6render();
}
function v6SaveOverride(key,arr){window.rdmSetOverrides?.(o=>{o.v6=o.v6||{};o.v6[key]=arr});}
window.v6SaveOverride=v6SaveOverride;
function v6render(){v6Home();v6Records();v6Tournaments();v6Search();setTimeout(v6EnhanceMatches,30)}
function rdmParseMatchDateTime(m){
  if(!m)return null;
  const rawDate=String(m.date||'').trim();
  if(!rawDate)return null;
  const rawTime=String(m.time||'').trim();
  const combined=rawTime&&!/\d{1,2}:\d{2}/.test(rawDate)?`${rawDate} ${rawTime}`:rawDate;
  const isoOnly=combined.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if(isoOnly)return new Date(Number(isoOnly[1]),Number(isoOnly[2])-1,Number(isoOnly[3]),9,0,0,0);
  const isoTime=combined.match(/^(\d{4})-(\d{1,2})-(\d{1,2})[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if(isoTime)return new Date(Number(isoTime[1]),Number(isoTime[2])-1,Number(isoTime[3]),Number(isoTime[4]),Number(isoTime[5]),Number(isoTime[6]||0),0);
  const dmy=combined.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
  if(dmy)return new Date(Number(dmy[3]),Number(dmy[2])-1,Number(dmy[1]),Number(dmy[4]||9),Number(dmy[5]||0),0,0);
  const parsed=new Date(combined);
  return isNaN(parsed.getTime())?null:parsed;
}
function rdmPad2(n){return String(Math.max(0,Math.floor(n))).padStart(2,'0')}
window.rdmTickHomeCountdown=function(){
  const cd=document.getElementById('homeCountdown');
  const note=document.getElementById('homeCountdownNote');
  if(!cd)return;
  const ts=Number(cd.dataset.targetMs||'0');
  if(!ts){
    cd.hidden=true;
    if(note){
      note.hidden=!cd.dataset.hasUpcoming;
      if(cd.dataset.hasUpcoming==='1')note.textContent='Schedule Date TBA';
    }
    return;
  }
  const left=ts-Date.now();
  if(left<=0){
    cd.hidden=true;
    if(note){note.hidden=false;note.textContent='Match Day / Started';}
    return;
  }
  const days=Math.floor(left/86400000);
  const hours=Math.floor((left%86400000)/3600000);
  const minutes=Math.floor((left%3600000)/60000);
  const dEl=document.getElementById('cdDays');
  const hEl=document.getElementById('cdHours');
  const mEl=document.getElementById('cdMinutes');
  if(dEl)dEl.textContent=rdmPad2(days);
  if(hEl)hEl.textContent=rdmPad2(hours);
  if(mEl)mEl.textContent=rdmPad2(minutes);
  cd.hidden=false;
  if(note)note.hidden=true;
};
window.rdmRenderHomeMatchHub=function(){
  const hub=document.getElementById('homeMatchHub');
  if(!hub)return;
  const matches=Array.isArray(window.D?.matches)?D.matches:[];
  const upcoming=matches.find(x=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test((x.status||'')+' '+(x.note||'')));
  const recent=matches.find(x=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test((x.status||'')+' '+(x.note||'')));
  const target=rdmParseMatchDateTime(upcoming);
  const targetMs=target?target.getTime():0;
  const sig=JSON.stringify([
    upcoming?.opponent||'',upcoming?.date||'',upcoming?.time||'',upcoming?.venue||'',targetMs,
    recent?.opponent||'',recent?.note||recent?.status||''
  ]);
  if(hub.dataset.hubSig!==sig){
    hub.dataset.hubSig=sig;
    const upMeta=[upcoming?.date,upcoming?.time,upcoming?.venue].filter(Boolean).map(mini).join(' · ');
    const recentMeta=recent?mini(recent.note||recent.status||''):'Latest scorecard updates will appear here';
    hub.innerHTML=`<div class="miniMatch miniMatchNext">
      <span>Next Match</span>
      <b id="homeNextMatch">${upcoming?'RDM vs '+mini(upcoming.opponent||'Opponent'):'No upcoming match'}</b>
      ${upcoming&&upMeta?`<small>${upMeta}</small>`:'<small>Check Fixtures for upcoming schedule</small>'}
      <div class="countdownTimer" id="homeCountdown" data-target-ms="${targetMs||''}" data-has-upcoming="${upcoming?'1':'0'}" hidden>
        <div class="cdUnit"><strong id="cdDays">00</strong><span>Days</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdHours">00</strong><span>Hours</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdMinutes">00</strong><span>Minutes</span></div>
      </div>
      <span class="countdown" id="homeCountdownNote" hidden></span>
    </div>
    <div class="miniMatch miniMatchRecent">
      <span>Recent Result</span>
      <b>${recent?'RDM vs '+mini(recent.opponent||'Opponent'):'No result added yet'}</b>
      <small>${recentMeta}</small>
    </div>`;
  }
  window.rdmTickHomeCountdown();
  const pin=(D.news||[]).find(x=>x.pinned);
  let b=document.getElementById('noticeBanner');
  if(pin){
    if(!b){b=document.createElement('div');b.id='noticeBanner';b.className='noticeBanner';hub.before(b);}
    const pinSig=JSON.stringify([pin.title||'',pin.text||'']);
    if(b.dataset.pinSig!==pinSig){
      b.dataset.pinSig=pinSig;
      b.innerHTML=`📌 <b>${mini(pin.title||'TEAM UPDATE')}</b><div class="preserveLines">${mini(pin.text||'')}</div>`;
    }
  }else if(b){
    b.remove();
  }
};
function v6Home(){window.rdmRenderHomeMatchHub();}
function statFor(p){return XD.stats.find(s=>s.playerId===p.id)||{}}
function v6Records(){const sf=document.getElementById('seasonFilters');if(sf)sf.innerHTML='';const ranked=[...D.players].map(p=>({p,s:statFor(p)}));const runs=[...ranked].sort((a,b)=>xnum(b.s.runs)-xnum(a.s.runs))[0],wickets=[...ranked].sort((a,b)=>xnum(b.s.wickets)-xnum(a.s.wickets))[0];const awards={};XD.achievements.forEach(a=>{if(/player of the match|potm/i.test(a.title||''))awards[a.playerName]=(awards[a.playerName]||0)+1});const potm=Object.entries(awards).sort((a,b)=>b[1]-a[1])[0];const lb=document.getElementById('leaderboard');if(lb)lb.innerHTML=`<div class="leaderGrid"><div class="leaderCard">🏏 ᴛᴏᴘ ʀᴜɴ ꜱᴄᴏʀᴇʀ<b>${mini(runs?.p.name||'—')} • ${xnum(runs?.s.runs)}</b></div><div class="leaderCard">🎯 ᴛᴏᴘ ᴡɪᴄᴋᴇᴛ ᴛᴀᴋᴇʀ<b>${mini(wickets?.p.name||'—')} • ${xnum(wickets?.s.wickets)}</b></div><div class="leaderCard">🏅 ᴍᴏꜱᴛ ᴘᴏᴛᴍ<b>${mini(potm?.[0]||'—')} • ${potm?.[1]||0}</b></div></div>`;const arr=v6Season==='ALL'?V6.records:V6.records.filter(x=>x.season===v6Season);const rl=document.getElementById('recordList');if(rl)rl.innerHTML=arr.length?arr.map(x=>`<article class="recordCard"><span class="seasonTag">${mini(x.season||'ALL TIME')}</span><h3>${mini(x.title)}</h3><p>${mini(x.value||'')} ${x.player?`• ${mini(x.player)}`:''}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6EditRecord('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ʀᴇᴄᴏʀᴅꜱ ʏᴇᴛ</div>'}
async function v6AddRecord(id){if(!rdmAdmin())return;const old=V6.records.find(x=>x._docId===id)||{};const title=xp('Record title (Highest Team Score / Biggest Win / Highest Partnership / Best Bowling)',old.title||'');if(!title)return;const value=xp('Record value',old.value||'');const player=xp('Player(s), optional',old.player||'');const season=xp('Season / Year',''+(old.season||new Date().getFullYear()));const data={title,value,player,season,updatedAt:rdmStamp(),createdMs:old.createdMs||Date.now()};id?await rdmDB.collection(V6COL.records).doc(id).set(data,{merge:true}):await rdmDB.collection(V6COL.records).add(data);await v6load()}
window.v6EditRecord=v6AddRecord;
function v6Tournaments(){const t=document.getElementById('tournamentList');if(t)t.innerHTML=V6.tournaments.length?V6.tournaments.map(x=>`<article class="card"><h3>🏆 ${mini(x.name)}</h3><p>${mini(x.season||'')} • ${mini(x.position||'')}</p><p class="preserveLines">${mini(x.fixtures||'')}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6AddTournament('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ᴀᴅᴅᴇᴅ</div>';const o=document.getElementById('opponentList');if(o)o.innerHTML=V6.opponents.length?V6.opponents.map(x=>`<article class="card"><h3>${mini(x.name)}</h3><p>ʜ2ʜ • ${x.played||0} ᴍᴀᴛᴄʜᴇꜱ • ${x.won||0} ᴡᴏɴ • ${x.lost||0} ʟᴏꜱᴛ</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6AddOpponent('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴏᴘᴘᴏɴᴇɴᴛ ᴀᴅᴅᴇᴅ</div>'}
async function v6AddTournament(id){if(!rdmAdmin())return;const x=V6.tournaments.find(z=>z._docId===id)||{};const name=xp('Tournament name',x.name||'');if(!name)return;const season=xp('Season / Year',x.season||'');const position=xp('Final position / status',x.position||'');const fixtures=xp('Fixtures / points / notes (use new lines)',x.fixtures||'');const d={name,season,position,fixtures,updatedAt:rdmStamp(),createdMs:x.createdMs||Date.now()};id?await rdmDB.collection(V6COL.tournaments).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.tournaments).add(d);await v6load()}
async function v6AddOpponent(id){if(!rdmAdmin())return;const x=V6.opponents.find(z=>z._docId===id)||{};const name=xp('Opponent team name',x.name||'');if(!name)return;const played=xnum(xp('Matches played',x.played||0)),won=xnum(xp('RDM wins',x.won||0)),lost=xnum(xp('RDM losses',x.lost||0));const d={name,played,won,lost,updatedAt:rdmStamp(),createdMs:x.createdMs||Date.now()};id?await rdmDB.collection(V6COL.opponents).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.opponents).add(d);await v6load()}
async function v6Delete(c,id){if(!rdmAdmin())return;const run=async()=>{try{await rdmDB.collection(c).doc(id).delete()}catch{}const map={TeamRecords:'records',Tournaments:'tournaments',Opponents:'opponents'};const k=map[c];if(k){V6[k]=V6[k].filter(x=>x._docId!==id);v6SaveOverride(k,V6[k]);}v6render();window.rdmHardRenderTournaments?.();toast('Deleted')};if(typeof window.rdmConfirmModal==='function')return window.rdmConfirmModal('DELETE ITEM','THIS ACTION CANNOT BE UNDONE.',run);return run()}
function v6Search(){
  const box=document.getElementById('players');
  if(!box)return;
  let inp=document.getElementById('playerSearch');
  if(!inp){
    inp=document.createElement('input');
    inp.id='playerSearch';
    inp.className='searchPlayer';
    inp.placeholder='Search by player name, role, or ID...';
    box.before(inp);
  }
  const clearBtn=document.getElementById('squadSearchClear');
  const roleBox=document.getElementById('squadRoleFilters');
  const statusEl=document.getElementById('squadFilterStatus');
  const emptyEl=document.getElementById('squadEmpty');
  const resetBtn=document.getElementById('squadResetFilters');
  if(window.__rdmSquadFilterBound){
    window.applySquadFilter?.();
    return;
  }
  window.__rdmSquadFilterBound=true;
  let activeRole='ALL';
  const norm=v=>String(v||'').toLowerCase().replace(/[-_•·]+/g,' ').replace(/\s+/g,' ').trim();
  function applySquadFilter(){
    const cards=[...box.querySelectorAll('.player')];
    const rawQuery=inp.value.trim();
    const tokens=norm(rawQuery).split(' ').filter(Boolean);
    const roleNeedle=norm(activeRole);
    let shown=0;
    cards.forEach((el,i)=>{
      const p=(typeof D!=='undefined'&&Array.isArray(D.players))?D.players[i]:null;
      const code=(typeof playerCode==='function'&&p?.id)?playerCode(p.id):'';
      const roleBlob=norm([p?.role,el.querySelector('b')?.textContent,el.querySelector('.leadershipBadge')?.textContent].filter(Boolean).join(' '));
      const fullBlob=norm([p?.name,p?.role,p?.detail,p?.nick,p?.id,p?.jersey,code,el.querySelector('h3')?.textContent,el.querySelector('b')?.textContent].filter(Boolean).join(' '));
      const matchesRole=activeRole==='ALL'||roleBlob.includes(roleNeedle);
      const matchesQuery=!tokens.length||tokens.every(t=>fullBlob.includes(t));
      const visible=matchesRole&&matchesQuery;
      el.hidden=!visible;
      el.style.display=visible?'':'none';
      if(visible)shown++;
    });
    if(clearBtn)clearBtn.hidden=!rawQuery;
    if(roleBox){
      roleBox.querySelectorAll('[data-role]').forEach(btn=>{
        const on=btn.dataset.role===activeRole;
        btn.classList.toggle('active',on);
        btn.setAttribute('aria-pressed',String(on));
      });
    }
    if(statusEl){
      const total=cards.length;
      if(!total)statusEl.textContent='';
      else if(!rawQuery&&activeRole==='ALL')statusEl.textContent=`Showing all ${total} players`;
      else statusEl.textContent=`Showing ${shown} of ${total} players`;
    }
    if(emptyEl)emptyEl.hidden=!(cards.length>0&&shown===0);
  }
  window.applySquadFilter=applySquadFilter;
  inp.addEventListener('input',applySquadFilter);
  inp.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&inp.value){
      inp.value='';
      applySquadFilter();
    }
  });
  if(clearBtn){
    clearBtn.addEventListener('click',()=>{
      inp.value='';
      applySquadFilter();
      inp.focus();
    });
  }
  if(roleBox){
    roleBox.addEventListener('click',e=>{
      const btn=e.target.closest('[data-role]');
      if(!btn)return;
      activeRole=btn.dataset.role||'ALL';
      applySquadFilter();
    });
  }
  if(resetBtn){
    resetBtn.addEventListener('click',()=>{
      inp.value='';
      activeRole='ALL';
      applySquadFilter();
      inp.focus();
    });
  }
  new MutationObserver(()=>applySquadFilter()).observe(box,{childList:true});
  applySquadFilter();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',v6Search,{once:true});else v6Search();
function v6EnhanceMatches(){document.querySelectorAll('#matchList .scoreCard').forEach((el,i)=>{const m=D.matches[i];if(!m||el.dataset.v6)return;el.dataset.v6='1';let details='';if(m.tossWinner)details+=`<div>🪙 ᴛᴏꜱꜱ • ${mini(m.tossWinner)} — ${mini(m.tossDecision||'')}</div>`;if(m.batting||m.bowling)details+=`<div class="preserveLines">🏏 ʙᴀᴛᴛɪɴɢ • ${mini(m.batting||'—')}<br>🎯 ʙᴏᴡʟɪɴɢ • ${mini(m.bowling||'—')}</div>`;if(m.partnerships||m.fow)details+=`<div class="preserveLines">🤝 ${mini(m.partnerships||'')}<br>📉 ${mini(m.fow||'')}</div>`;if(details)el.insertAdjacentHTML('beforeend',`<div class="matchDetails">${details}</div>`);if(rdmAdmin())el.insertAdjacentHTML('beforeend',`<button class="tinyBtn" onclick="v6EditMatch('${m._docId}')">✎ ꜰᴜʟʟ ꜱᴄᴏʀᴇᴄᴀʀᴅ</button> <button class="tinyBtn" onclick="v6Poster('${m._docId}')">▣ ᴍᴀᴛᴄʜ ᴘᴏꜱᴛᴇʀ</button>`)})}
async function v6EditMatch(id){if(!rdmAdmin())return;const m=D.matches.find(x=>x._docId===id);if(!m)return;const tossWinner=xp('Toss winner',m.tossWinner||'');const tossDecision=xp('Toss decision: Bat / Bowl',m.tossDecision||'');const batting=xp('Batting scorecard: Name Runs(Balls), 4s, 6s — one player per line',m.batting||'');const bowling=xp('Bowling: Name Overs-Runs-Wickets — one bowler per line',m.bowling||'');const partnerships=xp('Partnerships',m.partnerships||'');const fow=xp('Fall of wickets',m.fow||'');const potm=xp('Player of the Match',m.potm||'');await rdmDB.collection('Matches').doc(id).set({tossWinner,tossDecision,batting,bowling,partnerships,fow,potm,updatedAt:rdmStamp()},{merge:true});await rdmLoadAll();setTimeout(v6render,100)}
function v6Poster(id){const m=D.matches.find(x=>x._docId===id);if(!m)return;document.getElementById('v6PosterModal')?.remove();const box=document.createElement('div');box.id='v6PosterModal';box.className='modal show rdmUnifiedModal';box.innerHTML=`<div class="dialog rdmUnifiedDialog matchPosterDialog"><button class="close" type="button" aria-label="Close">×</button><div class="matchPosterCard"><span class="sectionKicker">Rehan Dominators Mahuawan</span><h2>RDM vs ${esc(m.opponent||'Opponent')}</h2><p class="posterMeta">${esc(m.date||'')} · ${esc(m.venue||'')}</p>${m.ourScore||m.oppScore?`<div class="posterScore">${esc(m.ourScore||'—')}${m.oppScore?' — '+esc(m.oppScore):''}</div>`:''}<p>${esc(m.note||'Upcoming Match')}</p><small>ONE TEAM • ONE DREAM • ONE DOMINATION</small></div></div>`;document.body.appendChild(box);box.querySelector('.close').onclick=()=>box.remove();box.addEventListener('click',e=>{if(e.target===box)box.remove()})}
window.v6AddTournament=v6AddTournament;window.v6AddOpponent=v6AddOpponent;window.v6AddRecord=v6AddRecord;window.v6Delete=v6Delete;window.v6EditMatch=v6EditMatch;window.v6Poster=v6Poster;
document.addEventListener('click',e=>{if(e.target?.id==='addRecord')v6AddRecord();if(e.target?.id==='addTournament')v6AddTournament();if(e.target?.id==='addOpponent')v6AddOpponent()});
const bt=document.getElementById('backToTop');window.addEventListener('scroll',()=>bt?.classList.toggle('show',scrollY>500));bt?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
setTimeout(()=>{v6load();window.rdmRenderHomeMatchHub?.();},400);
if(!window.__rdmCountdownTimerStarted){
  window.__rdmCountdownTimerStarted=true;
  setInterval(()=>window.rdmTickHomeCountdown?.(),1000);
}
// V6 finishing touches: captain badges, player form, maps, admin edit controls
function v6Decorate(){document.querySelectorAll('#players .player').forEach((el,i)=>{const p=D.players[i];if(!p)return;const n=(p.name||'').toUpperCase();if((n==='REHAN AKHTAR'||n==='SAIF ALI')&&!el.querySelector('.captainBadge')&&!el.querySelector('.leadershipBadge')){const h=el.querySelector('h3')||el.querySelector('b');h?.insertAdjacentHTML('beforeend',` <span class="captainBadge">${n==='REHAN AKHTAR'?'CAPTAIN':'VICE-CAPTAIN'}</span>`)}});document.querySelectorAll('#matchList .scoreCard').forEach((el,i)=>{const m=D.matches[i];if(m?.venue&&!el.querySelector('.mapBtn'))el.insertAdjacentHTML('beforeend',`<a class="tinyBtn mapBtn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.venue)}">📍 ᴍᴀᴘ</a>`)})}
const v6oldRenderStats=window.renderStats;window.renderStats=function(){v6oldRenderStats();document.querySelectorAll('#statsList .statCard').forEach((el,i)=>{const p=D.players[i],s=statFor(p);if(s.last5&&!el.querySelector('.playerForm'))el.insertAdjacentHTML('beforeend',`<p class="playerForm">ʟᴀꜱᴛ 5 • ${mini(s.last5)}</p>`)})};
window.editStats=async function(id){if(!rdmAdmin())return;const s=XD.stats.find(z=>z.playerId===id)||{};const matches=xp('Matches',s.matches||0);if(matches===null)return;const runs=xp('Runs',s.runs||0),wickets=xp('Wickets',s.wickets||0),highScore=xp('Highest Score',s.highScore||0),bestBowling=xp('Best Bowling',s.bestBowling||''),last5=xp('Last 5 match form / scores',s.last5||''),season=xp('Season / Year',s.season||'2027');await rdmDB.collection(XCOL.stats).doc(id).set({playerId:id,matches:xnum(matches),runs:xnum(runs),wickets:xnum(wickets),highScore:xnum(highScore),bestBowling:bestBowling||'',last5:last5||'',season:season||'',updatedAt:rdmStamp()},{merge:true});await xload()};
window.renderAchievements=function(){const el=document.getElementById('achievementList');if(!el)return;el.innerHTML=XD.achievements.length?XD.achievements.map(a=>`<article class="card"><h3>🏆 ${mini(a.title)}</h3><p>${mini(a.playerName||'TEAM')} • ${mini(a.detail||'')}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6EditAchievement('${a._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="xdelete('${XCOL.achievements}','${a._docId}')">ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴀᴄʜɪᴇᴠᴇᴍᴇɴᴛ ᴀᴅᴅᴇᴅ ʏᴇᴛ</div>'};
async function v6EditAchievement(id){const a=XD.achievements.find(x=>x._docId===id);if(!a||!rdmAdmin())return;const title=xp('Achievement / Award',a.title);if(!title)return;const playerName=xp('Player Name (or TEAM)',a.playerName||'TEAM'),detail=xp('Details',a.detail||'');await rdmDB.collection(XCOL.achievements).doc(id).set({title,playerName,detail,updatedAt:rdmStamp()},{merge:true});await xload()}window.v6EditAchievement=v6EditAchievement;
setInterval(v6Decorate,1200);

// V6.1 COMPLETE FEATURE VISIBILITY + ADMIN CONTROL FIX
function v61Home(){
  window.rdmRenderHomeMatchHub?.();
}
function v61MatchDetails(){
  document.querySelectorAll('#matchList .scoreCard').forEach((el,i)=>{
    const m=D.matches[i]; if(!m)return;
    let x=el.querySelector('.v61extra'); if(x)x.remove();
    const bits=[];
    if(m.tossWinner)bits.push(`<div>🪙 <b>ᴛᴏꜱꜱ</b><br>${mini(m.tossWinner)}${m.tossDecision?' • '+mini(m.tossDecision):''}</div>`);
    if(m.potm)bits.push(`<div>🏅 <b>ᴘʟᴀʏᴇʀ ᴏꜰ ᴛʜᴇ ᴍᴀᴛᴄʜ</b><br>${mini(m.potm)}</div>`);
    if(m.batting)bits.push(`<div class="preserveLines">🏏 <b>ʙᴀᴛᴛɪɴɢ ꜱᴄᴏʀᴇᴄᴀʀᴅ</b><br>${mini(m.batting)}</div>`);
    if(m.bowling)bits.push(`<div class="preserveLines">🎯 <b>ʙᴏᴡʟɪɴɢ ꜱᴄᴏʀᴇᴄᴀʀᴅ</b><br>${mini(m.bowling)}</div>`);
    if(m.partnerships)bits.push(`<div class="preserveLines">🤝 <b>ᴘᴀʀᴛɴᴇʀꜱʜɪᴘꜱ</b><br>${mini(m.partnerships)}</div>`);
    if(m.fow)bits.push(`<div class="preserveLines">📉 <b>ꜰᴀʟʟ ᴏꜰ ᴡɪᴄᴋᴇᴛꜱ</b><br>${mini(m.fow)}</div>`);
    if(bits.length)el.insertAdjacentHTML('beforeend',`<div class="matchDetails v61extra">${bits.join('')}</div>`);
  });
}
function v61Admin(force=false){
  if(!rdmAdmin())return;
  const a=document.getElementById('adminBody'); if(!a)return;
  if(!force&&a.dataset.v61Ready==='1')return;
  a.dataset.v61Ready='1';
  a.innerHTML=`<div class="adminSessionBar"><div><strong>Admin Direct Link Active</strong><span>RDM Official Club Management</span></div><a class="tinyBtn" href="${location.pathname}">Public View</a></div><div class="adminGrid">
  <button class="primary" data-add="match">＋ Upcoming Match</button>
  <button class="primary" onclick="addScorecard()">＋ Scorecard / Result</button>
  <button class="primary" onclick="go('matches')">✎ Toss / Scorecard / POTM</button>
  <button class="primary" onclick="go('matches')">🤝 Partnerships / FOW</button>
  <button class="primary" onclick="go('matches')">▣ Match Poster / Venue Map</button>
  <button class="primary" data-add="news">＋ News / Notification</button>
  <button class="primary" onclick="go('news')">📌 Pin / Unpin News</button>
  <button class="primary" data-add="player">＋ Add Player</button>
  <button class="primary" onclick="go('records')">✎ Player Stats &amp; Ranking</button>
  <button class="primary" onclick="addAchievement()">＋ Award / Achievement</button>
  <button class="primary" onclick="v63AddPlayerRecord()">＋ Player Record</button>
  <button class="primary" onclick="v63AddTeamRecord()">＋ Team Record</button>
  <button class="primary" onclick="v63AddPartnershipRecord()">＋ Partnership Record</button>
  <button class="primary" onclick="v6AddTournament()">＋ Tournament / Fixtures</button>
  <button class="primary" onclick="v6AddOpponent()">＋ Opponent / H2H</button>
  <button class="primary" onclick="addLineup()">＋ Publish Playing XI</button>
  <button class="primary" onclick="go('lineup')">✎ Player Availability</button>
  <button class="primary" data-add="honour">＋ Honour</button>
  <button class="primary" data-add="gallery">＋ Gallery Photo</button>
  <button class="primary" data-add="social">＋ Social Link</button>
  <button class="primary manageUpdatesBtn" onclick="go('updates')">＋ Manage Updates</button>
  <button class="primary" onclick="document.querySelector('.brandAdminBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Manage Logo &amp; Branding</button>
  <button class="primary" onclick="document.getElementById('adminAccessLinksBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Private Access Links</button>
  </div><p class="adminHint">All club features are managed by Admin. Edit and delete actions also appear directly on each section page.</p>`;
  if(typeof bindAdds==='function')bindAdds();
  window.rdmInjectPlayerManager?.();
  window.rdmInjectBrandAdmin?.();
}
const v61OldRenderAdmin=window.renderAdmin;window.renderAdmin=function(){const a=document.getElementById('adminBody');if(a)delete a.dataset.v61Ready;if(v61OldRenderAdmin)v61OldRenderAdmin();if(rdmAdmin())setTimeout(()=>v61Admin(true),0)};
setInterval(()=>{v61Home();v61MatchDetails();if(document.body.classList.contains('admin')&&document.getElementById('admin')?.classList.contains('active'))v61Admin(false)},1500);

/* V6.2 - structured Records & Tournaments */
function v62Modal(title, fields, values, onSave){
 let m=document.getElementById('v62Modal'); if(m)m.remove();
 m=document.createElement('div');m.id='v62Modal';m.className='modal show';
 const html=fields.map(f=>{const val=esc(values[f.k]??'');if(f.type==='textarea')return `<label class="${f.full?'full':''}">${f.label}<textarea data-k="${f.k}" placeholder="${esc(f.ph||'')}">${val}</textarea></label>`;if(f.type==='select')return `<label class="${f.full?'full':''}">${f.label}<select data-k="${f.k}">${f.options.map(o=>`<option ${String(values[f.k]||'')===o?'selected':''}>${esc(o)}</option>`).join('')}</select></label>`;return `<label class="${f.full?'full':''}">${f.label}<input data-k="${f.k}" type="${f.type||'text'}" value="${val}" placeholder="${esc(f.ph||'')}"></label>`}).join('');
 m.innerHTML=`<form class="dialog"><button class="close" type="button">×</button><h2>${title}</h2><div class="v62Grid">${html}</div><button class="primary wide">ꜱᴀᴠᴇ</button></form>`;document.body.appendChild(m);m.querySelector('.close').onclick=()=>m.remove();m.querySelector('form').onsubmit=async e=>{e.preventDefault();const d={};m.querySelectorAll('[data-k]').forEach(x=>d[x.dataset.k]=x.value.trim());try{await onSave(d);m.remove()}catch(err){console.error(err);toast('ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}}
}
function v6Records(){
 const sf=document.getElementById('seasonFilters');if(sf)sf.innerHTML='';
 const stats=v6Season==='ALL'?XD.stats:XD.stats.filter(s=>String(s.season||'')===String(v6Season));const ranked=D.players.map(p=>({p,s:stats.filter(s=>s.playerId===p.id).reduce((a,s)=>({runs:xnum(a.runs)+xnum(s.runs),wickets:xnum(a.wickets)+xnum(s.wickets)}),{})}));const runs=[...ranked].sort((a,b)=>xnum(b.s.runs)-xnum(a.s.runs))[0],wickets=[...ranked].sort((a,b)=>xnum(b.s.wickets)-xnum(a.s.wickets))[0];const awards={};XD.achievements.filter(a=>v6Season==='ALL'||String(a.season||'')===String(v6Season)).forEach(a=>{if(/player of the match|potm/i.test(a.title||''))awards[a.playerName]=(awards[a.playerName]||0)+1});const potm=Object.entries(awards).sort((a,b)=>b[1]-a[1])[0];const lb=document.getElementById('leaderboard');if(lb)lb.innerHTML=`<div class="leaderGrid"><div class="leaderCard">🏏 ᴛᴏᴘ ʀᴜɴ ꜱᴄᴏʀᴇʀ<b>${mini(runs?.p.name||'—')} • ${xnum(runs?.s.runs)}</b></div><div class="leaderCard">🎯 ᴛᴏᴘ ᴡɪᴄᴋᴇᴛ ᴛᴀᴋᴇʀ<b>${mini(wickets?.p.name||'—')} • ${xnum(wickets?.s.wickets)}</b></div><div class="leaderCard">🏅 ᴍᴏꜱᴛ ᴘᴏᴛᴍ<b>${mini(potm?.[0]||'—')} • ${potm?.[1]||0}</b></div></div>`;
 const arr=(v6Season==='ALL'?V6.records:V6.records.filter(x=>String(x.season)===String(v6Season))).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));const rl=document.getElementById('recordList');if(rl)rl.innerHTML=arr.length?arr.map(x=>`<article class="recordCard"><div class="v62Meta"><span class="seasonTag">${mini(x.season||'ALL TIME')}</span>${x.category?`<span class="v62Chip">${mini(x.category)}</span>`:''}</div><h3>${mini(x.title)}</h3><div class="recordValue">${mini(x.value||'—')}</div>${x.player?`<p>👤 ${mini(x.player)}</p>`:''}${x.opponent?`<p>🆚 ${mini(x.opponent)}</p>`:''}${x.date?`<p>📅 ${mini(x.date)}</p>`:''}${x.note?`<p class="v62Note">${mini(x.note)}</p>`:''}${rdmAdmin()?`<div class="v62Actions"><button class="tinyBtn" onclick="v6AddRecord('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ʀᴇᴄᴏʀᴅꜱ ʏᴇᴛ</div>';
}
async function v6AddRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ':'ᴀᴅᴅ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ',[{k:'category',label:'ᴄᴀᴛᴇɢᴏʀʏ',type:'select',options:['TEAM','BATTING','BOWLING','PARTNERSHIP','FIELDING','OTHER']},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Team Score',full:true},{k:'value',label:'ʀᴇᴄᴏʀᴅ ᴠᴀʟᴜᴇ',ph:'185/6'},{k:'player',label:'ᴘʟᴀʏᴇʀ / ʜᴏʟᴅᴇʀ',ph:'Rehan Akhtar'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true,ph:'Optional details'}],x,async d=>{if(!d.title||!d.value){toast('ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ & ᴠᴀʟᴜᴇ ʀᴇǫᴜɪʀᴇᴅ');throw Error('required')}d.updatedAt=rdmStamp();d.createdMs=x.createdMs||Date.now();id?await rdmDB.collection(V6COL.records).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.records).add(d);await v6load();toast('ʀᴇᴄᴏʀᴅ ꜱᴀᴠᴇᴅ')})}
function v6Tournaments(){const t=document.getElementById('tournamentList');if(t)t.innerHTML=V6.tournaments.length?V6.tournaments.sort((a,b)=>String(b.season||'').localeCompare(String(a.season||''))).map(x=>`<article class="tournamentCard"><h3>🏆 ${mini(x.name)}</h3><div class="v62Meta"><span class="seasonTag">${mini(x.season||'')}</span>${x.status?`<span class="v62Chip">${mini(x.status)}</span>`:''}${x.position?`<span class="v62Chip">${mini(x.position)}</span>`:''}</div>${x.venue?`<p>📍 ${mini(x.venue)}</p>`:''}${x.dates?`<p>📅 ${mini(x.dates)}</p>`:''}${x.organizer?`<p>🏏 ${mini(x.organizer)}</p>`:''}<p>${x.teams?mini(x.teams)+' ᴛᴇᴀᴍꜱ • ':''}${x.matches?mini(x.matches)+' ᴍᴀᴛᴄʜᴇꜱ • ':''}${x.wins?mini(x.wins)+' ᴡɪɴꜱ • ':''}${x.losses?mini(x.losses)+' ʟᴏꜱꜱᴇꜱ':''}</p>${x.fixtures?`<p class="v62Note">${mini(x.fixtures)}</p>`:''}${rdmAdmin()?`<div class="v62Actions"><button class="tinyBtn" onclick="v6AddTournament('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ᴀᴅᴅᴇᴅ</div>';const o=document.getElementById('opponentList');if(o)o.innerHTML=V6.opponents.length?V6.opponents.map(x=>`<article class="card"><h3>${mini(x.name)}</h3><p>ʜ2ʜ • ${x.played||0} ᴍᴀᴛᴄʜᴇꜱ • ${x.won||0} ᴡᴏɴ • ${x.lost||0} ʟᴏꜱᴛ</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6AddOpponent('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴏᴘᴘᴏɴᴇɴᴛ ᴀᴅᴅᴇᴅ</div>'}
async function v6AddTournament(id){if(!rdmAdmin())return;const x=V6.tournaments.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ':'ᴀᴅᴅ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ',[{k:'name',label:'ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ɴᴀᴍᴇ',ph:'Mahuawan Premier League 3',full:true},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'status',label:'ꜱᴛᴀᴛᴜꜱ',type:'select',options:['UPCOMING','ONGOING','COMPLETED']},{k:'position',label:'ʀᴅᴍ ᴘᴏꜱɪᴛɪᴏɴ',ph:'Winner / Runner-Up / Group Stage'},{k:'venue',label:'ᴠᴇɴᴜᴇ',ph:'Ground / Village'},{k:'dates',label:'ᴅᴀᴛᴇꜱ',ph:'10 Jan – 15 Jan 2027'},{k:'organizer',label:'ᴏʀɢᴀɴɪᴢᴇʀ',ph:'Organizer name'},{k:'teams',label:'ᴛᴏᴛᴀʟ ᴛᴇᴀᴍꜱ',type:'number'},{k:'matches',label:'ʀᴅᴍ ᴍᴀᴛᴄʜᴇꜱ',type:'number'},{k:'wins',label:'ʀᴅᴍ ᴡɪɴꜱ',type:'number'},{k:'losses',label:'ʀᴅᴍ ʟᴏꜱꜱᴇꜱ',type:'number'},{k:'fixtures',label:'ꜰɪxᴛᴜʀᴇꜱ / ᴘᴏɪɴᴛꜱ / ɴᴏᴛᴇꜱ',type:'textarea',full:true,ph:'Match 1: RDM vs Team A\nMatch 2: RDM vs Team B\nPoints: 4'}],x,async d=>{if(!d.name||!d.season){toast('ɴᴀᴍᴇ & ꜱᴇᴀꜱᴏɴ ʀᴇǫᴜɪʀᴇᴅ');throw Error('required')}d.updatedAt=rdmStamp();d.createdMs=x.createdMs||Date.now();id?await rdmDB.collection(V6COL.tournaments).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.tournaments).add(d);await v6load();toast('ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ꜱᴀᴠᴇᴅ')})}
window.v6AddRecord=v6AddRecord;window.v6EditRecord=v6AddRecord;window.v6AddTournament=v6AddTournament;

/* V6.3 - separated Player / Team / Partnership / Tournament records */
function v63Type(x){if(x.recordType)return x.recordType;const c=String(x.category||'').toUpperCase();if(c==='PARTNERSHIP')return 'PARTNERSHIP';if(['BATTING','BOWLING','FIELDING','PLAYER'].includes(c))return 'PLAYER';return 'TEAM'}
function v63Date(d){if(!d)return '';const a=String(d).split('-');if(a.length!==3)return d;const m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return `${Number(a[2])} ${m[Number(a[1])-1]||a[1]} ${a[0]}`}
function v63Card(x,editFn){return `<article class="recordCard"><div class="v62Meta"><span class="seasonTag">${mini(x.season||'ALL TIME')}</span>${x.category?`<span class="v62Chip">${mini(x.category)}</span>`:''}</div><h3>${mini(x.title||'Record')}</h3><div class="recordValue">${mini(x.value||'—')}</div>${x.player?`<p>👤 ${mini(x.player)}</p>`:''}${x.player2?`<p>👥 ${mini(x.player2)}</p>`:''}${x.wicket?`<p>🏏 ${mini(x.wicket)}</p>`:''}${x.opponent?`<p>🆚 ${mini(x.opponent)}</p>`:''}${x.date?`<p>📅 ${mini(v63Date(x.date))}</p>`:''}${x.note?`<p class="v62Note">${mini(x.note)}</p>`:''}${rdmAdmin()?`<div class="v62Actions"><button class="tinyBtn" onclick="${editFn}('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`}
function v63List(id,arr,editFn,empty){const el=document.getElementById(id);if(el)el.innerHTML=arr.length?arr.map(x=>v63Card(x,editFn)).join(''):`<div class="empty">${empty}</div>`}
function v6Records(){
 const tabs=['PLAYER','TEAM','PARTNERSHIP','LEADERBOARD'];const rf=document.getElementById('recordTypeFilters');if(rf)rf.innerHTML=tabs.map(x=>`<button class="tinyBtn recordTypeBtn ${v6RecordType===x?'on':''}" onclick="v6SetRecordType('${x}')">${mini(x)}</button>`).join('');
 const stats=v6Season==='ALL'?XD.stats:XD.stats.filter(s=>String(s.season||'')===String(v6Season));
 const total=p=>stats.filter(s=>s.playerId===p.id).reduce((a,z)=>{['matches','runs','wickets','highScore','fours','sixes','fifties','hundreds','runOuts'].forEach(k=>a[k]=(k==='highScore'?Math.max(xnum(a[k]),xnum(z[k])):xnum(a[k])+xnum(z[k])));a.strikeRate=Math.max(xnum(a.strikeRate),xnum(z.strikeRate));a.economy=a.economy?Math.min(xnum(a.economy),xnum(z.economy)):xnum(z.economy);a.bestBowling=z.bestBowling||a.bestBowling||'';return a},{matches:0,runs:0,wickets:0,highScore:0,fours:0,sixes:0,fifties:0,hundreds:0,runOuts:0,strikeRate:0,economy:0,bestBowling:''});
 const ranked=D.players.map(p=>({p,s:total(p)}));const best=(k,low=false)=>[...ranked].filter(x=>x.s[k]>0).sort((a,b)=>low?a.s[k]-b.s[k]:b.s[k]-a.s[k])[0];
 const awards={};XD.achievements.forEach(a=>{if(/player of the match|potm/i.test(a.title||''))awards[a.playerName]=(awards[a.playerName]||0)+1});const potm=Object.entries(awards).sort((a,b)=>b[1]-a[1])[0];
 const lb=document.getElementById('leaderboard');if(lb){const items=[['🏏','ᴛᴏᴘ ʀᴜɴ ꜱᴄᴏʀᴇʀ',best('runs'),'runs'],['🎯','ᴛᴏᴘ ᴡɪᴄᴋᴇᴛ ᴛᴀᴋᴇʀ',best('wickets'),'wickets'],['💥','ᴍᴏꜱᴛ ꜱɪxᴇꜱ',best('sixes'),'sixes'],['4️⃣','ᴍᴏꜱᴛ ꜰᴏᴜʀꜱ',best('fours'),'fours']];lb.innerHTML=`<div class="leaderGrid">${items.map(([i,t,x,k])=>`<div class="leaderCard">${i} ${t}<b>${x?mini(x.p.name)+' • '+x.s[k]:'ɴᴏ ꜱᴛᴀᴛꜱ ʏᴇᴛ'}</b></div>`).join('')}<div class="leaderCard">🏅 ᴍᴏꜱᴛ ᴘᴏᴛᴍ<b>${potm?mini(potm[0])+' • '+potm[1]:'ɴᴏ ᴘᴏᴛᴍ ʏᴇᴛ'}</b></div></div>`}
 const autoDefs=[['Highest Individual Score','highScore',' Runs'],['Most Runs','runs',' Runs'],['Most Wickets','wickets',' Wickets'],['Most Sixes','sixes',' Sixes'],['Most Fours','fours',' Fours'],['Most 50s','fifties',''],['Most 100s','hundreds',''],['Most Run Outs','runOuts',''],['Best Strike Rate','strikeRate',''],['Best Economy','economy','',true]];
 const pr=document.getElementById('playerRecordList');if(pr)pr.innerHTML=autoDefs.map(([title,k,suf,low])=>{const x=best(k,!!low);return `<article class="recordCard"><span class="v62Chip">ᴀᴜᴛᴏ • ꜱᴛᴀᴛꜱ</span><h3>${mini(title)}</h3><div class="recordValue">${x?mini(String(x.s[k])+suf):'—'}</div><p>👤 ${x?mini(x.p.name):'ɴᴏ ꜱᴛᴀᴛꜱ ʏᴇᴛ'}</p></article>`}).join('');
 const all=V6.records.sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));v63List('teamRecordList',all.filter(x=>v63Type(x)==='TEAM'),'v63AddTeamRecord','ɴᴏ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅꜱ ʏᴇᴛ');v63List('partnershipRecordList',all.filter(x=>v63Type(x)==='PARTNERSHIP'),'v63AddPartnershipRecord','ɴᴏ ᴘᴀʀᴛɴᴇʀꜱʜɪᴘ ʀᴇᴄᴏʀᴅꜱ ʏᴇᴛ');
 const map={PLAYER:'playerRecordSection',TEAM:'teamRecordSection',PARTNERSHIP:'partnershipRecordSection',LEADERBOARD:'leaderboardSection'};Object.entries(map).forEach(([t,id])=>{const el=document.getElementById(id);if(el)el.hidden=v6RecordType!==t});
}
function v6SetRecordType(t){v6RecordType=t;if(t==='TOURNAMENT'){document.querySelector('[data-page="tournaments"]')?.click();setTimeout(()=>document.getElementById('tournamentList')?.scrollIntoView({behavior:'smooth',block:'start'}),80);return}if(t==='H2H'){document.querySelector('[data-page="tournaments"]')?.click();setTimeout(()=>document.getElementById('opponentList')?.scrollIntoView({behavior:'smooth',block:'start'}),80);return}v6Records()}
async function v63Save(id,x,d,type){if(!d.title||!d.value){toast('Record name & value required');throw Error('required')}d.recordType=type;d.createdMs=x.createdMs||Date.now();const rec={...x,...d,_docId:id||'loc_'+Date.now()};if(id)Object.assign(x,rec);else V6.records.unshift(rec);v6SaveOverride('records',V6.records);try{id?await rdmDB.collection(V6COL.records).doc(id).set({...d,createdMs:rec.createdMs,updatedAt:rdmStamp()},{merge:true}):await rdmDB.collection(V6COL.records).add({...d,createdMs:rec.createdMs,updatedAt:rdmStamp()})}catch{}v6render();toast('Record saved')}
function v63AddPlayerRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴘʟᴀʏᴇʀ ʀᴇᴄᴏʀᴅ':'ᴀᴅᴅ ᴘʟᴀʏᴇʀ ʀᴇᴄᴏʀᴅ',[{k:'category',label:'ᴛʏᴘᴇ',type:'select',options:['BATTING','BOWLING','FIELDING','ALL-ROUNDER','OTHER']},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'player',label:'ᴘʟᴀʏᴇʀ',ph:'Rehan Akhtar'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Individual Score',full:true},{k:'value',label:'ʀᴇᴄᴏʀᴅ ᴠᴀʟᴜᴇ',ph:'85 Runs'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true}],x,d=>v63Save(id,x,d,'PLAYER'))}
function v63AddTeamRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ':'ᴀᴅᴅ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ',[{k:'category',label:'ᴛʏᴘᴇ',type:'select',options:['TEAM','CHASE','WIN','STREAK','OTHER']},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Team Score',full:true},{k:'value',label:'ʀᴇᴄᴏʀᴅ ᴠᴀʟᴜᴇ',ph:'185/6'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true}],x,d=>v63Save(id,x,d,'TEAM'))}
function v63AddPartnershipRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴘᴀʀᴛɴᴇʀꜱʜɪᴘ':'ᴀᴅᴅ ᴘᴀʀᴛɴᴇʀꜱʜɪᴘ ʀᴇᴄᴏʀᴅ',[{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'player',label:'ᴘʟᴀʏᴇʀ 1',ph:'Rehan Akhtar'},{k:'player2',label:'ᴘʟᴀʏᴇʀ 2',ph:'Saif Ali'},{k:'wicket',label:'ᴡɪᴄᴋᴇᴛ',ph:'1st Wicket'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Partnership',full:true},{k:'value',label:'ʀᴜɴꜱ',ph:'120 Runs'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true}],x,d=>{d.category='PARTNERSHIP';return v63Save(id,x,d,'PARTNERSHIP')})}
window.v63AddPlayerRecord=v63AddPlayerRecord;window.v63AddTeamRecord=v63AddTeamRecord;window.v63AddPartnershipRecord=v63AddPartnershipRecord;
