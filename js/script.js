$(function(){
      config('./assets/gallery', 3, 7000, 1600, 1);
      livebackground();
    })

    $(".fav").click(function() {
        $(this).find('img').toggle();
    });