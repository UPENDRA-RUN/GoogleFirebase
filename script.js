import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "myfirebaseproject-7ca83.firebaseapp.com",
  projectId: "myfirebaseproject-7ca83",
  storageBucket: "myfirebaseproject-7ca83.appspot.com",
  messagingSenderId: "655832718604",
  appId: "1:655832718604:web:6a1925fc5d10d314a83d29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login");

googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Welcome " + user.displayName);
      console.log("User logged in:", user);
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
      alert("Error: " + error.message);
    });
});
