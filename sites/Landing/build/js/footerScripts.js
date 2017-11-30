/*================================================================================
 * @name: bPopup - if you can't get it up, use bPopup
 * @author: (c)Bjoern Klinggaard (twitter@bklinggaard)
 * @demo: http://dinbror.dk/bpopup
 * @version: 0.11.0.min
 ================================================================================*/
 (function(c){c.fn.bPopup=function(A,E){function L(){a.contentContainer=c(a.contentContainer||b);switch(a.content){case "iframe":var d=c('<iframe class="b-iframe" '+a.iframeAttr+"></iframe>");d.appendTo(a.contentContainer);t=b.outerHeight(!0);u=b.outerWidth(!0);B();d.attr("src",a.loadUrl);l(a.loadCallback);break;case "image":B();c("<img />").load(function(){l(a.loadCallback);F(c(this))}).attr("src",a.loadUrl).hide().appendTo(a.contentContainer);break;default:B(),c('<div class="b-ajax-wrapper"></div>').load(a.loadUrl,a.loadData,function(d,b,e){l(a.loadCallback,b);F(c(this))}).hide().appendTo(a.contentContainer)}}function B(){a.modal&&c('<div class="b-modal '+e+'"></div>').css({backgroundColor:a.modalColor,position:"fixed",top:0,right:0,bottom:0,left:0,opacity:0,zIndex:a.zIndex+v}).appendTo(a.appendTo).fadeTo(a.speed,a.opacity);C();b.data("bPopup",a).data("id",e).css({left:"slideIn"==a.transition||"slideBack"==a.transition?"slideBack"==a.transition?f.scrollLeft()+w:-1*(x+u):m(!(!a.follow[0]&&n||g)),position:a.positionStyle||"absolute",top:"slideDown"==a.transition||"slideUp"==a.transition?"slideUp"==a.transition?f.scrollTop()+y:z+-1*t:p(!(!a.follow[1]&&q||g)),"z-index":a.zIndex+v+1}).each(function(){a.appending&&c(this).appendTo(a.appendTo)});G(!0)}function r(){a.modal&&c(".b-modal."+b.data("id")).fadeTo(a.speed,0,function(){c(this).remove()});a.scrollBar||c("html").css("overflow","auto");c(".b-modal."+e).unbind("click");f.unbind("keydown."+e);k.unbind("."+e).data("bPopup",0<k.data("bPopup")-1?k.data("bPopup")-1:null);b.undelegate(".bClose, ."+a.closeClass,"click."+e,r).data("bPopup",null);clearTimeout(H);G();return!1}function I(d){y=k.height();w=k.width();h=D();if(h.x||h.y)clearTimeout(J),J=setTimeout(function(){C();d=d||a.followSpeed;var e={};h.x&&(e.left=a.follow[0]?m(!0):"auto");h.y&&(e.top=a.follow[1]?p(!0):"auto");b.dequeue().each(function(){g?c(this).css({left:x,top:z}):c(this).animate(e,d,a.followEasing)})},50)}function F(d){var c=d.width(),e=d.height(),f={};a.contentContainer.css({height:e,width:c});e>=b.height()&&(f.height=b.height());c>=b.width()&&(f.width=b.width());t=b.outerHeight(!0);u=b.outerWidth(!0);C();a.contentContainer.css({height:"auto",width:"auto"});f.left=m(!(!a.follow[0]&&n||g));f.top=p(!(!a.follow[1]&&q||g));b.animate(f,250,function(){d.show();h=D()})}function M(){k.data("bPopup",v);b.delegate(".bClose, ."+a.closeClass,"click."+e,r);a.modalClose&&c(".b-modal."+e).css("cursor","pointer").bind("click",r);N||!a.follow[0]&&!a.follow[1]||k.bind("scroll."+e,function(){if(h.x||h.y){var d={};h.x&&(d.left=a.follow[0]?m(!g):"auto");h.y&&(d.top=a.follow[1]?p(!g):"auto");b.dequeue().animate(d,a.followSpeed,a.followEasing)}}).bind("resize."+e,function(){I()});a.escClose&&f.bind("keydown."+e,function(a){27==a.which&&r()})}function G(d){function c(e){b.css({display:"block",opacity:1}).animate(e,a.speed,a.easing,function(){K(d)})}switch(d?a.transition:a.transitionClose||a.transition){case "slideIn":c({left:d?m(!(!a.follow[0]&&n||g)):f.scrollLeft()-(u||b.outerWidth(!0))-200});break;case "slideBack":c({left:d?m(!(!a.follow[0]&&n||g)):f.scrollLeft()+w+200});break;case "slideDown":c({top:d?p(!(!a.follow[1]&&q||g)):f.scrollTop()-(t||b.outerHeight(!0))-200});break;case "slideUp":c({top:d?p(!(!a.follow[1]&&q||g)):f.scrollTop()+y+200});break;default:b.stop().fadeTo(a.speed,d?1:0,function(){K(d)})}}function K(d){d?(M(),l(E),a.autoClose&&(H=setTimeout(r,a.autoClose))):(b.hide(),l(a.onClose),a.loadUrl&&(a.contentContainer.empty(),b.css({height:"auto",width:"auto"})))}function m(a){return a?x+f.scrollLeft():x}function p(a){return a?z+f.scrollTop():z}function l(a,e){c.isFunction(a)&&a.call(b,e)}function C(){z=q?a.position[1]:Math.max(0,(y-b.outerHeight(!0))/2-a.amsl);x=n?a.position[0]:(w-b.outerWidth(!0))/2;h=D()}function D(){return{x:w>b.outerWidth(!0),y:y>b.outerHeight(!0)}}c.isFunction(A)&&(E=A,A=null);var a=c.extend({},c.fn.bPopup.defaults,A);a.scrollBar||c("html").css("overflow","hidden");var b=this,f=c(document),k=c(window),y=k.height(),w=k.width(),N=/OS 6(_\d)+/i.test(navigator.userAgent),v=0,e,h,q,n,g,z,x,t,u,J,H;b.close=function(){r()};b.reposition=function(a){I(a)};return b.each(function(){c(this).data("bPopup")||(l(a.onOpen),v=(k.data("bPopup")||0)+1,e="__b-popup"+v+"__",q="auto"!==a.position[1],n="auto"!==a.position[0],g="fixed"===a.positionStyle,t=b.outerHeight(!0),u=b.outerWidth(!0),a.loadUrl?L():B())})};c.fn.bPopup.defaults={amsl:50,appending:!0,appendTo:"body",autoClose:!1,closeClass:"b-close",content:"ajax",contentContainer:!1,easing:"swing",escClose:!0,follow:[!0,!0],followEasing:"swing",followSpeed:500,iframeAttr:'scrolling="no" frameborder="0"',loadCallback:!1,loadData:!1,loadUrl:!1,modal:!0,modalClose:!0,modalColor:"#000",onClose:!1,onOpen:!1,opacity:.7,position:["auto","auto"],positionStyle:"absolute",scrollBar:!0,speed:250,transition:"fadeIn",transitionClose:!1,zIndex:9997}})(jQuery);

