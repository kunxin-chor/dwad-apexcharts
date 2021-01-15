

// 1. we define the chart options. 
const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'campagins',
            data:[3, 5, 1, 8, 4, 10]
        },
        {
            name: 'reach',
            data:[5000, 17000, 2400, 25000, 14000, 55000]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    
}

// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// render the chart
chart.render()

