$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    document.getElementsByClassName('modal-menu')[0].classList.toggle('-open-modal-menu');
    $('.sub-list2').removeClass('-open-modal-menu-punkt');
    $('.sub-list1').removeClass('-open-modal-menu-punkt');
    $('.modal-menu').removeClass('-overflow-scroll');
});






$('.first-sub-list-opener').on('click', function() {
    $('.sub-list2').removeClass('-open-modal-menu-punkt');
    $('.sub-list1').toggleClass('-open-modal-menu-punkt');
    $('.modal-menu').removeClass('-overflow-scroll');
});
$('.second-sub-list-opener').on('click', function() {
    $('.sub-list1').removeClass('-open-modal-menu-punkt');
    $('.sub-list2').toggleClass('-open-modal-menu-punkt');
    $('.modal-menu').toggleClass('-overflow-scroll');
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
function onVideoClick1(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MGJojDqbrMc?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick2(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-dC7FXhO5s4?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick3(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/eJ4d2NKrk0o?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick4(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/j3RFQOSuxNE?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick5(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SwaHcIMdWHg?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick6(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/1-GlsQUj-J0?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick7(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZCdw1WeZ0iw?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}
function onVideoClick8(theLink) {
    document.getElementById("video_pop").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4F1Ld4Y1lRU?autoplay=1   \" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    document.getElementById("video_pop").style.display="flex";
}

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = "";
}

















function emptyarrow() {
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-about')[0].offsetTop + 350) {
        document.getElementsByClassName('arrowTopDiv')[0].innerHTML = '<img style="cursor: pointer;" class="arrowTopScroll animated rollOut" src="../assets/images/arrowTop.svg">';
    }
    if (document.documentElement.scrollTop < document.getElementsByClassName('section-about')[0].offsetTop + 350) {
        document.getElementsByClassName('arrowTopDiv')[0].innerHTML ='';
    }
}
$('.arrowTopDiv').on('click', function() {
    document.documentElement.scrollTop = 0;
});


$('.next').on('click', function() {
    $('.mobile-background').removeClass('slideInLeft')
    $('.mobile-background').addClass('slideInRight')
});
$('.prev').on('click', function() {
    $('.mobile-background').removeClass('slideInRight')
    $('.mobile-background').addClass('slideInLeft')
});





/*function empty() {
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-about')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ОПИСАНИЕ</p>';
    }
    if (document.documentElement.scrollTop < document.getElementsByClassName('section-about')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p></p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-industry')[0].offsetTop - 120) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ИНДУСТРИИ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-intagration')[0].offsetTop - 85) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ИНТЕГРАЦИЯ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-possibilities')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ВОЗМОЖНОСТИ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-portfolio')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ПОРТФОЛИО</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-contacts')[0].offsetTop - 110) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>КОНТАКТЫ</p>';
    }

}*/


