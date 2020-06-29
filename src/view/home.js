import { uploadImagePerfil, addPost } from '../view-controller/home-controller.js';
import { signOut } from '../firebase-controller/auth-controller.js';

export default (posts) => {
  const userName = localStorage.getItem('fullName');
  const userPhoto = localStorage.getItem('userPhoto');
  const aboutMe = localStorage.getItem('aboutMe');
  const location = localStorage.getItem('location');

  const viewHome = document.createElement('div');
  viewHome.classList.add('home');
  viewHome.innerHTML = `
  <div class="header">
  <header class="header">
  <nav class="nav-home">
    <ul>
      <li><a href="#/profile">Perfil</a></li>
        <li><a href="#/login" id="btnSignOut">cerrar sesión</a></li>
    
  </ul>
  </nav>

</header>
  
  <div class="post">
  <div id="column-1" class="post"><br><img src="../css/images/seguridad.png"  id="privacity" style="width:20px; height:20px;">Seguridad |  <img src="../css/images/foto.png" class="upImage"  style="width:20px; height:20px;">Foto/video|🚩 Acontecimiento importante<textarea placeholder="¿Qué quieres compartir?" id="txtPost" type="text"></textarea><br><br><br><br><br><br><hr>
  <img src="../css/images/foto.png" class="upImage"  style="width:30px; height:30px;">
  <img src="../css/images/seguridad.png"  style="width:30px; height:30px;"<select id="ddlStatusPrivacy"> <option id="public" value="public">Público</option> <option id="private "value="private">Privado</option></select>
 
  </div>

  <div id="postpos" class="post"><input type="submit" id="btnPost" value="compartir"/></div>
  

    
  </div>
  
  <div class="post1"><img  class="user-foto" src="${userPhoto}"  style="width:30px; height:30px; border-radius:50%;  margin:auto; left:0; top:0; rigth:0; bottom:0;">
  <br>
  <p1>Like <img src="../css/images/like.png"  id="like" style="width:20px; height:20px;">
  |  Comentario <img src="../css/images/comentario.png"  id="comment" style="width:20px; height:20px;">
  |  <img src="../css/images/foto.png" class="upImage"  style="width:20px; height:20px;">Foto/video</p1>
  <p1>
        <input type="submit" value="Subir Foto" id="btnImagePost">
        <input type="file" id="inputImagePost" style="display:none;"/>
      </p1>
  <p1>|Compartir <img src="../css/images/avion.png" class="upImage"  style="width:20px; height:20px;"><p1>
  
  <div id="post2text" class="post"><p1>${userName}</p1>
  <ul id="ulPosts"></ul>
  </div>
  <input type="textarea" placeholder="Escribe un comentario" id="commentbox"/>
  <div id="containerPost">
  </div>
 
  </div>
  
  </div>
  <div class="bodyn">
  <main class="contenido">
    <div id="profileInfo">
    <br>
      <p1 class="user-name">${userName}</p1>
      <br>
      <img id="profilePhoto" class="img-user" src="${userPhoto || './images/avatardefaultblack.png'}"  style ="width: 200px; height: 200px;">
      <br>
      <input type="submit" value="Cambiar Foto" id="btnImagePerfil">
      <input type="file" id="inputImagePerfil" style="display:none;"/>
      <br>
      <p1 class="user-name">${aboutMe}</p1>
      <br>
      <img src="../css/images/registro.png"  style ="width: 40px; height: 40px;">
      <br>
      <p1 class="user-name">${location} <br>¿en qué ciudad vives?</p1>
      <br>
      <img src="../css/images/ubicacion.png"  style ="width: 30px; height: 30px;">
    </div>
      
  <select id="ddlStatusPrivacy">

        <option id="public" value="public">Público</option>
        <option id="private "value="private">Privado</option>
      </select>
    
    
    <img id="imgPost" class="img-user" src="" alt="" style ="width: 200px; height: 250px;">
    
     
  </main>

  </div>
  
`;
  const btnImagePerfil = viewHome.querySelector('#btnImagePerfil');
  const inputImagePerfil = viewHome.querySelector('#inputImagePerfil');
  const profilePhoto = viewHome.querySelector('#profilePhoto');

  const btnImagePost = viewHome.querySelector('#btnImagePost');
  const inputImagePost = viewHome.querySelector('#inputImagePost');
  const imgPost = viewHome.querySelector('#imgPost');


  // cerrar sesión
  const btnSignOut = viewHome.querySelector('#btnSignOut');
  btnSignOut.addEventListener('click', signOut);


  const btnPost = viewHome.querySelector('#btnPost');

  const containerPost = viewHome.querySelector('#containerPost');


  btnImagePerfil.addEventListener('click', () => {
  // Ejecutamos el metodo Click de input type
    inputImagePerfil.click();
  });


  inputImagePerfil.addEventListener('change', (e) => {
  // obtener archivo seleccionado
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
    // cargar archivo seleccionado
      const dataURL = reader.result;
      profilePhoto.src = dataURL;
    };
    reader.readAsDataURL(file);

    // Subir archivo al firebase
    uploadImagePerfil(file);
  });


  btnImagePost.addEventListener('click', () => {
  // Ejecutamos el metodo Click de input type
    inputImagePost.click();
  });


  inputImagePost.addEventListener('change', (e) => {
  // obtener archivo seleccionado
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
    // cargar archivo seleccionado
      const dataURL = reader.result;
      imgPost.src = dataURL;
    };
    reader.readAsDataURL(file);
  });

  btnPost.addEventListener('click', () => {
    const statusPrivacy = document.getElementById('ddlStatusPrivacy').value;
    const textPost = document.getElementById('txtPost').value;

    if (textPost.length > 0) {
    // Verificamos si han subido archivo. `${window.origin}/` => 'http://localhost:5000/'
      const img = imgPost.src === (`${window.origin}/`) ? '' : imgPost.src;

      addPost(userName, statusPrivacy, textPost, img).then(() => {
        console.log('inserto comentario');
        document.getElementById('txtPost').value = '';
      });
    } else {
      alert('Completar texto para compartir');
    }
  });


  containerPost.innerHTML = '';
  posts.forEach((post) => {
    const div = document.createElement('div');
    const pNombre = document.createElement('p');
    const txtPost = document.createElement('textarea');
    const img = document.createElement('img');

    div.setAttribute('id', post.id);
    pNombre.innerHTML = post.userName;
    txtPost.innerHTML = post.text;
    img.src = post.imageContent;

    div.appendChild(pNombre);
    div.appendChild(txtPost);
    div.appendChild(img);

    // console.log(post.imageUrl);
    console.log(div);
    containerPost.appendChild(div);
  });

  return viewHome;
};
