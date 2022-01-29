// Menus 
$('a[class^="nav"]').click(function () {
    var $class = $(this).parents('ul').attr('class');
    $('ul[class="' + $class + '"] a[class^="nav"]').removeClass('active');
    $(this).addClass('active');
});

// Menu portfolio 

$('#filters li').click(function () {
    $('#filters li').removeClass('active');
    $(this).addClass('active');
    var $target = $(this).attr('data-type');
    $('#gallery article').hide();
    if ($target == 'all'){
        $('#gallery article').show();
    } else {
        $('#gallery article[data-target~="' + $target + '"]').show();
    }
});