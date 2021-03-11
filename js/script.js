"use strict"


// MENU

$(".nuevo_proyecto").click(function(){
	$(".form_nuevo_proyecto").fadeIn("fast")
});


$(".btnClose").click(function(){
	$(".form_nuevo_proyecto").fadeOut("fast")	
})


$(".datepicker.fecha_inicio").datepicker({
	format: 'dd-mm-yyyy',
	todayHighlight:true
});



$(".datepicker.fecha_fin").datepicker({
	format: 'dd-mm-yyyy',
	todayHighlight:true
});
