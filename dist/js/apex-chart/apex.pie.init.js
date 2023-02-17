$(function () {
  // Simple Pie Chart -------> PIE CHART
  var options_simple = {
    series: [44, 55, 13, 43, 22],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      width: 380,
      type: "pie",
    },
    colors: ["#615dff", "#3dd9eb", "#ffae1f", "#fa896b", "#39b69a"],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    }, ],
    legend: {
      labels: {
        colors: ["#a1aab2"],
      },
    },
  };

  var chart_pie_simple = new ApexCharts(
    document.querySelector("#chart-pie-simple"),
    options_simple
  );
  chart_pie_simple.render();

  // Donut Pie Chart -------> PIE CHART
  var options_donut = {
    series: [44, 55, 41, 17, 15],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      type: "donut",
      width: 385,
    },
    colors: ["#615dff", "#3dd9eb", "#ffae1f", "#fa896b", "#39b69a"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    }, ],
    legend: {
      labels: {
        colors: ["#a1aab2"],
      },
    },
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#chart-pie-donut"),
    options_donut
  );
  chart_pie_donut.render();

  // Monochrome Pie Chart -------> PIE CHART
  var options_monochrome = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      width: "350",
      type: "pie",
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        color: ["#3dd9eb"],
        dataLabels: {
          offset: -5,
        },
      },
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    legend: {
      show: false,
    },
  };

  var chart_pie_monochrome = new ApexCharts(
    document.querySelector("#chart-pie-monochrome"),
    options_monochrome
  );
  chart_pie_monochrome.render();
});