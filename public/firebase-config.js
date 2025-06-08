import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyCmqL5PC6vil-1pU2xWkbMuS3w4QVFQ9kA",
    authDomain: "jsi05-35a7b.firebaseapp.com",
    projectId: "jsi05-35a7b",
    storageBucket: "jsi05-35a7b.firebasestorage.app",
    messagingSenderId: "881389229214",
    appId: "1:881389229214:web:a4eec1039aaf45c633578f",
    measurementId: "G-9QD9TD3KG0"
}
const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";



window.signUp = function() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Đăng ký thành công!");
    })
    .catch((error) => {
      alert("Lỗi đăng ký: " + error.message);
    });
};


window.signIn = function() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Đăng nhập thành công!");
    })
    .catch((error) => {
      alert("Lỗi đăng nhập: " + error.message);
    });
};


window.signOut = function() {
  signOut(auth).then(() => {
    alert("Đã đăng xuất");
  }).catch((error) => {
    alert("Lỗi đăng xuất: " + error.message);
  });
};

async function loginOrSignup(email, password) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
       
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        return userCredential.user;
      } else {
        alert("Lỗi đăng nhập: " + error.message);
      }
    }
  }
  
  const quizScore = 9;
  const email = "soimedusa@gmail,com";
  const password = "Conmemi@09"; 
  
  loginOrSignup(email, password).then(user => {
    saveScore(quizScore, user.displayName);
  });
  