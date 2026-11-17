/* RDM Firebase Authentication — Private Link Verification (Google Sign-In & Email/Password) */
const ACCOUNT_COLLECTION = "Accounts";
const GOOGLE_PENDING_KEY = "rdm_google_pending_priv";

async function rdmAccountFor(user){
  if(!user)return null;
  const snap=await rdmDB.collection(ACCOUNT_COLLECTION).doc(user.uid).get();
  return snap.exists?snap.data():null;
}

async function verifyAndApplyAccount(user,mode='player',expectedPlayerId=null){
  const acc=await rdmAccountFor(user);
  if(!acc||acc.active===false){
    const mail=user?.email?` (${user.email})`:'';
    await rdmAuth.signOut();
    throw new Error(`Account${mail} is not registered or active in RDM Accounts.`);
  }
  if(mode==='admin'&&acc.role!=='admin'){
    await rdmAuth.signOut();
    throw new Error('This account does not have Admin permissions.');
  }
  if(mode==='player'){
    if(acc.role!=='player'&&acc.role!=='admin'){
      await rdmAuth.signOut();
      throw new Error('This account does not have Player access.');
    }
    if(expectedPlayerId&&acc.role==='player'&&acc.playerId!==expectedPlayerId){
      await rdmAuth.signOut();
      throw new Error('This account belongs to a different player link.');
    }
  }
  return acc;
}

async function loadFirebaseSession(user){
  if(!user){
    session=null;
    updateAuthUI();
    render();
    if(window.__rdmUrlKeyRole==='admin'&&document.getElementById('admin')?.classList.contains('active'))window.renderAdmin?.();
    window.dispatchEvent(new CustomEvent('rdm-auth-ready'));
    return;
  }
  try{
    const a=await rdmAccountFor(user);
    if(!a||a.active===false){
      session=null;
      updateAuthUI();
      render();
      if(window.__rdmUrlKeyRole==='admin'&&document.getElementById('admin')?.classList.contains('active'))window.renderAdmin?.();
      window.dispatchEvent(new CustomEvent('rdm-auth-ready'));
      return;
    }
    if(a.role==='admin')session={mode:'admin',realRole:'admin',playerId:a.playerId||'RDM001',uid:user.uid,email:user.email||''};
    else if(a.role==='player')session={mode:'player',realRole:'player',playerId:a.playerId,uid:user.uid,email:user.email||''};
    else session=null;
    updateAuthUI();
    render();
    if(typeof window.rdmBackendAuthReady==='function')await window.rdmBackendAuthReady(user,a);
    if(window.__rdmUrlKeyRole==='admin'&&session?.mode==='admin'&&document.getElementById('admin')?.classList.contains('active'))window.renderAdmin?.();
    if(window.__rdmUrlKeyRole==='player'&&session?.mode==='player'&&document.getElementById('profile')?.classList.contains('active'))window.renderProfile?.();
    window.dispatchEvent(new CustomEvent('rdm-auth-ready',{detail:{account:a}}));
  }catch(e){
    console.error('Firebase session error',e);
    session=null;
    updateAuthUI();
    render();
  }
}

window.rdmSignInWithRole=async function(email,password,mode='player',expectedPlayerId=null){
  const cleanEmail=String(email||'').trim();
  const cleanPass=String(password||'');
  if(!cleanEmail||!cleanPass)throw new Error('Please enter both email and password.');
  const cred=await rdmAuth.signInWithEmailAndPassword(cleanEmail,cleanPass);
  return verifyAndApplyAccount(cred.user,mode,expectedPlayerId);
};

window.rdmSignInWithGoogle=async function(mode='player',expectedPlayerId=null){
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  try{
    const cred=await rdmAuth.signInWithPopup(provider);
    return await verifyAndApplyAccount(cred.user,mode,expectedPlayerId);
  }catch(err){
    const code=String(err?.code||'');
    if(code==='auth/popup-blocked'){
      try{sessionStorage.setItem(GOOGLE_PENDING_KEY,JSON.stringify({mode,playerId:expectedPlayerId||''}));}catch{}
      await rdmAuth.signInWithRedirect(provider);
      return null;
    }
    if(code==='auth/popup-closed-by-user'||code==='auth/cancelled-popup-request'){
      throw new Error('Google sign-in popup was closed. Please try again.');
    }
    if(code==='auth/unauthorized-domain'){
      throw new Error('This app domain is not authorized for Google Sign-In in Firebase Console yet.');
    }
    if(code==='auth/operation-not-allowed'){
      throw new Error('Google Sign-In provider is not enabled in Firebase Authentication yet.');
    }
    throw err;
  }
};

