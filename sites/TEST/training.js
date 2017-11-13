
var accordeonItem = '.team__person';  /////////////
var accordeonItemContent = '.person-desc';  /////////////

$(accordeonItem).click(function(event) {
    var targetItem = $(event.target).parents(accordeonItem);
    if (!targetItem.hasClass(accordeonItem + '--active')) {
        $(accordeonItem).removeClass(accordeonItem+'--active').children(accordeonItemContent).slideUp(400);

        targetItem.addClass(accordeonItem + '--active').children(accordeonItemContent).slideDown(400);

    } else {
        targetItem.removeClass(accordeonItem + '--active').children(accordeonItemContent).slideUp(400);
    }
});
