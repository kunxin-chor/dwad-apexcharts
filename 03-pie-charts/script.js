// 1. we define the chart options. 
const options =  {
    chart: {
        type:   'pie',
        height:"100%"
    },
    // each series represents one set of data
    series:[21, 23, 22, 27, 45],

    // what is are the labels along the x-axis (horizontal line)
    labels:['English', 'Mathematics', 'Mother Tongue', 'Science', 'PE'],

    // primary colors
    colors:['#043380', '#9ae3aa', '#eba2bb', '#f4f7b7', '#dfa5fa']
    
}

// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// render the chart
chart.render()

