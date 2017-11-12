
////////////ФУНКЦИОНАЛ/////////
//headerMenuFullScreen
var welcomeNavOpen = document.querySelector('#welcomeNavOpen');
var welcomeNavClose = document.querySelector('#welcomeNavClose');
var welcomeNavList = document.querySelector('.nav-burger__list');


welcomeNavOpen.addEventListener('click', function(elem){
    welcomeNavList.classList.add('nav-burger__list--active');
    isScroll(false);
});
welcomeNavClose.addEventListener('click', function(){
    welcomeNavList.classList.remove('nav-burger__list--active');
    isScroll(true);
});


//slider




//accordeon

var teamPersons = document.querySelectorAll('.team__person');

for (var i = 0; i < teamPersons.length; i++) {
    teamPersons[i].addEventListener('click', function(event){
        for (var i = 0; i < teamPersons.length; i++) {
            teamPersons[i].classList.remove('team__person--active');
        }
        if(event.target.parentNode.parentNode.classList.contains('team__person')){
            event.target.parentNode.parentNode.classList.add('team__person--active');
        }
    });
}

//menu









//функция разрешения/запрета скролла//
function isScroll(bool){
    document.onmousewheel=document.onwheel=function(){
        if(bool==false) {
            return false;
        }
    	else {
    	    return true;
    	}
    };
    document.addEventListener("MozMousePixelScroll",function(){
        if(bool==false){
            return false;
        }
        else {
            return true;
        }
    },false);
    document.onkeydown=function(e) {
    	if (e.keyCode>=33&&e.keyCode<=40){
            if (bool==false){
                return false;
            }
            else {
                return true;
            }
        }
    }
};
