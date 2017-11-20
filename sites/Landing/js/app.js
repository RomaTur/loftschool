
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

$(document).ready(function(){

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


activeOnTap(768, '.burger__compos')//slider-composition
activeOnTap(768, '.menu__food', '.food-close' ,true);//menu


$(window).on('resize',function(){
    deviceWidth = $(document).width();
    deviceHeight = $(document).innerHeight();
    console.log(deviceWidth);

    activeOnTap(768, '.menu__food', '.food-close' ,true);//menu

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
// $(function(){
//     $('.comments__list').on('click', function(event){
//
//         var comment = $(event.target);
//
//         var currentText = comment.next('.comment__text');
//         console.log(currentText);
//
//     });
// })

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
$(document).ready(function(){

    var mainContent = $('.maincontent');

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


//maps
ymaps.ready(initMap);


function initMap(){

    var myMap = new ymaps.Map("map", {
        center: [59.939095, 30.315868],
        zoom: 11
    },{
        searchControlProvider: 'yandex#search'
    });
    myMap.controls.remove('fullscreenControl');
    myMap.behaviors.disable('scrollZoom');

//59.889780, 30.311479 // московские ворота
//59.944392, 30.380479 // чернышевская
//59.916865, 30.492144 // проспект большевиков
//59.973531, 30.311213 // петроградская

    myMap.geoObjects
        .add(mapMarkerConstructor([59.889780, 30.311479],'м.Московские ворота'))
        .add(mapMarkerConstructor([59.944392, 30.380479],'м.Чернышевская'))
        .add(mapMarkerConstructor([59.916865, 30.492144],'м.Проспект Большевиков'))
        .add(mapMarkerConstructor([59.973531, 30.311213],'м.Петроградская'));





    function mapMarkerConstructor(xy,desc){

        var placeMark = new ymaps.Placemark(xy, {
            hintContent: 'MrBurger',
            balloonContent: desc || 'Какой-то адрес'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-23, -57],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>')
        });
        return placeMark;
    }
}


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
