$(document).ready(function(){
    $('.grouping-content').hide();
    $('#grouping-button1').on('click', () => {
        $('#grouping-content-1').toggle();
    });
    $('#grouping-button2').on('click', () => {
        $('#grouping-content-2').toggle();
    });
    $('#grouping-button3').on('click', () => {
        $('#grouping-content-3').toggle();
    });
})
  
  