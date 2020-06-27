import { signingIn, signingInGoogle } from '../view-controller/sigin-controller.js';

const login = () => {
  const viewLogin = `
<div class="login-content">
  <form>
     <h2 class="title">Travel of World</h2>
      <input id="txtLoginEmail" type="text" class="input" value="Email" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Email&#39;;}">
      <input id="txtloginPassword" type="password" class="input" value="Password" onfocus="this.value = &#39;&#39;;" onblur="if (this.value == &#39;&#39;) {this.value = &#39;Password&#39;;}">
  
    <div class="forgot">
     <div class="login-check">
        <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i> </i>Remember Me</label>
      </div>
      <div class="clear"> </div>
  </div>
  <div class="reg-bwn">
    <input type="submit" value="Log in" id="btnLogin">
  </div>
  <div class="login-bottom">
    <p>O ingresa con</p>
    <div class="social-icons">
    <div class="social_media">
            <div class="item" >
              <i class="fab fa-facebook-f" href="#" id="btnLogInFacebook"></i>
            </div>
           
            <div class="item">
              <i class="fab fa-google-plus-g" href="#" id="btnLogInGoogle"></i>
            </div>
            </div>
            </div> 
        <div class="clear"> </div>
      </div>
      <h4> <a href="#">No tienes una cuenta?</a></h4>
      <div class="reg-bwn">
        <a class ="text-registro" href="#/register" id="btnViewSignUp">Regístrate</a>
      </div>

    </form>
    </div>
</div>

`;

  // Creando un elemento nodo de tipo div
  const divLogin = document.createElement('div');
  // Añadimos una cadena de texto
  divLogin.innerHTML = viewLogin;
  divLogin.classList.add('login');

  const btnLogin = divLogin.querySelector('#btnLogin');
  const btnLogInFacebook = divLogin.querySelector('#btnLogInFacebook');
  const btnLogInGoogle = divLogin.querySelector('#btnLogInGoogle');


  btnLogin.addEventListener('click', () => {
    const txtEmail = divLogin.querySelector('#txtLoginEmail').value;
    const txtPassword = divLogin.querySelector('#txtloginPassword').value;

    // console.log('txtEmail',txtEmail);
    // console.log('txtPassword',txtPassword);

    signingIn(txtEmail, txtPassword);
  });

  btnLogInFacebook.addEventListener('click', () => {
    console.log('btnLogInFacebook');
  });

  btnLogInGoogle.addEventListener('click', () => {
    signingInGoogle();
  });

  return divLogin;
};

export default login;
