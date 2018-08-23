/**
 * Created by Yang on 2018/2/3.
 */
$(function () {
    //左边附加导航条
    $(window).scroll(function () {
        var affix_item = $('.affix-item');
        var h_todayAd = $('#id_todayAd').offset().top;
        var h_findFood = $('#id_findFood').offset().top;
        var h_snacks = $('#id_snacks').offset().top;
        var h_biscuit = $('#id_biscuit').offset().top;
        var h_drink = $('#id_drink').offset().top;
        var h_wine = $('#id_wine').offset().top;
        var h_fruit = $('#id_fruit').offset().top;
        var h_favorite = $('#id_favorite').offset().top;
        var a_todayAd = $('#aid_todayAd');
        var a_findFood = $('#aid_findFood');
        var a_snacks = $('#aid_snacks');
        var a_biscuit = $('#aid_biscuit');
        var a_drink = $('#aid_drink');
        var a_wine = $('#aid_wine');
        var a_fruit = $('#aid_fruit');
        var a_favorite = $('#aid_favorite');
        var temp;
        var scrollTop = $(this).scrollTop(); //当前滚动条滚动的距离
        if(scrollTop < $(this).height()){
            $('.affix-left').hide();


        }else if(scrollTop > h_todayAd && scrollTop < h_findFood){
            temp = a_todayAd;
            affix(temp)

        }else if(scrollTop > h_findFood && scrollTop < h_snacks){
            temp = a_findFood;
            affix(temp);
        }else if(scrollTop > h_snacks && scrollTop < h_biscuit){
            temp = a_snacks;
            affix(temp);
        }else if(scrollTop > h_biscuit && scrollTop < h_drink){
            temp = a_biscuit;
            affix(temp);
        }else if(scrollTop > h_drink && scrollTop < h_wine){
            temp = a_drink;
            affix(temp);
        }else if(scrollTop > h_wine && scrollTop < h_fruit){
            temp = a_wine;
            affix(temp);
        }else if(scrollTop > h_fruit && scrollTop < h_favorite){
            temp = a_fruit;
            affix(temp);
        }else if(scrollTop > h_favorite){
            temp = a_favorite;
            affix(temp);
        }
    });

    $('.affix-item').mouseenter(function () {
        $(this).css({'background':'#fa401b'});
        $(this).find('.affix-show').hide();
        $(this).find('.affix-hide').show();
    });

    $('.affix-item').mouseleave(function () {
        $(this).css({'background':'#ff6440'});
        $(this).find('.affix-show').show();
        $(this).find('.affix-hide').hide();
    });

    $('.affix-item').click(function () {
        var temp = $(this);
        affix(temp);
    });

    //美食猎奇蒙版
    $('.findFood-item').mouseenter(function () {
        $(this).find('.unvisibleCaption').fadeIn(200);
        $(this).find('.visibleCaption').fadeOut(200);
    });

    $('.findFood-item').mouseleave(function () {
        $(this).find('.unvisibleCaption').fadeOut(200);
        $(this).find('.visibleCaption').fadeIn(200);
    });


//        幻灯片左部nav
    $('.mycarousel-left-item').mouseenter(function () {
        $(this).css({'background':'#ff341d'});
        $(this).find('.mycarousel-left-extend').css({'z-index':999}).show();
        $(this).find('.arrow-right').hide();

    });

    $('.mycarousel-left-item').mouseleave(function () {
        $(this).css({'background':'#ff6440'});
        $(this).find('.mycarousel-left-extend').hide();
        $(this).find('.arrow-right').show();

    });

    //顶部nav
    $('.myTaobao').mouseenter(function () {
        $(this).css({'background-color': '#fff'});
        $(this).find('.myTaobao_down').show();
    });

    $('.myTaobao').mouseleave(function () {
        $(this).css({'background-color':'#f5f5f5'});
        $(this).find('.myTaobao_down').hide();
    });

    $('.shop-cart').mouseenter(function () {
        $(this).css({'background-color': '#fff'});
        $(this).find('.shop-cart-down').show();
    });

    $('.shop-cart').mouseleave(function () {
        $(this).css({'background-color': '#f5f5f5'});
        $(this).find('.shop-cart-down').hide();
    });

    $('.collection').mouseenter(function () {
        $(this).css({'background-color': '#fff'});
        $(this).find('.collection-down').show();
    });

    $('.collection').mouseleave(function () {
        $(this).css({'background-color': '#f5f5f5'});
        $(this).find('.collection-down').hide();
    });

    $('.saler-center').mouseenter(function () {
        $(this).css({'background-color': '#fff'});
        $(this).find('.saler-center-down').show();
    });

    $('.saler-center').mouseleave(function () {
        $(this).css({'background-color': '#f5f5f5'});
        $(this).find('.saler-center-down').hide();
    });

    $('.human-service').mouseenter(function () {
        $(this).css({'background-color': '#fff'});
        $(this).find('.human-service-down').show();
    });

    $('.human-service').mouseleave(function () {
        $(this).css({'background-color': '#f5f5f5'});
        $(this).find('.human-service-down').hide();
    });

    $('.web-nav').mouseenter(function () {
        $(this).css({'background-color': '#fff'});
        $(this).find('.web-nav-down').css({'z-index':999}).show();
    });

    $('.web-nav').mouseleave(function () {
        $(this).css({'background-color': '#f5f5f5'});
        $(this).find('.web-nav-down').hide();
    });
});

function affix(temp) {
    var affix_item = $('.affix-item');
    $('.affix-left').show();
    temp.css({'background':'#fa401b'});
    temp.find('.affix-show').hide();
    temp.find('.affix-hide').show();
    affix_item.not(temp).css({'background':'#ff6440'});
    affix_item.not(temp).find('.affix-show').show();
    affix_item.not(temp).find('.affix-hide').hide();
}