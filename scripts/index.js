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
    $('.recipe-btn').on('click', function () {
        var $this = $(this);
        var $recipe = $(this).parent().parent();
        if ($this.html() === 'Show') {
            $this.html('Hide');
            $recipe.css({
                'width':'60%'
            });
            $recipe.children('.recipe-text').css({
                'display': 'inline-block'
            });;
        } else {
            $this.html('Show');
            $recipe.css({
                'width':''
            });
            $recipe.children('.recipe-text').css({
                'display': '', 
                
            })
        }
    });
});

