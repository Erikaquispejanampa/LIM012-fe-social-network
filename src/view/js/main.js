// import { example } from './example.js';
// example();

import {signingIn,signingInGoogle } from '../../controller/FireBase/sigin.js';


var firebaseConfig = {
  apiKey: "AIzaSyBpMUJ6sUq_j6q7goEWM-XfLO_yqauPtWg",
  authDomain: "lim012-fe-social-network.firebaseapp.com",
  databaseURL: "https://lim012-fe-social-network.firebaseio.com",
  projectId: "lim012-fe-social-network",
  storageBucket: "lim012-fe-social-network.appspot.com",
  messagingSenderId: "881380468988",
  appId: "1:881380468988:web:0ac39d9ab65bfcf56b8f79"
};

  firebase.initializeApp(firebaseConfig);



const btnLogIn = document.getElementById("btnLogIn");

btnLogIn.addEventListener('click', () => {

  let mail =  document.getElementById("mail").value ; 
  let pass =  document.getElementById("password").value ; 

  signingIn(mail,pass);
  
} );



 const btnLogInGoogle = document.querySelector('.anc-go');
 btnLogInGoogle.addEventListener('click', signingInGoogle );









  // var storage = firebase.app().storage("gs://lim012-fe-social-network.appspot.com/imagenes/tow1.png");

  // var imgs = storage.ref().child('iamgenes');
  // var urlimg = imgs.child("tow1.png").fullPath;

  // console.log(starsRef );
  // gs://lim012-fe-social-network.appspot.com/imagenes/tow1.png

