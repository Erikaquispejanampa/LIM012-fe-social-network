/* eslint-disable import/no-cycle */
import {
    signIn, logInGoogle,verificationEmail
  } from './auth.js';
  import { validation } from './validacion.js';

  
  export const signingIn = ( emailLogIn, passwordLogIn) => {

    signIn(emailLogIn, passwordLogIn).then(() => {
      console.log('validar correo');
      
      // verificationEmail();
      
      validation();
      CargarImagenTest();


    }).catch((err) => {
            console.log(err);
    });
  };
  

  export const signingInGoogle = () => {
    logInGoogle().then((result) => {

        console.log(result.user.uid);
        CargarImagenTest();
     



    //   getUser(result.user.uid).then((doc) => {
    //     if (!doc.exists) {
    //       createProfileInfo(result.user.uid);
    //     }
    //   });
    });
  };
  

  const CargarImagenTest = () => {
    var  storageRef  = firebase.storage().ref().child("imagenes/tow1.png");

    storageRef.getDownloadURL().then(function(url) {
        console.log(url);
    
        //Descargar imagen
          // var xhr = new XMLHttpRequest();
          // xhr.responseType = 'blob';
          // xhr.onload = function(event) {
          //   var blob = xhr.response;
          // };
          // xhr.open('GET', url);
          // xhr.send();
    
          // console.log(xhr);
        
      
          var img = document.getElementById('img_log');
          img.src = url;
       
    
      }).catch(function(error) {
        console.log(error);
      });

  }