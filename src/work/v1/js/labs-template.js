"use strict";var burderWrap=document.querySelector(".burger__wrap"),burder=document.querySelector(".burger"),sideBar=document.querySelector(".side-bar"),pageMain=document.querySelector(".content"),burderOverlay=document.querySelector(".burger-overlay"),clickBurger=function(){burderWrap.classList.toggle("burger--active"),sideBar.classList.toggle("side-bar--show"),pageMain.classList.toggle("page-main--in-full-screen"),burderOverlay.classList.toggle("is-close")},closeKeyDownBurger=function(e){27===(e.keyCode||e.which)&&(e.preventDefault(),burderOverlay.classList.add("is-close"),burderWrap.classList.remove("burger--active"),sideBar.classList.remove("side-bar--show"))};burderWrap.addEventListener("click",clickBurger),document.addEventListener("keydown",closeKeyDownBurger),burderOverlay.addEventListener("click",function(){burderOverlay.classList.add("is-close"),burderWrap.classList.remove("burger--active"),sideBar.classList.remove("side-bar--show")});var closeKeyEsc=function(e){27===(e.keyCode||e.which)&&(e.preventDefault(),burderOverlay.classList.add("is-close"),burderWrap.classList.remove("burger--active"),sideBar.classList.remove("side-bar--show"))},frameWidth=document.querySelector(".frame").offsetWidth,frameHeight=document.querySelector(".frame").offsetHeight,frameSizeContainer=document.querySelector(".frame-size-container");frameSizeContainer.innerHTML="Frame Width: "+frameWidth+"px; Frame Height: "+frameHeight+"px",frame.onresize=function(){var e=document.querySelector(".frame").offsetWidth,r=document.querySelector(".frame").offsetHeight;frameSizeContainer.innerHTML="Frame Width: "+e+"px; Frame Height: "+r+"px"};