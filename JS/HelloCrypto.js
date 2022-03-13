/*
    Last Updated March 13, 2022
    Copyright (C) 2022 Sam Pickell
    HelloCrypto Coding Challenge - Home page (JavaScript)
*/


function parseAndDisplayCrypto()
{
    var canvasDiv = document.getElementById('canvasDiv');
    canvasDiv.style.backgroundColor = 'white';

    Papa.parse(cryptoCSV.files[0], {
	complete: function(results) {
		console.log(results);
	   }
    });

    // Obtain data from csv

    // Use data obtained from CSV and display in a line chart
    var xValues = [50,60,70,80,90,100,110,120,130,140,150];
    var yValues = [7,8,8,9,9,9,10,11,14,14,15];

    new Chart("cryptoChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "white",
          borderColor: "black",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        backgroundColor: "white",
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
}
