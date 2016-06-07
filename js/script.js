$("document").ready(function(){
	console.log("ready")
	var photoUrls = ["images/sample-2.jpeg", "images/sample-1.jpg"];
	var counter = 0
	// photoUrls.forEach(function(item, index){
		function runIt() {
		$("#home-slides").delay(2000).queue(function(nxt){
			$(this).css("background-image", "url("+photoUrls[counter]+")");
			counter++
			if (counter >= photoUrls.length){
				counter = 0
			}
			nxt();
			runIt();
		// })
	})
	}
	runIt();
})