// ==UserScript==
// @name        AmazonSignInAndOutQuickly
// @namespace   www.roland-kluge.de
// @description Adds a entry for signing out at the end of the Amazon navigation menu
// @include     https://*.amazon.*/*
// @version     1.0.0
// @grant       none
// @author      Roland Kluge
// ==/UserScript==
var navToolsElement = document.getElementById("nav-tools");
if (navToolsElement != null){
  var anchor = document.createElement("a");
  navToolsElement.appendChild(anchor);
  anchor.setAttribute("class", "nav-a nav-a-2");
  anchor.setAttribute("href", "/gp/flex/sign-out.html/ref=nav_signout?ie=UTF8&action=sign-out&path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1");
 
  var anchorSpan1 = document.createElement("span");
  anchor.appendChild(anchorSpan1);
  anchorSpan1.setAttribute("class", "nav-line-1");
  anchorSpan1.appendChild(document.createTextNode("Sign"));
  
  var anchorSpan2 = document.createElement("span");
  anchor.appendChild(anchorSpan2);
  anchorSpan2.setAttribute("class", "nav-line-2");
  anchorSpan2.appendChild(document.createTextNode("in&out"));
}