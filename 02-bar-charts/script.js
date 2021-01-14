// 1. we define the chart options. 
const options =  {
    chart: {
        type:   'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'revenue',
            data:[120000, 75000, 80000, 45000, 33000, 55000]
        },
        {
            name: 'loss',
            data:[25000, 15000, 30000, 5000, 12000, 12500]
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

