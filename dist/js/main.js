$(document).ready(function(){$(".mobile-wrap").on("click",function(){$(".line-burger").toggleClass("line-active"),$(".header__list").slideToggle()}),$(window).resize(function(){1350<$(window).width()&&($(".header__list").attr("style",""),$(".line-burger").removeClass("line-active"))})}),$(document).on("click",".header__link, .info__btn",function(){let e=$(this).attr("href");var i=e.indexOf("#");if(-1!==i)return e=e.substring(i),i=$(e).offset().top,$("html, body").animate({scrollTop:i},800),$(window).width()<768&&$(this).hasClass("header__link")&&($(".header__list").slideUp(),$(".line-burger").removeClass("line-active")),!1});
//# sourceMappingURL=main.js.map
