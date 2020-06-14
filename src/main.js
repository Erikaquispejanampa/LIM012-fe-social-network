//import { example } from './example.js';

//example();

// eslint-disable-next-line import/no-unresolved
import { changeView } from './view-controller/router-controller.js';
console.log('entro');
// example();
const initPathBase = () => {
  console.log('entro');
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', initPathBase);
