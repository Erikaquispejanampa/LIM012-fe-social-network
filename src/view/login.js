
export default () => {
    const viewLogin = document.createElement('div');
    viewLogin.classList.add('sign-in');
    viewLogin.innerHTML = `
      <div class="signin-container">
        <h1>Travel of world</h1>
        <p class="message">Bienvenida a Tow,la red de viajeros más usada en el mundo</p>
        <input class="email-login" id="emailLogIn" type="email" placeholder="e-mail" >
        <input class="password-login" id="passwordLogIn" type="password" placeholder="contraseña" >
        <button class="btn-initsession" id="btnInitSession">Inicia sesión</button>
        <p class="message1">O bien inicia con ...</p>
        <div class="btn-facebook" id="btnLogInFacebook"><img src="./img/facebook.png"></div>
        <div class="btn-Google" id="btnLogInGoogle"><img src="./img/google.png"></div>
        </div>
        <p class="message2">¿No tienes una cuenta?</p>
        <button class="btn-signup" id="btnViewSignUp"><a href="#/registro">Regístrate</a></button>
      </div>
      
      `;
    return viewLogin;
  };
  