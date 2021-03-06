import { getUser } from '../firebase-controller/firestore-controller.js';
import { user, signOut } from '../firebase-controller/auth-controller.js';
//  import { loadingInfo } from '../view-controller/home-controller.js';


export default () => {
  const currentUser = user();
  getUser(currentUser.uid).then(res => console.log(res));
  console.log(getUser(currentUser.uid));


  const dataUser = firebase.auth().currentUser;

  const viewHome = document.createElement('div');
  viewHome.classList.add('home');
  viewHome.innerHTML = `
  <div class="contenedor">
  <header class="header">
       <nav class="nav-home">
      <ul>
        <li><a href="#/profile"><span class ="icon-user"></span>Perfil</a></li>
        <li><a id="btnSignOut" href="#/login"><span class ="icon-switch"></span>cerrar sesión</a></li>
        
      </ul>
      </nav>
    
  </header>
  <main class="contenido">
  <div class="profile-section">
  <div class="cover-image"></div>
  <div class="sectionDataUser">
    <div class="profile-photo-name">
      <section class="box-picture">
        <img  class="box-picture" src="${dataUser.photoURL || './img/profile-ico.png'}">
      </section>
      <h2 class="user-name">${dataUser.displayName}</h2>
    </div>
    </div>
  </div>
  </main>
  <aside class="sidebar">
  <section class="container-home">
            <div class="content-publications">
               <textarea class="new-post" id="newPost" rows="6" cols="70" placeholder="¿Qué quisieras compartir?"></textarea>
                <img src="img/foto.png" class="upImage"  style="width:30px; height:30px;">
                <img src="img/seguridad.png"  id="privacity" style="width:30px; height:30px;">
             
       
             <label class="btnSend">
                <button id="btnNewPost"  class="btn-post">Publicar</button>
                <img src="img/avion.png"  id="send" style="width:30px; height:30px;">
             </label>
            </div>
            <br>
          
            <div class="templateComments">
             <div class ="user-wall">
              <img  class="user-foto" src="${dataUser.photoURL}"  style="width:50px; height:50px; border-radius:50%;  margin:auto; left:0; top:0; rigth:0; bottom:0;">
             </div>
            
              <div id="updatePost">
               
               <div class="textComment">Comenta aquí</div>
             
              </div>
              <div class="wall">
              
              <label class= "btnFile">
               <input type="file" id="selectImage"  accept="image/jpeg, image/png, image/gif" class="upload">
               <img src="img/foto.png" class="upImage"  style="width:30px; height:30px;">
              </label> 
              <img src="img/like.png"  id="like" style="width:30px; height:30px;">
              <img src="img/comentario.png"  id="comment" style="width:30px; height:30px;">
              </div>
            </div>
            <br>
            <div class="templateComments">
             <div class ="user-wall">
              <img  class="user-foto" src="${dataUser.photoURL}"  style="width:50px; height:50px; border-radius:50%;  margin:auto; left:0; top:0; rigth:0; bottom:0;">
             </div>
            
              <div id="updatePost">
               
               <div class="textComment">Comenta aquí</div>
             
              </div>
              <div class="wall">
              
              <label class= "btnFile">
               <input type="file" id="selectImage"  accept="image/jpeg, image/png, image/gif" class="upload">
               <img src="img/foto.png" class="upImage"  style="width:30px; height:30px;">
              </label> 
              <img src="img/like.png"  id="like" style="width:30px; height:30px;">
              <img src="img/comentario.png"  id="comment" style="width:30px; height:30px;">
              </div>
            </div>
            <br>
            <div class="templateComments">
            <div class ="user-wall">
             <img  class="user-foto" src="${dataUser.photoURL}"  style="width:50px; height:50px; border-radius:50%;  margin:auto; left:0; top:0; rigth:0; bottom:0;">
            </div>
           
             <div id="updatePost">
              
              <div class="textComment">Comenta aquí</div>
            
             </div>
             <div class="wall">
             
             <label class= "btnFile">
              <input type="file" id="selectImage"  accept="image/jpeg, image/png, image/gif" class="upload">
              <img src="img/foto.png" class="upImage"  style="width:30px; height:30px;">
             </label> 
             <img src="img/like.png"  id="like" style="width:30px; height:30px;">
             <img src="img/comentario.png"  id="comment" style="width:30px; height:30px;">
             </div>
           </div>
  </aside>
    
          </div>
  </div>
            `;
  // cerra sesión
  const btnSignOut = viewHome.querySelector('#btnSignOut');
  btnSignOut.addEventListener('click', signOut);

  return viewHome;
};
