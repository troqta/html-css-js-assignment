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
    $('.recipe-btn').on('click', function () {
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
        console.log(authorName);
        $('#header-welcome').html('Welcome, '+authorName+'!');
        $('#welcome-page').fadeOut('fast', function(){
            $('body').css({'overflow' : 'auto'});
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
});

