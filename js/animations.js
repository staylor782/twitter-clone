$(document).ready(function() {
    $('.tweet-compose').on('click', function() {
        $(this).css('height', '5em');
        $('#tweet-controls').show();
    });
    $('textarea.tweet-compose').keyup(function() {
        var charCount = 140;
        var twLength = $('textarea.tweet-compose').val().length;
        var counter = charCount - twLength;
        $('#char-count').text(counter);
        
        function checkCount(num) {
            if(num >= 0) {
                if(num < 140 && num > 129) {
                    $('#char-count').css('color', 'red');
                }
                else {
                    $('#char-count').css('color', '#999');
                }
                $('#tweet-submit').show();
            }
            else if(num < 0) {
                $('#tweet-submit').hide();
            }
        }
        
        checkCount(counter);
    });
    
});