import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

 const firebaseConfig = {
  apiKey: "AIzaSyDMfCK0gb_Rxm1dpq2MtBLJq-kt-ZFS3AI",
  authDomain: "my-hackathon-project-da907.firebaseapp.com",
  projectId: "my-hackathon-project-da907",
  storageBucket: "my-hackathon-project-da907.firebasestorage.app",
  messagingSenderId: "931526999360",
  appId: "1:931526999360:web:39857dc0082466d7e9cea5",
  measurementId: "G-FT8W5L0FXF"
};

const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export { auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
}