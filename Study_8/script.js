let k = "Yej2n457IxDJUgaUbupR3Ed5N3Z8ZYgvcGGhn8lh";
let photosWithDates = [];
let imagesLoaded = new CustomEvent ("imagesLoaded");

document.addEventListener ("imagesLoaded", () => { showEvolution () });

function makeRequests () {
	
	let latitude = document.getElementById ("latitude").value;
	let longitude = document.getElementById ("longitude").value;
	let progressDOM = document.getElementById ("progress");

	let loadingPage = document.getElementsByClassName ("loading")[0];
	loadingPage.style.visibility = "visible"; 

	let dates = [
		'2013-06-01',
		'2013-12-01',
		'2014-01-01',
		'2014-06-01',
		'2014-12-01',
		'2015-01-01',
		'2015-06-01',
		'2015-12-01',
		'2016-01-01',
		'2016-06-01',
		'2016-12-01',
		'2017-01-01',
		'2017-06-01',
		'2017-12-01',
		'2018-01-01',
		'2018-06-01',
		'2018-12-01',
		'2019-01-01',
		'2019-06-01',
		'2019-12-01',
		'2020-01-01',
		'2020-06-01',
		'2020-12-01',
		'2021-01-01',
		'2021-06-01',
		'2021-12-01'
	];


	let progress = 0;
	let timeOut = 1000;
	dates.forEach ((date) => {
		let request = new XMLHttpRequest ();
		request.addEventListener ("load", () => {
			let responseData = JSON.parse (request.response);
			photosWithDates.push ({
				date: responseData.date.split ('T')[0],
				url: responseData.url
			});
			progress += 3.84;
			progressDOM.innerHTML = progress.toFixed (2);
		});
		request.open ("GET", `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&dim=0.1&date=${date}&api_key=${k}`);
		setTimeout ( () => request.send (), timeOut);
		timeOut += 1000;
	});

	setTimeout ( () => document.dispatchEvent (imagesLoaded), timeOut);
}

function showEvolution () {
	let image = document.getElementById ("result");
	let date = document.getElementById ("date");
	console.log ("Images loaded!");

	let loadingPage = document.getElementsByClassName ("loading")[0];
	loadingPage.style.visibility = "hidden"; 

	let timeOut = 10000;
	photosWithDates.forEach ((item) => {
		setTimeout (() => { date.innerHTML = item.date }, timeOut);
		setTimeout (() => { image.src = item.url }, timeOut);
		timeOut += 10000;
	});

	let replayButton = document.getElementById ("replay");
	replayButton.disabled = false;
}
