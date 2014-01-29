$(document).ready(function() {
        
        $('.ryu').mouseenter(function(){
                $('.ryu-still').hide();
                $('.ryu-ready').show();
        })        
        .mouseleave(function(){
                $('.ryu-ready').hide();
                $('.ryu-still').show();
        })
        .mousedown(function(){
                // play hadouken sound
                playHadouken();
                // show hadouken and animate it to the right
                $('.ryu-ready').hide();
                $('.ryu-throwing').show();
                $('.hadouken').finish().show()
                .animate(
                        {'left' : '300px'}, 
                        600, 
                        function(){
                        $(this).hide();
                        $(this).css({'left': '-212px'});
                }
                );
        })
        .mouseup(function(){
                console.log('mouseup');
                $('.ryu-throwing').hide();
                $('.ryu-ready').show();
        });
        $(document).keydown(function(event) {
                if (event.which == 88) {
                        playSexy ();
                   event.preventDefault();
                        $('.ryu-ready').hide();
                        $('.ryu-cool').show();
                }
        })
        .keyup(function(event) {
                $('.ryu-cool').hide();
                $('.ryu-ready').show();

        });

        $('#directions').show().delay(3000).fadeOut();
});

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


