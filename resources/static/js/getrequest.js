$( document ).ready( () => {

	var url = window.location;

	// GET REQUEST
	$("#btnGetFiles").click( (event) => {
		event.preventDefault();
		ajaxGet();
	});

	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "/api/files/getall",
			success: (data) => {
				//clear old data
				$("#listFiles").html("");

				/*
					render list of files
				*/
				$("#listFiles").append('<ul>');
				$.each(data, (index, filename) => {

					$("#listFiles").append('<li><img src=' + url  + filename +'>' + filename + '/></li>');
				});
				$("#listFiles").append('</ul>');
			},
			error : (err) => {
				$("#listFiles").html(err.responseText);
			}
		});
	}
})
