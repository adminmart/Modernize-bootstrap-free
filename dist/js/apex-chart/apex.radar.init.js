$(function () {
  // Basic Radar Chart -------> RADAR CHART
  var options_basic = {
    series: [{
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    }, ],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#615dff"],
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_radar_basic = new ApexCharts(
    document.querySelector("#chart-radar-basic"),
    options_basic
  );
  chart_radar_basic.render();

  // Multiple Series Radar Chart -------> RADAR CHART
  var options_multiple = {
    series: [{
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Series 3",
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },

      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    colors: ["#615dff", "#3dd9eb", "#ffae1f"],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
    legend: {
      labels: {
        colors: ["#a1aab2"],
      },
    },
  };

  var chart_radar_multiple_series = new ApexCharts(
    document.querySelector("#chart-radar-multiple-series"),
    options_multiple
  );
  chart_radar_multiple_series.render();

  // Polygon-fill Radar Chart -------> RADAR CHART
  var options_polygon = {
    series: [{
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    }, ],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    colors: ["#615dff"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#615dff",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  };

  var chart_radar_polygon_fill = new ApexCharts(
    document.querySelector("#chart-radar-polygon-fill"),
    options_polygon
  );
  chart_radar_polygon_fill.render();
});