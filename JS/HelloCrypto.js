/*
    Last Updated March 13, 2022
    Copyright (C) 2022 Sam Pickell
    HelloCrypto Coding Challenge - Home page (JavaScript)
*/

function parseCrypto(callBack)
{
    // Obtain data from csv
    Papa.parse(cryptoCSV.files[0], {
	complete: function(results) {
		callBack(results.data);
	   }
    });
}

function displayCrypto(csvData)
{
    // Set the line chart (div) background color
    var canvasDiv = document.getElementById('canvasDiv');
    canvasDiv.style.backgroundColor = 'white';

    // Use data obtained from CSV and display in a line chart
    const xDates = [];
    const yBTC = [];
    const yETH = [];
    const yLTC = [];
    const yBCH = [];

    // Populate datasets
    for (let i = 1; i < csvData.length - 1; i++)
    {
        xDates.push(csvData[i][0]);
        yBTC.push(csvData[i][1]);
        yETH.push(csvData[i][2]);
        yLTC.push(csvData[i][3]);
        yBCH.push(csvData[i][4]);
    }

    // Setup the Line chart
    var cryptoLineChart = new Chart("cryptoChart", {
      type: "line",
      data: {
        // Sets the dates on the x axis
        labels: xDates,
        datasets: [{
          // Sets the label used in the legend
          label: "BTC",
          fill: false,
          lineTension: 0,
          // Sets line color
          borderColor: "black",
          // Sets dataset
          data: yBTC
        },{
            label: "ETH",
            fill: false,
            lineTension: 0,
            borderColor: "red",
            data: yETH
        },{
            label: "LTC",
            fill: false,
            lineTension: 0,
            borderColor: "green",
            data: yLTC
        },{
            label: "BCH",
            fill: false,
            lineTension: 0,
            borderColor: "blue",
            data: yBCH
        }]
      },
      options: {
        // Scaling needed so that values are more visible
        // Assistance from stack overflow on converting scientific
        // notation to decimal:
        // https://stackoverflow.com/questions/40183188/chart-js-not-allowing-y-axis-steps-with-logarithmic-scale
        scales: {
            yAxes: [{
                type: "logarithmic",
                ticks: {
                    min: 0,
                    max: 14000,
                    // Converts from scientific notation to decimal
                    callback: function(value, index, values) {
                        return Number(value.toString());
                    }
                },
                // Sets the y axis labels
                afterBuildTicks: function(cryptoLineChart)
                {
                    cryptoLineChart.ticks = [];
                    cryptoLineChart.ticks.push(0);
                    cryptoLineChart.ticks.push(100);
                    cryptoLineChart.ticks.push(200);
                    cryptoLineChart.ticks.push(300);
                    cryptoLineChart.ticks.push(400);
                    cryptoLineChart.ticks.push(500);
                    cryptoLineChart.ticks.push(7000);
                    cryptoLineChart.ticks.push(9000);
                    cryptoLineChart.ticks.push(11000);
                    cryptoLineChart.ticks.push(13000);
                }
            }]
        },
        // Displays the legend, helping to identify each line
        legend: {display: true},
        backgroundColor: "white",
        }
    });
}
