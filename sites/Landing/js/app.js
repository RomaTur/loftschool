
////////////ФУНКЦИОНАЛ/////////

$(document).ready(function(event){
});



//headerMenuFullScreen
$(document).ready(function(){
    $('#welcomeNavOpen').on('click', function(){
        $('.nav-burger__list').addClass('nav-burger__list--active');
    });

    $('#welcomeNavClose').on('click', function(){
        $('.nav-burger__list').removeClass('nav-burger__list--active');
    });

});


//slider
// Initialize the slider

$(document).ready(function(){

    //
    // $('.burgers__list').bxSlider({
    //     pager:false,
    //     nextSelector:$('.burgers__slide--right'),
    //     prevSelector:$('.burgers__slide--left'),
    //     nextText:'',
    //     prevText:'',
    //     easing:'ease-in-out',
    //     responsive: false
    // });
    // $('.bx-viewport').css('height', '100%');

    var moveSlide = function(container,slideNum){
        var items = container.find('.burger'),
            activeSlide = items.filter('.burger--active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.burgers__list'),
            duration = 500;
        if(reqItem.length){
            list.animate({
                'left' : -reqIndex * 100 + '%'
            },
            duration,
            function(){
                activeSlide.removeClass('burger--active');
                reqItem.addClass('burger--active');
            });
        }
    };


    $('.burgers__slide').on('click', function(event){
        event.preventDefault();
        var $this = $(this),
            container = $this.closest('.burgers__container'),
            items = $('.burger', container),
            activeItem = items.filter('.burger--active'),
            exictedItem, edgeItem, reqItem;

        if ($this.hasClass('burgers__slide--right')) {
            exictedItem = activeItem.next();
            edgeItem = items.first();
        }
        else if ($this.hasClass('burgers__slide--left')) {
            exictedItem = activeItem.prev();
            edgeItem = items.last();
        }

        reqItem = exictedItem.length ? exictedItem.index() : edgeItem.index();

        moveSlide(container, reqItem);

    });
});



///////////////////////////////////////////////

var deviceWidth = $(document).width();//ширина экрана
deviceHeight = $(document).outerHeight();//высота экрана
// $('.section').css('height', deviceHeight + 'px');
// $('.maincontent').css('height', deviceHeight + 'px');

activeOnTap(768, '.burger__compos')//slider-composition
activeOnTap(768, '.menu__food', '.food-close' ,true);//menu


$(window).on('resize',function(){
    deviceWidth = $(document).width();
    deviceHeight = $(document).innerHeight();
    console.log(deviceWidth);

    activeOnTap(768, '.menu__food', '.food-close' ,true);//menu
    //
    // $('.burgers__list').bxSlider({
    //     pager:false,
    //     nextSelector:$('.burgers__slide--right'),
    //     prevSelector:$('.burgers__slide--left'),
    //     nextText:'',
    //     prevText:''
    // });

    // $('.section').css('height', deviceHeight + 'px');
});





//vertical-accordeon

var accordeonItem = 'team__person';
var accordeonItemContent = 'person-desc';

$('.'+accordeonItem).click(function(event) {
    var targetItem = $(event.target).parents('.'+accordeonItem);
    if (!targetItem.hasClass(accordeonItem + '--active')) {
        $('.'+accordeonItem).removeClass(accordeonItem+'--active').children('.'+accordeonItemContent).slideUp();

        targetItem.addClass(accordeonItem + '--active').children('.'+accordeonItemContent).slideDown();

    } else {
        targetItem.removeClass(accordeonItem + '--active').children('.'+accordeonItemContent).slideUp();
    }
});



//modal comments//

$(document).ready(function(){
    var commentMoreButton = $('.comment__text-more');

    commentMoreButton.bind('click', function(event){
        event.preventDefault();
        var currentComment = $(event.currentTarget).parents('.comment');
        var currentCommentModal = currentComment.children('.comment__modal');

        currentCommentModal.bPopup({
            closeClass:'comment-close',
            scrollBar:false,
            onClose: function(){
                currentCommentModal.appendTo(currentComment);
            }
        });
    });
});

//onepage-scroll
var mainContent = $('.maincontent');

// mainContent.onepage_scroll({
//     sectionContainer: ".section",
//     easing: "ease-in-out",
//     animationTime: 700,
//     loop: false,
//     afterMove: function() {
//         $('.nav-burger__list').removeClass('nav-burger__list--active');
//     }
// });
// mainContent.moveTo(1);
//
// gotoButtonParent = ['.burgers__list', '.welcome-header', '.page__arrow-link'];
// for (var i = 0; i < gotoButtonParent.length; i++) {
//     $(gotoButtonParent[i]).on('click', function(event){
//         event.preventDefault();
//         let currentTarget = $(event.target);
//         console.log(currentTarget);
//         let targetPage = currentTarget.attr('data-goto');
//         if(targetPage){
//         mainContent.moveTo(targetPage);
//         }
//     });
// }


//form


$(document).ready(function(){
    $('.form__clear-link').on('click', function(){
        $('#form__order')[0].reset();
    });

    var orderButton = $('.order-link');

    orderButton.bind('click', function(event){
        event.preventDefault();
        // var currentComment = $(event.currentTarget).parents('.comment');
        // var currentCommentModal = currentComment.children('.comment__modal');
        //
        // currentCommentModal.bPopup({
        //     closeClass:'comment-close',
        //     scrollBar:false,
        //     onClose: function(){
        //         currentCommentModal.appendTo(currentComment);
        //     }
        // });
    });
});






//функции полезные всякие//

//функция при который на элемент навешивается класс .--active на мобильных по тапу, на компах по ковру
//передается (критичный размер экрана:меньше которого начинает работать тап, название элемента:класс, название кнопки закрытия:класс если нужна, нужно ли закрывать остальные соседние элементы:тогда true) - всего 4 аргумента

function activeOnTap(critWidth, elemTarget, closeButton, multiply){
    critWidth = critWidth || 8000;
    closeButton = closeButton || '';
    multiply = multiply || false;
    if(deviceWidth<=critWidth){
        $(elemTarget).on('click', function(event){
            if(multiply){
                $(elemTarget).removeClass(elemTarget.slice(1,elemTarget.length) + '--active');
            }
            $(this).toggleClass(elemTarget.slice(1,elemTarget.length) + '--active');
            if($(event.target).hasClass(closeButton.slice(1,elemTarget.length))){
                $(elemTarget).removeClass(elemTarget.slice(1,elemTarget.length) + '--active');
            }
        });
    }
    else{
        $(elemTarget).hover(
        function(){
            $(this).addClass(elemTarget.slice(1,elemTarget.length) + '--active');
        },
        function(){
            $(this).removeClass(elemTarget.slice(1,elemTarget.length) + '--active');
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
    if(!bool) {
        document.addEventListener('touchmove', prevDef, false);
    }
    else {
        document.removeEventListener('touchmove', prevDef, false);
    }
    document.addEventListener("MozMousePixelScroll",function(){
        return (!bool) ? false : true;},false);
    document.onkeydown=function(e) {
    	if (e.keyCode>=33&&e.keyCode<=40){
            return (!bool) ? false : true;
        }
    }
};
