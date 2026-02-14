const firebaseConfig = {
  apiKey: "AIzaSyDUiv_BJJWjpRjU7UHEWIFig1hSMuD6-uU",
  authDomain: "prepschool-c5ff7.firebaseapp.com",
  projectId: "prepschool-c5ff7",
  storageBucket: "prepschool-c5ff7.firebasestorage.app",
  messagingSenderId: "505401111134",
  appId: "1:505401111134:web:fcdca4c6d930ba82603acf",
  measurementId: "G-WQ3PWF49HG"
};

// تفعيل فايربيز (تأكد من وجود هذا الجزء)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
