// ==UserScript==
// @name        WindelmanufakturHideComments
// @description Hides the bouncing comments in the leftmost column
// @namespace   www.roland-kluge.de
// @include     https://www.windelmanufaktur.com/*
// @version     1.0.0
// @grant       none
// ==/UserScript==
var x = document.getElementsByClassName('block block-list block-reviewed category');
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.display = 'none';
}
