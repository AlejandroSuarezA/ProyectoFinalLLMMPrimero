    /**
     * Created by jander on 26/05/17.
     */

    $(document).ready(function(){
        var firstScroll = false;
        var secondScroll = false;

        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                if (firstScroll == false) {
                    loadNews();
                    firstScroll = true;
                } else if (firstScroll == true && secondScroll == false) {
                    loadNews2();
                    secondScroll = true;
                }
            }

        });

    });


    function loadNews(){
        $.getJSON("../news/jsonNews1.json",function(json){
            $.each(json, function(index){
                $(".container").append("<div class='row'> <div class='col-md-4'><img class='img-responsive' src="
                    + json[index].image + "></div> <div class='col-md-8'><h3>"
                    + json[index].title + "</h3><p><span class='glyphicon glyphicon-time'> "
                    + json[index].date  + "</span></p><p>"
                    + json[index].desc  + "</p></div></div><hr>");
            });
        });
    }

    function loadNews2(){
        $.getJSON("../news/jsonNews2.json",function(json){
            $.each(json, function(index){
                $(".container").append("<div class='row'> <div class='col-md-4'><img class='img-responsive' src="
                    + json[index].image + "></div> <div class='col-md-8'><h3>"
                    + json[index].title + "</h3><p><span class='glyphicon glyphicon-time'> "
                    + json[index].date  + "</span></p><p>"
                    + json[index].desc  + "</p></div></div><hr>");
            });
        });
    }