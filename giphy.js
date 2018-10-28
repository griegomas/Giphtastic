
$(document).ready(function(){

	$("button").on("click", function(){
		var motorcycle = $(this).data("name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + motorcycle + "&api_key=TBBJCLdJR5MAGuen4WZh5v1tgShBlaum&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			console.log(response)
			var results = response.data;
			for(var i = 0; i < results.length; i++) {
				var motorcycleDiv = $("<div/>");
				var p = $("<p/>");
				p.text(results[i].rating);
				var motorcycleImage = $("<img/>");
				motorcycleImage.addClass("motorcycleImg")
				motorcycleImage.attr("src",results[i].images.fixed_height.url);
				motorcycleImage.attr("data-still", results[i].images.fixed_height_still.url)
				motorcycleImage.attr("data-animate", results[i].images.fixed_height.url)
				.attr("data-state","still");
				motorcycleDiv.append(p);
				motorcycleDiv.append(motorcycleImage);
				motorcycleDiv.prependTo($("#gifs"));
			}
			$(".motorcycleImg").on("click",function(){
				var state = $(this).attr("data-state");
				console.log(this);
				if(state === "still") {
					$(this).attr("src", $(this).data("animate"));
					$(this).attr("data-state","animate");
				} else {
					$(this).attr("src", $(this).data("still"));
					$(this).attr("data-state", "still");
				}
			});
		});
	});
var motorcycle = [""];

$("#theButton").on("click", function(){
	var motorcycleButton = $("#gif-input").val();
	var newButton = $("<button/>").addClass("motorcycle").attr("data-name",motorcycleButton).html(motorcycleButton).css();
	$("#motorcycleButtons").append(newButton);
	console.log("work");
	queryURL = "http://api.giphy.com/v1/gifs/search?q=" + motorcycle + "&api_key=TBBJCLdJR5MAGuen4WZh5v1tgShBlaum&limit=10";
	console.log(motorcycleButton);

	$.ajax({
	url:queryURL,
	method: "GET"
	}).done(function(response){
		var results = response.data;
		for (var i = 0; i < results.length; i++){
			var motorcycleDiv = $("<div/>");
			var p = $("<p/>");
			p.text(results[i].rating);
			var motorcycleImage = $("motorcycleImg")
			motorcycleImage.addClass("motorcycleImg")
			motorcycleImage.attr("src",results[i].images.fixed_height_still.url);
			motorcycleImage.attr("data-still",results[i].images.fixed_height_still.url);
			motorcycleImage.attr("data-animate",results[i].images.fixed_height.url);
			motorcycleImage.attr("data-state", "still");
			motorcycleDiv.append(p);
			motorcycleDiv.append(motorcycleImage);
			motorcycleDiv.prependTo($("#gifs"));
		}
		$(".motorcycleImg").on("click", function(){
			var state = $(this).attr("data-state");
			console.log(this);
			if(state === "still") {
				$(this).attr("src",$(this).data("animate"));
				$(this).attr("data-state", "animate");
			} else {
				$(this).attr("src", $(this).data("still"));
				$(this).attr("data-state", "still");
			}
		});
	});
	$("#gif-input").val();
    return false;
})})