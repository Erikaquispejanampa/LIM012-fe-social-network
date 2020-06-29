/* eslint-disable no-multiple-empty-lines */


export default () => {
  const userName = localStorage.getItem('fullName');
  const userPhoto = localStorage.getItem('userPhoto');
  const location = localStorage.getItem('location');
  const viewProfile = document.createElement('div');
  viewProfile.classList.add('wrapper-profile');
  viewProfile.innerHTML = `
  <div class="card">
  <div class="card-image">
  <br>
  <section class="box-picture">
  <img  class="user-foto" src="${userPhoto}"  style="width:100px; height:100px; border-radius:50%;  margin:auto; left:0; top:0; rigth:0; bottom:0;">
</section>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
  <div class="card-text">
    <span class="date">Hace 4 días</span>
    <h2 class="user-name">${userName}</h2>
    <p>${location}</p>
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">40</div>
      <div class="type">publicaciones</div>
    </div>
    <div class="stat border">
      <div class="value">5123</div>
      <div class="type">views</div>
    </div>
    <div class="stat">
      <div class="value">32</div>
      <div class="type">comentarios</div>
    </div>
  </div>
  </div>
  <a class="text-registro" id="btnViewLogIn" href="#/home">HOME</a>

      `;

  return viewProfile;
};

