// ==UserScript==
// @name        MyHighlands-RemoveNewsletterLink
// @description Removes the triangle-shaped newsletter link, which often hides the map and other information
// @namespace   www.roland-kluge.de
// @version     1.0.0
// @include     http://www.myhighlands.de/*
// @include     https://www.myhighlands.de/*
// @grant       none
// ==/UserScript==
document.getElementById("nldreieck").style.display = "none";
