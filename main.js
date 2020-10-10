
function stringToDom(string) {
	var parser = new DOMParser();
	var content = 'text/html';
	var DOM = parser.parseFromString(string, content);
	return DOM;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function init() {
	document.querySelector("#save_episode_button").click();
	
	let podcast_link = document.querySelector("a[href*='itunes']").href;
	let target = document.getElementById("playcontrols_container");
	let div = document.createElement("div");
	div.className = "nextbtn centertext marginbottom1 margintopneg1";
	div.innerHTML = '<h2><a href="#" class="ocbutton">next episode</a></h2>';
	
	fetch(podcast_link).then(function(response) {
		return response.text();
	}).then(function(e){
		window.response = stringToDom(e);
		
		search = window.location.href.split("/+")[1];
		
		let url = false;
		try{
			url = response.querySelectorAll("a[href*='"+search+"']")[0].previousElementSibling.href;
		} catch(e) {
			console.error("no next episode");
		}
		
		if ( url ) {
			
			div.addEventListener("click", function(){
				del = document.getElementById("delete_episode_button").href;
				fetch(del);
				
				setTimeout(function() {
					window.location.href = url;
				},1000);
			});
			
			insertAfter(div, target);
			
		}
		
	});
}

if ( location.href.includes("https://overcast.fm/+") ) { init(); };