window.rdmLogout=async function(){
  try{await rdmAuth.signOut();}catch(e){console.error('Logout error',e);}
  session=null;
  localStorage.removeItem('RDM_V33_SESSION');
  updateAuthUI();
  render();
  if(document.getElementById('profile')?.classList.contains('active'))go('home');
  else if(document.getElementById('admin')?.classList.contains('active'))window.renderAdmin?.();
  toast?.('Signed out');
};

const GOOGLE_G_SVG='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5H1.2v3.1C3.2 21.4 7.3 24 12 24Z"/><path fill="#FBBC05" d="M5.2 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.6H1.2C.4 8.2 0 10.1 0 12s.4 3.8 1.2 5.4l4-3.1Z"/><path fill="#EA4335" d="M12 4.7c1.8 0 3.4.6 4.6 1.8l3.5-3.5C18 1.1 15.2 0 12 0 7.3 0 3.2 2.6 1.2 6.6l4 3.1c1-2.9 3.7-5 6.8-5Z"/></svg>';
window.RDM_GOOGLE_G_SVG=GOOGLE_G_SVG;

/* Opened ONLY when accessing a specific player private link (?key=...) or admin private URL (?key=...). Never shown on the public homepage. */
window.openPrivateKeyAuthModal=function(mode='player',expectedPlayerId=null){
  const isAdminMode=mode==='admin';
  if(isAdminMode&&window.__rdmUrlKeyRole!=='admin')return;
  if(!isAdminMode&&!expectedPlayerId)return;
  document.getElementById('authLoginModal')?.remove();
  const targetPlayer=!isAdminMode?(D.players||[]).find(p=>p.id===expectedPlayerId):null;
  const heading=isAdminMode?'Admin Verification':(targetPlayer?`${mini(targetPlayer.name)} · Player Access`:'Player Link Access');
  const subtitle=isAdminMode
    ?'Private Admin URL verified. Sign in with your Firebase Admin account to manage club records.'
    :`Private player link detected${targetPlayer?' for '+mini(targetPlayer.name):''}. Verify your account to edit your profile.`;
  const m=document.createElement('div');
  m.id='authLoginModal';
  m.className='modal show rdmUnifiedModal';
  m.innerHTML=`<div class="dialog rdmUnifiedDialog authLoginDialog" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
    <button class="close" type="button" aria-label="Close">×</button>
    <span class="sectionKicker">${isAdminMode?'Admin Access':'Private Player Link'}</span>
    <h2 id="authModalTitle">${heading}</h2>
    <p class="authModalSub">${subtitle}</p>
    <button type="button" class="authGoogleBtn" id="authGoogleBtn">
      ${GOOGLE_G_SVG}
      <span id="authGoogleLabel">Continue with Google</span>
    </button>
    <div class="authDivider"><span>or verify with email</span></div>
    <form id="authLoginForm" class="authForm">
      <label class="authField">
        <span>Email Address</span>
        <input type="email" id="authEmailInput" autocomplete="email" placeholder="name@example.com" required>
      </label>
      <label class="authField">
        <span>Password</span>
        <div class="authPassWrap">
          <input type="password" id="authPasswordInput" autocomplete="current-password" placeholder="Enter your password" required>
          <button type="button" class="tinyBtn authPassToggle" id="authPassToggle" aria-label="Show password">Show</button>
        </div>
      </label>
      <p id="authErrorBox" class="authErrorBox" role="alert" hidden></p>
      <button type="submit" class="primary wide" id="authSubmitBtn">${isAdminMode?'Verify Admin Account':'Open My Profile'}</button>
      <button type="button" class="authResetLink" id="authResetBtn">Forgot password? Send reset link</button>
    </form>
  </div>`;
  document.body.appendChild(m);
  const close=()=>{document.removeEventListener('keydown',onKey);m.remove()};
  const onKey=e=>{if(e.key==='Escape')close()};
  document.addEventListener('keydown',onKey);
  m.querySelector('.close').onclick=close;
  m.addEventListener('click',e=>{if(e.target===m)close()});

  const googleBtn=m.querySelector('#authGoogleBtn');
  const googleLabel=m.querySelector('#authGoogleLabel');
  const submitBtn=m.querySelector('#authSubmitBtn');
  const errBox=m.querySelector('#authErrorBox');
  const emailInp=m.querySelector('#authEmailInput');
  const passInp=m.querySelector('#authPasswordInput');
  const passToggle=m.querySelector('#authPassToggle');

  passToggle.addEventListener('click',()=>{
    const showing=passInp.type==='text';
    passInp.type=showing?'password':'text';
    passToggle.textContent=showing?'Show':'Hide';
  });

  function routeAfter(acc){
    close();
    if(acc.role==='admin'&&window.__rdmUrlKeyRole==='admin'){
      toast?.('Admin verified');
      setTimeout(()=>go('admin'),100);
    }else if(acc.role==='player'){
      toast?.('Profile unlocked');
      setTimeout(()=>go('profile'),100);
    }
  }

  googleBtn.addEventListener('click',async()=>{
    errBox.hidden=true;errBox.textContent='';
    googleBtn.disabled=true;submitBtn.disabled=true;
    googleLabel.textContent='Connecting Google...';
    try{
      const acc=await window.rdmSignInWithGoogle(isAdminMode?'admin':'player',expectedPlayerId);
      if(acc)routeAfter(acc);
    }catch(err){
      errBox.textContent=err?.message||'Google sign-in failed. Please try again.';
      errBox.hidden=false;
      googleBtn.disabled=false;submitBtn.disabled=false;
      googleLabel.textContent='Continue with Google';
    }
  });

  m.querySelector('#authResetBtn').addEventListener('click',async()=>{
    const em=emailInp.value.trim();
    errBox.hidden=true;
    if(!em){
      errBox.textContent='Enter your account email address first to receive a password reset link.';
      errBox.hidden=false;emailInp.focus();return;
    }
    try{await rdmAuth.sendPasswordResetEmail(em);toast?.('Password reset email sent');}
    catch(err){errBox.textContent=err?.message||'Could not send password reset email.';errBox.hidden=false;}
  });

  m.querySelector('#authLoginForm').addEventListener('submit',async e=>{
    e.preventDefault();
    errBox.hidden=true;errBox.textContent='';
    submitBtn.disabled=true;googleBtn.disabled=true;
    submitBtn.textContent='Verifying...';
    try{
      const acc=await window.rdmSignInWithRole(emailInp.value,passInp.value,isAdminMode?'admin':'player',expectedPlayerId);
      routeAfter(acc);
    }catch(err){
      const msg=String(err?.code||'').includes('invalid-credential')||String(err?.code||'').includes('wrong-password')||String(err?.code||'').includes('user-not-found')
        ?'Incorrect email or password. Please check your credentials and try again.'
        :(err?.message||'Verification failed. Please try again.');
      errBox.textContent=msg;errBox.hidden=false;
      submitBtn.disabled=false;googleBtn.disabled=false;
      submitBtn.textContent=isAdminMode?'Verify Admin Account':'Open My Profile';
    }
  });
};

rdmAuth.getRedirectResult().then(async res=>{
  if(res?.user){
    let pending={mode:window.__rdmUrlKeyRole==='admin'?'admin':'player',playerId:window.__rdmUrlPlayerId||null};
    try{
      const raw=sessionStorage.getItem(GOOGLE_PENDING_KEY);
      if(raw){pending=JSON.parse(raw);sessionStorage.removeItem(GOOGLE_PENDING_KEY);}
    }catch{}
    try{
      await verifyAndApplyAccount(res.user,pending.mode,pending.playerId||null);
    }catch(err){
      toast?.(err?.message||'Account verification failed');
    }
  }
}).catch(err=>{
  if(err?.message)console.warn('Google redirect result',err);
});

localStorage.removeItem('RDM_V33_SESSION');session=null;updateAuthUI();
rdmAuth.onAuthStateChanged(loadFirebaseSession);
