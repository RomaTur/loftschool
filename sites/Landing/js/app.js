
////////////ФУНКЦИОНАЛ/////////
//headerMenuFullScreen
var welcomeNavOpen = document.querySelector('#welcomeNavOpen');
var welcomeNavClose = document.querySelector('#welcomeNavClose');
var welcomeNavList = document.querySelector('.nav-burger__list');


welcomeNavOpen.addEventListener('click', function(elem){
    welcomeNavList.classList.add('nav-burger__list--active');
});
welcomeNavClose.addEventListener('click', function(){
    welcomeNavList.classList.remove('nav-burger__list--active');
});
