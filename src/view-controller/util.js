/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */

// Variables globales
export const tableUsers = 'users';
export const storagePerfil = 'perfil';


// metodos

export const nameImage = () => doc.data.uid;


export const getBlobByUrl2 = (url) => {
  // console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';

  xhr.onload = function (event) {
    const blob = xhr.response;
    console.log(blob);
  };

  xhr.send();
  return xhr.response;
};

export const getBlobByUrl = url => new Promise(((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      resolve(xhr.response);
    } else {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    }
  };
  xhr.onerror = function () {
    reject({
      status: this.status,
      statusText: xhr.statusText,
    });
  };
  xhr.send();
}));
