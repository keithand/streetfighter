$(document).ready(function() {

var press = true;
var enter = false;
//**************FUNCTIONS*****************

function playCool () {
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').show();  
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
            enter = true;
        })        
        
        .mouseleave(function(){
            playStill ();
            enter = false;
        })
        
        .mousedown(function(){
                // play hadouken sound
                playHadouken();
                press = false;
                // show hadouken and animate it to the right
                playThrowing ();
        })

        .mouseup(function(){
            playThrowingFinish ();
            press = true;
        });

        $(document).keydown(function(event) {
            if (event.keyCode == 88 && press) {
              playCool();
            }
        }).on('keyup', function(event){
          if(event.keyCode == 88) {
            $('.ryu-cool').hide();
              if (enter){
                 $('.ryu-ready').show(); 
              }
              else {
                  $('.ryu-still').show();
              }
          }
        })

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


