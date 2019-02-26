var moodData= [];
var chartContext;

function loadData(){
	moodData=[];
	var value = document.getElementById('mondayMood').value;
	moodData.push(value);
	value = document.getElementById('tuesdayMood').value;
	moodData.push(value);
	value = document.getElementById('wednesdayMood').value;
	moodData.push(value);
	value = document.getElementById('thursdayMood').value;
	moodData.push(value);
	value = document.getElementById('fridayMood').value;
	moodData.push(value);
	value = document.getElementById('saturdayMood').value;
	moodData.push(value);
	value = document.getElementById('sundayMood').value;
	moodData.push(value);
	// var lineButtonClick = document.getElementById("submitLine");
	// lineButtonClick.onclick = displayLineChart();
	// if (lineButtonClick.addEventListener){
	// 	lineButtonClick.addEventListener("click", displayLineChart(), false);
	// 	console.log("line event");}
	// else if (lineButtonClick.attachEvent)
	// 	{console.log("line attach");
	// 	lineButtonClick.attachEvent('onclick', displayLineChart());}

	// var barButtonClick = document.getElementById("submitBar");
	// barButtonClick.onclick = displayBarChart();
	// if (barButtonClick.addEventListener)
	// 	{console.log("bar event");
	// 	barButtonClick.addEventListener("click", displayBarChart(), false);}
	// else if (barButtonClick.attachEvent)
	// 	{console.log("bar attach");
	// 	barButtonClick.attachEvent('onclick', displayBarChart());}
	var lineButtonClick = $("#submitLine");
	lineButtonClick.on("click", displayLineChart());
	var barButtonClick = $("#submitBarButton");
	barButtonClick.on("click", displayBarChart());
// 	var bns = $("#submitLine");
// bns.on("click", function() {
//     alert("you clicked line");
// });
// var bns = $("#submitBar");
// bns.on("click", function() {
// 	alert("you clicked bar");
// });
	// location = "visualize.html";
	return false;
}

function displayLineChart(){
	//loadData();
	console.log(JSON.stringify(moodData));
	var chartContext = document.getElementById("moodChartDiv").getContext("2d");
	var data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			fillColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			data: moodData,
			}
		]
	};
	var options = {
		scaleOverride : true,
		scaleStartValue : 0,
		scaleSteps : 10,
		scaleStepWidth : 1,
		tooltips: {
			mode: "label"
		}
	};
	if(window.moodChart != null){
    window.moodChart.destroy();
}

	window.moodChart = new Chart(chartContext).Line(data,options);
}

function displayBarChart(){
	//loadData();
	console.log(JSON.stringify(moodData));
	var chartContext = document.getElementById("moodChartDiv").getContext("2d");
	var data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			fillColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			data: moodData,
			borderWidth: 1,
			}
		]
	};
	var options = {
		scaleOverride : true,
		scaleStartValue : 0,
		scaleSteps : 10,
		scaleStepWidth : 1,
		tooltips: {
			mode: "label"
		}
	};
	if(window.moodChart != null){
    window.moodChart.destroy();
}

	window.moodChart = new Chart(chartContext).Bar(data,options);
}
