//!1.  npm i fire base
//!2. https://firebase.google.com/docs/web/setup 위 사이트에서 initialize 코드 붙여넣기
import { initializeApp } from "firebase/app";
//! 5. 임포트해주기
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
//!3. 내 프로젝트 설정에 들어가서 나의 config를 붙여넣는다.  --> 연동설정 끝
//!4. 파이어베이스 사이트에서 스토리지 만들어주기
const firebaseConfig = {
  apiKey: "AIzaSyBU1S1c_J8kBJ3gv7Dh3_ggoFSqhx46IJo",
  authDomain: "nwitter-c9255.firebaseapp.com",
  projectId: "nwitter-c9255",
  storageBucket: "nwitter-c9255.appspot.com",
  messagingSenderId: "1072098671355",
  appId: "1:1072098671355:web:3fe4e59ac304bdebb30e5e",
  measurementId: "G-B1E4XVY4W4",
};

const app = initializeApp(firebaseConfig);
//!6 익스포트 해주기
export const storage = getStorage(app);
export default app;
