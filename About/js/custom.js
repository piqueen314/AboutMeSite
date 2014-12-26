/**
 * Created by cece on 11/5/2014.
 */
$(document).ready(function(){
    // fun facts page
    $(function() {
        $( "#tabs" ).tabs();
    });

    $("#t-one").on("click",function(){
        $('img.fun-photo').attr("src","img/evilCece.jpg");

    });
    $("#t-two").on("click",function(){
        $('img.fun-photo').attr("src","img/knife.jpg");

    });
    $("#t-three").on("click",function(){
        $('img.fun-photo').attr("src","img/NasaCece.jpg");

    });
    $("#t-four").on("click",function(){
        $('img.fun-photo').attr("src","img/LaserJ.jpg");

    });
    $("#t-five").on("click",function(){
        $('img.fun-photo').attr("src","img/telescope.jpg");

    });

    //ice breakers page
    $(function() {
        $( "#accordion" ).accordion();
    });

    //ice breaker page email submit
    $(function() {
        $( "input[type=submit]" )
            .button()
            .click(function( event ) {
                event.preventDefault();
            });
    });

    //animation page
    $(function() {
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
            drop: function( event, ui ) {
                $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "p" )
                    .html( "Dropped!" );
            }
        });
    });

    //$('#mtl').click(function(){
   // $('#picture').attr('src', 'http://profile.ak.fbcdn.net/hprofile-ak-ash3/41811_170099283015889_1174445894_q.jpg');
//});

});
