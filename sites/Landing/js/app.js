
////////////ФУНКЦИОНАЛ/////////

$(document).ready(function(event){
    console.log(window);
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


//comments
$(function(){
    $('.comments__list').on('click', function(event){

        var comment = $(event.target);

        var currentText = comment.next('.comment__text');
        console.log(currentText);
        //
        // $('.comment__text').animate({
        //     'opacity':'0'
        // },300);

        // currentText.animate({
        //     'opacity':'1'
        //
        // },300);

    });
})

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
//     sectionContainer: "section",
//     // easing: "ease-in-out",
//     responsiveFallback: 600,
//     // animationTime: 700,
//     // loop: false,
//     responsiveFallback: 600,
//     afterMove: function() {
//         $('.nav-burger__list').removeClass('nav-burger__list--active');
//     }
// });
// mainContent.moveTo(1);
//
gotoButtonParent = ['.burgers__list', '.welcome-header', '.page__arrow-link'];
for (var i = 0; i < gotoButtonParent.length; i++) {
    $(gotoButtonParent[i]).on('click', function(event){
        event.preventDefault();
        let currentTarget = $(event.target);
        let targetPage = currentTarget.attr('data-goto');
        if(targetPage){
        mainContent.moveTo(targetPage);
        }
    });
}

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





    // var smoveSlide = function(scontainer,sslideNum){
    //     var sitems = scontainer.find('.section'),
    //         sactiveSlide = sitems.filter('.section--active'),
    //         sreqItem = sitems.eq(sslideNum),
    //         sreqIndex = sreqItem.index(),
    //         slist = scontainer.find('.maincontent'),
    //         sduration = 500;
    //     if(sreqItem.length){
    //         slist.animate({
    //             'top' : -sreqIndex * 100 + '%'
    //         },
    //         sduration,
    //         function(){
    //             sactiveSlide.removeClass('section--active');
    //             sreqItem.addClass('section--active');
    //         });
    //     }
    // };


    // $('.maincontent').on('touchmove', function(event){
    //     event.preventDefault();
    //     var s$this = $(this),
    //         scontainer = s$this.closest('.wrapper'),
    //         sitems = $('.section', scontainer),
    //         sactiveItem = sitems.filter('.section--active'),
    //         sexictedItem, sedgeItem, sreqItem;
    //
    //     if (s$this.hasClass('maincontent')) {
    //         sexictedItem = sactiveItem.next();
    //         sedgeItem = sitems.first();
    //     }
    //     else if (s$this.hasClass('burgers__slide--left')) {
    //         sexictedItem = sactiveItem.prev();
    //         sedgeItem = sitems.last();
    //     }
    //
    //     sreqItem = sexictedItem.length ? sexictedItem.index() : sedgeItem.index();
    //
    //     smoveSlide(scontainer, sreqItem);
    //
    // });
});

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
