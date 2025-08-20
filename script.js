import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBgwK2PJi2Bul38KGeG4Kt9mvkBdtSxVX4",
  authDomain: "myfirebaseproject-7ca83.firebaseapp.com",
  projectId: "myfirebaseproject-7ca83",
  storageBucket: "myfirebaseproject-7ca83.appspot.com",
  messagingSenderId: "655832718604",
  appId: "1:655832718604:web:6a1925fc5d10d314a83d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup Auth and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'en'

const googleLogin = document.getElementById("google-login");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User logged in:", user.displayName);
      alert("Welcome " + user.displayName);
      window.addEventListener("error", (e) => {
        console.error("Error occurred:", e.message);
      });

    });
});

