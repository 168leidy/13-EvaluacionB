%(document).ready(function(){
	$(".enlaces").click(function(){
		var valor=$(this).attr("data-nombre");
		console.log(valor);

	});
});