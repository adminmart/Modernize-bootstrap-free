$(function () {
  // Basic Line Chart -------> LINE CHART
  var options_line = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    }, ],
    chart: {
      height: 350,
      type: "line",
      fontFamily: '"Nunito Sans",sans-serif',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#615dff"],
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["rgba(0,0,0,0.2)", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      borderColor: "transparent",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_line_basic = new ApexCharts(
    document.querySelector("#chart-line-basic"),
    options_line
  );
  chart_line_basic.render();

  // Data Label Line Chart   -------> LINE CHART
  var options = {
    series: [{
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    chart: {
      fontFamily: '"Nunito Sans",sans-serif',
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#615dff", "#3dd9eb"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "transparent",
      row: {
        colors: ["rgba(0,0,0,0.2)", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      min: 5,
      max: 40,
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  var chart_line_data = new ApexCharts(
    document.querySelector("#chart-line-with-data-label"),
    options
  );
  chart_line_data.render();

  // Zoomable Line Chart -------> LINE CHART
  var options_zoomable = {
    series: [{
      name: "XYZ MOTORS",
      data: [{
          x: "02-10-2017 GMT",
          y: 34,
        },
        {
          x: "02-11-2017 GMT",
          y: 43,
        },
        {
          x: "02-12-2017 GMT",
          y: 31,
        },
        {
          x: "02-13-2017 GMT",
          y: 43,
        },
        {
          x: "02-14-2017 GMT",
          y: 33,
        },
        {
          x: "02-15-2017 GMT",
          y: 52,
        },
      ],
    }, ],
    chart: {
      fontFamily: '"Nunito Sans",sans-serif',
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "transparent",
    },
    colors: ["#615dff"],
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      theme: "dark",
    },
  };

  var chart_line_zoomable = new ApexCharts(
    document.querySelector("#chart-line-zoomable"),
    options_zoomable
  );
  chart_line_zoomable.render();

  // Gradient Line Chart -------> LINE CHART
  var options_gradient = {
    series: [{
      name: "Likes",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    }, ],
    chart: {
      fontFamily: '"Nunito Sans",sans-serif',
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    grid: {
      borderColor: "transparent",
    },
    colors: ["#39b69a"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#615dff"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: ["#615dff"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart_line_gradient = new ApexCharts(
    document.querySelector("#chart-line-gradient"),
    options_gradient
  );
  chart_line_gradient.render();

  var lastDate = 0;
  var data = [];
  var TICKINTERVAL = 86400000;
  let XAXISRANGE = 777600000;

  function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      data.push({
        x,
        y,
      });
      lastDate = baseval;
      baseval += TICKINTERVAL;
      i++;
    }
  }

  getDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
    min: 10,
    max: 90,
  });

  function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    lastDate = newDate;

    for (var i = 0; i < data.length - 10; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area
      // to prevent memory leaks
      data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
      data[i].y = 0;
    }

    data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
    });
  }

  function resetData() {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
    data = data.slice(data.length - 10, data.length);
  }

  // Realtime Line Chart -------> LINE CHART
  var options_realtime = {
    series: [{
      data: data.slice(),
    }, ],
    chart: {
      fontFamily: '"Nunito Sans",sans-serif',
      id: "realtime",
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },

      zoom: {
        enabled: false,
      },
    },
    grid: {
      borderColor: "transparent",
    },
    colors: ["#615dff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: XAXISRANGE,
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    yaxis: {
      max: 100,
      labels: {
        style: {
          colors: [
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
            "#a1aab2",
          ],
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  var chart_line_realtime = new ApexCharts(
    document.querySelector("#chart-line-real-time"),
    options_realtime
  );
  chart_line_realtime.render();

  window.setInterval(function () {
    getNewSeries(lastDate, {
      min: 10,
      max: 90,
    });

    chart_line_realtime.updateSeries([{
      data: data,
    }, ]);
  }, 1000);
});