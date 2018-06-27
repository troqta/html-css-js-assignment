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
    var recipeWidth = '20%';
    $('.recipe-btn').on('click', function () {
        var $this = $(this);
        var $recipe = $(this).parent().parent();
        console.log($recipe.css('width'));
        if ($this.html() === 'Show') {
            $this.html('Hide');
            
            $recipe.children('.recipe-text').fadeIn();
            // $recipe.css({
            //     'width':'60%'
            // });
            
            $recipe.animate({width:'60%'}, 300);
        } else {
            $this.html('Show');
            
            $recipe.children('.recipe-text').fadeOut('fast', function(){
                $recipe.animate({width: recipeWidth}, 300)
            });
          
            
        }
    });
});

