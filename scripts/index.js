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
        
        if ($this.html() === 'Show') {
            $this.html('Hide');
            $(this).parent().children('.recipe-text').css({
                'display': 'inline-block'
            });;
        } else {
            $this.html('Show');
            
            $(this).parent().children('.recipe-text').css({
                'display': ''
            })
        }
    });
});

