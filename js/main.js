$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toogle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});