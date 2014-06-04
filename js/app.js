$(document).ready(function(){
	var check = $("<div class=check></div>")
	var done = $("<div class=done></div>")
	var image = $("<div class=image></div>")
$( "input" ).keyup(function(event) {
    var value = $( this ).val();
    if (event.keyCode == 13 && value.length > 0) {
    		$( "ul" ).prepend("<li></li>");
    		$("li:first-child").text(value).show();
    		$("li").append(check);
    		$("li").append(image);
    		$("li").show();
    		$(".new").hide();
    		$("input").val('');
    	};
  })
	$(check).mouseup(function(){
		$("li").append(done);
		$(this).remove();
	})
});
