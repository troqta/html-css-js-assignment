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
        $(this).parents('.recipe').find('.button').toggleClass('hidden');
    });
    var authorName;

    $('#enter-btn').on('click', function(){
        if($('#author-box').val()===''){
            alert('Please enter a name or continue as a guest!');
        }
        else{
        authorName = $('#author-box').val();
        $('#header-welcome').html('Welcome, '+authorName+'!');
        $('#welcome-page').fadeOut('fast', function(){
            $('body').css({'overflow' : 'auto'});
            if(authorName!= 'Guest'){
                $('#create-recipe-form').fadeIn('fast');
            }
        });
         }
    });
    $('#guest-enter-btn').on('click', function(){
        authorName = 'Guest';
        $('#header-welcome').html('Welcome, '+authorName+'!');
        $('#welcome-page').fadeOut('fast', function(){
            $('body').css({'overflow' : 'auto'});
        });   
    });
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
     });

     $('#create-recipe-form').submit(function(){
        var recipe = $('<article />', {'class': 'recipe'});
        var name = $('<h2 />').html($('#form-name').val());
        var imgSrc = $('<img />', {'class': 'zoom'}).attr('src', $('#form-img').val());
        var text = $('<p />', {'class': 'recipe-text'}).html($('#form-text').val());
        var buttonDiv = $('<div />');
        var author = $('<h3 />', {'class':'recipe-author'}).html('Author: '+authorName);
        var button = $('<a />', {'class':'button recipe-btn', 'href':'#!'}).html('Show');
        buttonDiv.append(author);
        buttonDiv.append(button);
        recipe.append(imgSrc);
        recipe.append(name);
        recipe.append(text);
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

     });
});

