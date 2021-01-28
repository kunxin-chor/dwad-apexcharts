var groupBy = function(data, key) {
  // `data` is an array of objects, `key` is the key (or property accessor) to group by
  // reduce runs this anonymous function on each element of `data` (the `item` parameter,
  // returning the `storage` parameter at the end
  return data.reduce(function(storage, item) {
    // get the first instance of the key by which we're grouping
    var group = item[key];

    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[group] = storage[group] || [];

    // add this item to its group within `storage`
    storage[group].push(item);

    // return the updated storage to the reduce function, which will then loop through the next
    return storage;
  }, {}); // {} is the initial value of the storage
};

const options = {
  chart: {
    type: "line",
    height: "100%"
  },
  series: [],
  noData: {
    text: "Loading..."
  }

};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// create the chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// render the chart
chart.render();

window.addEventListener("DOMContentLoaded", async () => {
  let data = await loadData();
  let earnings = data.map(function(datnum) {
    return {
      amount: datnum.payment.amount,
      date: new Date(datnum.completed_at)
    };
  });
  let filtered = earnings.filter(function(datnum) {
    return datnum.date.getFullYear() == 2020;
  });
  let byMonth = filtered.map(function(datanum) {
    return {
      amount: parseInt(datanum.amount),
      month: datanum.date.getMonth()
    };
  });
  let groups = groupBy(byMonth, "month");
  let series = Object.values(groups).map(function(group, month) {
    return {
      x: monthNames[month],
      y: group.reduce((acc, datanum) => acc + datanum.amount, 0)
    };
  });
  console.log(series);

  chart.updateSeries([
    {
      name: "Sales",
      data: series
    }
  ]);
});
