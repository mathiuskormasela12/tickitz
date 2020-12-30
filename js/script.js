/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
var eye = document.getElementById('eye');
eye.addEventListener('click', function () {
  var input = this.nextElementSibling;
  if (input.type === 'password') input.type = 'text';else input.type = 'password';
});
/******/ })()
;