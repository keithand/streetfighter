$(document).ready(function() {

//**************FUNCTIONS*****************

function playCool () {
    if (event.which == 88) {
    playSexy ();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();   
    }
}

function playCoolFinish () {
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
}

function playReady () {
   $('.ryu-still').hide();
   $('.ryu-ready').show();
}

function playStill () {
  $('.ryu-ready').hide();
  $('.ryu-still').show();
}

function playThrowing () {
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left' : '300px'}, 
    600, 
    function(){
    $(this).hide();
    $(this).css({'left': '-212px'});
    });
}

function playThrowingFinish () {
      console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();  
}

function directions () {
    $('#directions').show().delay(3000).fadeOut();

}

// *******************MAIN EVENTS******************
        $('.ryu').mouseenter(function(){
            playReady ();
        })        
        
        .mouseleave(function(){
            playStill ();
        })
        
        .mousedown(function(){
                // play hadouken sound
                playHadouken();
                // show hadouken and animate it to the right
                playThrowing ();
        })

        .mouseup(function(){
            playThrowingFinish ();
        });

        $(document).keydown(function(event) {
            playCool ();
        });

        $.when(playCool).done(function(){
            playCoolFinish ();
        });

        directions ();

});

// ********AUDIO FUNCTIONS*******************

function playHadouken () {
  $('.hadouken-sound')[0].volume = 0.5;
  $('.hadouken-sound')[0].load();
  $('.hadouken-sound')[0].play();
}

function playSexy () {
  $('.sexy')[0].volume = 0.5;
  $('.sexy')[0].load();
  $('.sexy')[0].play();
}




