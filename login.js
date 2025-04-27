  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8j3oyW8ssoaYvtxBjTeYtEy98kwqABhw",
    authDomain: "singup-1d9f3.firebaseapp.com",

    projectId: "singup-1d9f3",
    storageBucket: "singup-1d9f3.firebasestorage.app",
    messagingSenderId: "981949792348",
    appId: "1:981949792348:web:3327f959cddf29da6fa699",
    measurementId: "G-0J2XV7ETBB"
  };

  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();    


  const email = document.getElementById("email").value;
 
  const password = document.getElementById("password").value;
  alert(" login successfully");
  window.location.href="main.html"




  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 


    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

});


