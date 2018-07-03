$(document).ready(function () {

    var totalH = $('#stickyNav').offset().top;
    $(window).bind('scroll', function () {
        var vPos = $(window).scrollTop();

        if (totalH < vPos) {
            $('#stickyNav').css({
                'position': 'fixed',
                'top': 0,
                'bottom' : 'auto'
            })
        } else {
            $('#stickyNav').css({
                'position': 'absolute',
                'top': '',
                'bottom': 0
            })
        }
    });
    $('#recipe-container').on('click', '.recipe-btn', function () {
        $(this).parents('.recipe').toggleClass('recipe-open');
        $(this).parents('.recipe').toggleClass('zoom');

        $(this).parents('.recipe').find('.button').toggleClass('hidden');
    });
    var authorName;

    $('#enter-btn').on('click', function(){
        if($('#author-box').val()===''){
            authorName = 'Guest';
        }
        else{
        authorName = $('#author-box').val();
        }
        $('#header-welcome').html('Welcome, '+authorName+'!');
        $('#welcome-page').slideUp('fast', function(){
            $('body').css({'overflow' : 'auto'});
            if(authorName!= 'Guest'){
                $('#create-recipe-form').fadeIn('fast', function(){
                $('#guest-message').addClass('hidden');
                });
                
            }
            else{
                $('#guest-message').removeClass('hidden');
            }
            $('#author-box').val('');
        });
         
    });
    // $('#guest-enter-btn').on('click', function(){
    //     authorName = 'Guest';
    //     $('#header-welcome').html('Welcome, '+authorName+'!');
    //     $('#welcome-page').fadeOut('fast', function(){
    //         $('body').css({'overflow' : 'auto'});
    //     });   
    // });
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
     });

     $('#create-recipe-form').submit(function(){
        var recipe = $('<article />', {'class': 'recipe zoom'});
        var name = $('<h2 />').html($('#form-name').val());
        var imgSrc = $('<img />').attr('src', $('#form-img').val());
        var textDiv = $('<div />', {'class': 'recipe-text'});
        var text = $('<p />').html($('#form-text').val());
        textDiv.append(text);
        var buttonDiv = $('<div />');
        var author = $('<h3 />', {'class':'recipe-author'}).html('Author: '+authorName);
        var buttonShow = $('<a />', {'class':'button recipe-btn', 'href':'#!'}).html('Show');
        var buttonHide = $('<a />', {'class':'button recipe-btn hidden', 'href':'#!'}).html('Hide');
        buttonDiv.append(author);
        buttonDiv.append(buttonShow);
        buttonDiv.append(buttonHide);
        recipe.append(imgSrc);
        recipe.append(name);
        recipe.append(textDiv);
        recipe.append(buttonDiv);
 
        $(this).trigger('reset');
         $('#recipe-container').append(recipe);
         return false;

     });
     $('#logout').on('click', function(){
         authorName = 'Guest' ;
         $('#create-recipe-form').fadeOut('fast');
         $('#header-welcome').html('Welcome!');
         $('#welcome-page').fadeIn('fast');
         $('body').css({'overflow':'hidden'});
         $('#guest-message').removeClass('hidden');

     });
});

