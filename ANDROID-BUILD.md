# RDM Official — Android App Build & Architecture Guide

## Isolated Project Layout
- **Original GitHub Pages Website (Unchanged):** `index.html`, `style.css`, `app.js`, `firebase-backend.js`, `access-links.js`, `firestore.rules`, `vite.config.js`
- **Isolated Android Web Source:** `android-web/`
- **Isolated Android Web Build Output:** `dist-android/` (built via `vite.android.config.js`; excludes `access-links.js`, `PRIVATE-LINKS.txt`, `admin-player-manager.js`, and any `?key=` URL tokens)
- **Capacitor Native Android Project:** `android/` (`appId: com.rdm.official`, `appName: RDM Official`)

## Build Commands

### 1. Local Android Build (Android Studio / PC / Termux with JDK 21 + Android SDK)
```bash
npm install
npm run android:sync
cd android
./gradlew assembleDebug
```
The compiled APK will be generated at:
`android/app/build/outputs/apk/debug/app-debug.apk`

For a signed release APK / AAB, open `android/` in **Android Studio** -> **Build > Generate Signed Bundle / APK**.

### 2. Cloud APK Build (GitHub Actions)
Push this repository to GitHub (`main` or `master`) or trigger **Actions -> Build RDM Official Android APK -> Run workflow**.
Download `RDM-Official-debug-apk` from the completed workflow run artifacts.

## Firebase Authentication & Security Rules
- Login uses Firebase Email & Password authentication (`rdmAuth.signInWithEmailAndPassword`).
- Role authorization is verified fail-closed against Firestore `Accounts/{uid}`:
  - **Admin:** `active === true && role === 'admin'`
  - **Player:** `active === true` and a valid mapped `playerId`
- Missing, inactive, or invalid role documents automatically sign out and deny access.
- `firestore.rules` remains strict and unmodified.
