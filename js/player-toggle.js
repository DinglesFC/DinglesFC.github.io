//start
$(document).ready(function(){
  
    
  $("#filters li a").click(function(){
    $(".team").hide();
    var activediv = $(this).attr('data-category');
    $('.' + activediv).show();
  });
    
    
});
// end