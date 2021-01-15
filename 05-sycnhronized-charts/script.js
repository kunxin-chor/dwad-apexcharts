const campaigns = [3, 5, 1, 8, 4, 10];
const reach = [5000, 17000, 2400, 25000, 14000, 55000];
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Create the line chart
const campaignChartOptions = {
  chart: {
    id: "campaign",
    type: "line",
    height: "100%",
    width: "100%",
    group: "campaign-charts"
  },
  // each series represents one set of data
  series: [
    {
      name: "campaigns",
      data: campaigns
    }
  ],
  // what is are the labels along the x-axis (horizontal line)
  xaxis: {
    categories: categories
  },
  yaxis: {
    labels: {
      minWidth: 40
    }
  }
};

// create the chart
const campaignChart = new ApexCharts(
  document.querySelector("#campaignChart"),
  campaignChartOptions
);

// render the chart
campaignChart.render();

const reachChartOptions = {
  chart: {
    id: "reach",
    type: "line",
    height: "100%",
    group: "campaign-charts"
  },
  // each series represents one set of data
  series: [
    {
      name: "reach",
      data: reach
    }
  ],
  // what is are the labels along the x-axis (horizontal line)
  xaxis: {
    categories: categories
  },
  yaxis: {
    labels: {
      minWidth: 40
    }
  }
};

// create the chart
const reachChart = new ApexCharts(
  document.querySelector("#reachChart"),
  reachChartOptions
);

// render the bar chart
reachChart.render();