"use strict";
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
var deviceHeight = $(document).outerHeight();//высота экрана


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

    var gotoButtonParent = ['.burgers__list', '.welcome-header', '.page__arrow-link'];
    for (var i = 0; i < gotoButtonParent.length; i++) {
        $(gotoButtonParent[i]).on('click', function(event){
            event.preventDefault();
            var currentTarget = $(event.target);
            var targetPage = currentTarget.attr('data-goto');
            if(targetPage){
            mainContent.moveTo(targetPage);
            }
        });
    }
});


//form


$(document).ready(function(){
    //clearform
    $('.form__clear-link').on('click', function(){
        $('#form__order')[0].reset();
    });

    //ajax

    var submitModal = $('.submit__modal');
    var submitArea = $('.submit');
    var submitForm = function(event){

        event.preventDefault();

        var checkForm = true;
        if( $('#form__name')[0].value=='' ||
            $('#form__email')[0].value=='' ||
            $('#form__street')[0].value=='' ||
            $('#form__house')[0].value=='' ||
            $('#form__flat')[0].value=='')checkForm=false;

        fillInput(!checkForm);
        if(!checkForm){
            return
        }

        var form = $(event.target);
        var data = form.serialize(),
            url = form.attr('action');

        var request = $.ajax({
                        type: 'POST',
                        url: url,
                        data: data
                    });

        console.log(request);
        request.done(function(){
            $('.request-msg__text').html("Сообщение отправлено");
            submitModal.bPopup({
                closeClass:'request-msg__close',
                scrollBar:false,
                onClose: function(){
                    submitModal.appendTo(submitArea);
                }
            });
        });
        request.fail(function(jqXHR, textStatus){
            console.log("Request failed: " + textStatus);
            $('.request-msg__text').html("Произошла ошибка");
            submitModal.bPopup({
                closeClass:'request-msg__close',
                scrollBar:false,
                onClose: function(){
                    submitModal.appendTo(submitArea);
                }
            });
        });

    };

    $('.form__inner').on('submit', submitForm);




    function fillInput(checkForm){
        var color;
        if(checkForm){
            color = '#feeac8';
            $('.request-msg__text').html("Заполните обязательные поля");
            submitModal.bPopup({
                closeClass:'request-msg__close',
                scrollBar:false,
                onClose: function(){
                    submitModal.appendTo(submitArea);
                }
            });
        }
        else{
            color = '#ffffff';
        }
        $('#form__name').css('background',color);
        $('#form__email').css('background',color);
        $('#form__street').css('background',color);
        $('#form__flat').css('background',color);
        $('#form__house').css('background',color);


    }
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
