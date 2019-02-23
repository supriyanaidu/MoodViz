var moodData= [];
var moodData1 = [10,40,80,47,45,78,34];

function loadData(){
	// var form = document.getElementById("frmTest");
	//
  //     // Now, set up a submit event handler for the form
  //     form.addEventListener("submit", function(){
	//
  //       // Only when the form has been submitted do you want the textbox value
  //       var inputTest = document.getElementById('userInput').value;
  //       localStorage.setItem( 'objectToPass', inputTest );
	//
  //       window.location = "NEW URL";
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
}
function displayLineChart(){
	// loadData();
	var lineContext = document.getElementById("lineChart").getContext("2d");
	var data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			fillColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			data: moodData1,
			}
		]
	};
	var options = {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		tooltips: {
			mode: "label"
		}
	};
	var lineChart = new Chart(lineContext).Line(data,options);

	// var lineChart = new Chart(lineContext, {
	// 	type: 'line',
	// 	data: {
	// 	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	// 	datasets: [
	// 	{
	// 		fillColor: "rgba(75,192,192,0.2)",
	// 		borderColor: "rgba(75,192,192,1)",
	// 		pointBackgroundColor: "#fff",
	// 		pointRadius: 5,
	// 		data: moodData1,
	// 		}
	// 	]
	// 	},
	// 	options: {
	// 		scales: {
	// 			yAxes: [{
	// 				ticks: {
	// 					beginAtZero:true
	// 				}
	// 			}]
	// 		},
	// 		tooltips: {
	// 			mode: "label"
	// 		}
	// 	}
	// });
}
