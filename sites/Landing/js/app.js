
////////////ФУНКЦИОНАЛ/////////
//headerMenuFullScreen
let welcomeNavOpen = document.getElementById('welcomeNavOpen');
let welcomeNavClose = document.getElementById('welcomeNavClose');
let welcomeNavList = document.querySelector('.nav-burger__list');


welcomeNavOpen.addEventListener('click', function(){
    welcomeNavList.classList.add('nav-burger__list--active');
});

welcomeNavClose.addEventListener('click', function(){
    welcomeNavList.classList.remove('nav-burger__list--active')
});
