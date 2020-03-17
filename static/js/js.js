// var $j = jQuery.noConflict();

$.get("/api/globals", function(data) {
    toggleButtons(data.currentPlayer); 
    console.log(data);
})

$('button').click(function() {
    var id = $(this).attr('id'); 
    id = parseInt(id.substr(2)); 
    var url = '/api/next/' + id; 
    console.log(url); 
    $.get( url, function( data ) {
        console.log(data); 
        toggleButtons(data.currentPlayer); 
      });
      
})

function toggleButtons(currentPlayer) {
    if(currentPlayer == 0) {
        $('button').removeClass('btn-danger');
        $('button').addClass('btn-warning');
    } else {
        $('button').addClass('btn-danger');
        $('button').removeClass('btn-warning');
    }
}
