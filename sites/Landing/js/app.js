
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




// slider-composition
var deviceWidth = $(document).width();

activeOnTap(768, '.burger__compos')




//vertical-accordeon

var accordeonItem = 'team__person';
var accordeonItemContent = 'person-desc';

$('.'+accordeonItem).click(function(event) {
    var targetItem = $(event.target).parents('.'+accordeonItem);
    if (!targetItem.hasClass(accordeonItem + '--active')) {
        $('.'+accordeonItem).removeClass(accordeonItem+'--active').children('.'+accordeonItemContent).slideUp(400);

        targetItem.addClass(accordeonItem + '--active').children('.'+accordeonItemContent).slideDown(400);

    } else {
        targetItem.removeClass(accordeonItem + '--active').children('.'+accordeonItemContent).slideUp(400);
    }
});


//menu





//функция при который на элемент навешивается класс .--active на мобильных по тапу, на компах по ковру
//передается (критичный размер экрана, название элемента без . или #' и '.' или '#' в зависимости от того класс или id)
function activeOnTap(critWidth, elem){
    if(deviceWidth<=critWidth){
        $(elem).on('click', function(){
            $(this).toggleClass(elem.slice(1,elem.length) + '--active');
        });
    }
    else{
        $(elem).hover(
        function(){
            $(this).addClass(elem.slice(1,elem.length) + '--active');
        },
        function(){
            $(this).removeClass(elem.slice(1,elem.length) + '--active');
        });
    }
}



//функция разрешения/запрета скролла//
var prevDef = function(event){
    event.preventDefault();
}
function isScroll(bool){
    document.onmousewheel=document.onwheel=function(){
return (!bool) ? false : true;    };
    if(bool==false) {
        document.addEventListener('touchmove', prevDef, false);
    }
    else {
        document.removeEventListener('touchmove', prevDef, false);
    }
    document.addEventListener("MozMousePixelScroll",function(){
        return (!bool) ? false : true;    },false);
    document.onkeydown=function(e) {
    	if (e.keyCode>=33&&e.keyCode<=40){
            return (!bool) ? false : true;
        }
    }
};
