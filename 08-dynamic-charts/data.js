const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

async function loadData() {
  const response = await axios.get(
    "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json"
  );
  return response.data;
}

function transformData(data, year, country) {
  // step 1: convert the completed_at property from string to Date data type
  let transformed = data.map(function(datnum) {
    return {
      ...datnum,
      completed_at: new Date(datnum.completed_at)
    };
  });
  // step 2: filter and keep those records that matches the year and country
  let filtered = transformed.filter(function(datnum) {
    return (
      datnum.completed_at.getFullYear() == year &&
      (datnum.customer.country.toLowerCase().includes(country.toLowerCase()) ||
        country == "")
    );
  });
  // step 3: extract out only the amount and the month
  let earnings = filtered.map(function(datnum) {
    return {
      amount: parseInt(datnum.payment.amount),
      month: datnum.completed_at.getMonth()
    };
  });

  // step 4: group by months
  let initialStorage=[];
  for (let i=0; i < 12; i++) {
    initialStorage[i] = [];
  }
  let groups = groupBy(earnings, "month", initialStorage);

  // step 5: convert into series
  let series = [];
  for (let month in groups) {
    let group = groups[month];
    series.push({
      x: monthNames[month],
      y: group.reduce((acc, datanum) => acc + datanum.amount, 0)
    });
  }
  return series;
}
