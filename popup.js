// Initialize butotn with users's prefered color
let closeButton = document.getElementById("button-x2");

let urlReport = document.getElementById("urlReport");

let imgButton = document.getElementById("imgReport");

// Load Current Tab URL
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  urlReport.value = tabs[0].url;
});

let submitButton = document.getElementById("reportBtn");

closeButton.addEventListener( 'click', function(){
	window.close();
})

imgButton.addEventListener( 'click', function(){
    alert("Capturing current Page!")
});

submitButton.addEventListener( 'click', function(event) {

  event.preventDefault(); 

  let noteReport = document.getElementById("noteReport").value;
  let urlReport = document.getElementById("urlReport").value
  let modeReport = document.getElementById("modeReport").value

  if(modeReport == "" || urlReport == "" || noteReport == ""){
     alert("Fill all the required fields!")
  }
  else{
	fetch('https://hookb.in/E7798pQjONhDEEaxNnkY', {
		method: 'post',
		headers: {
		  'Accept': 'application/json, text/plain, */*',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: urlReport, mode: modeReport, note: noteReport})
	  }).then(res => {
		  alert("Your report has been recorded!");
		  window.close();
		})
		.then(res => console.log(res));
  }
});

