const login = () => {
  const view = `

  <header class="logo-container">
    <h1 class="title-logo">TRAVEL OF WORLD</h1>
  </header>

  <main class="access-login-container">
    <p class="message-welcome">Bienvenido a Tow, la red que conecta viajeros en el mundo</p>
    <form class="login">
        <p>
            <input type="text"  id="txtLoginEmail" class="fill-to-complete" placeholder="Email" />
        </p>
        <p>
            <input type="text" id="txtloginPassword" class="fill-to-complete" placeholder="Password" />
        </p>
        <p>
            <button type="button" id="btnLogin" class="btn-login">Login</button>
        </p>
    </form>
    <p class="message-options">O ingresa con</p>
    <div class="login-networks">
      <p id="fabGoogle"><i class="fab-google"></i></p>
      <p id="fabFacebook"><i class="fab-facebook"></i></p>
    </div>
    <div class="question-container">
      <p class="message-question">No tienes una cuenta?</p>
      <a href="#/signup" class="press">Registrate</a>
    </div>
  </main>
`;
  return view;
};

export default login;





  
