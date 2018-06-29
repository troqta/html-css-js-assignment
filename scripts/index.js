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
    var showRecipe = function($recipe){
        $recipe.children('.recipe-text').fadeIn();
        $recipe.animate({width:showRecipeWidth}, 300);
    }
    var hideRecipe = function($recipe){
        $recipe.children('.recipe-text').fadeOut('fast', function(){
            $recipe.animate({width: recipeWidth}, 300)
        });
    }
    var recipeWidth = '20%';
    var showRecipeWidth = '60%';
    $('#recipe-container').on('click', '.recipe-btn', function () {
        var $this = $(this);
        var $recipe = $(this).parent().parent();
        if ($this.html() === 'Show') {
            $this.html('Hide');
            showRecipe($recipe);
            // $recipe.children('.recipe-text').fadeIn();
            // $recipe.animate({width:showRecipeWidth}, 300);
        } else {
            $this.html('Show');
            hideRecipe($recipe);
            // $recipe.children('.recipe-text').fadeOut('fast', function(){
            //     $recipe.animate({width: recipeWidth}, 300)
            // });  
        }
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

     });
     $('#logout').on('click', function(){
         authorName = 'Guest' ;
         $('#create-recipe-form').fadeOut('fast');
         $('#header-welcome').html('Welcome!');
         $('#welcome-page').fadeIn('fast');
         $('body').css({'overflow':'hidden'});

     });
});

