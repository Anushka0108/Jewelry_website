 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "Apikey",
    authDomain: "dreamstone-3c8bc.firebaseapp.com",
    projectId: "dreamstone-3c8bc",
    storageBucket: "dreamstone-3c8bc.firebasestorage.app",
    messagingSenderId: "250194150587",
    appId: "1:250194150587:web:8725900d4c105fa07b159e",
    measurementId: "G-LNL0THHGMX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 const about = document.querySelector('.home');

about.addEventListener('click', function () {
  window.location.href = "../index.html"; 
});

