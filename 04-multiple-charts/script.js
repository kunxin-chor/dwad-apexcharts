const sightings = [10, 13, 15, 22, 34, 23, 55, 78, 44, 31];
const temperature = [33, 21, 22, 24, 25, 26, 26, 21, 31, 44];

// Create the line chart
const lineChartOptions =  {
    chart: {
        type: 'line',
        height:"100%",
        width:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'sightings',
            data: sightings
        },
        {
            name: 'temperature',
            data:temperature
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    },
    
}

// create the chart
const lineChart = new ApexCharts(document.querySelector('#lineChart'), lineChartOptions);

// render the chart
lineChart.render()

const barChartOptions =  {
    chart: {
        type: 'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'sightings',
            data: sightings
        },
        {
            name: 'temperature',
            data:temperature
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    },
    
}

// create the chart
const barChart = new ApexCharts(document.querySelector('#barChart'), barChartOptions);

// render the bar chart
barChart.render()