$(function () {
  // Basic Radial Bar Chart -------> RADIAL CHART
  var options_basic = {
    series: [70],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radialBar",
    },
    colors: ["#615dff"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          value: {
            color: "#a1aab2",
            show: true,
          },
        },
      },
    },
    labels: ["Cricket"],
  };

  var chart_radial_basic = new ApexCharts(
    document.querySelector("#chart-radial-basic"),
    options_basic
  );
  chart_radial_basic.render();

  // Multiple Radial Bar Chart -------> RADIAL CHART
  var options_multiple = {
    series: [44, 55, 67, 83],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radialBar",
    },
    colors: ["#615dff", "#3dd9eb", "#ffae1f", "#fa896b"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            color: "#a1aab2",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  };

  var chart_radial_multiple = new ApexCharts(
    document.querySelector("#chart-radial-multiple"),
    options_multiple
  );
  chart_radial_multiple.render();

  // Custome circle Radial Bar Chart -------> RADIAL CHART
  var options_custom_circle = {
    series: [76, 67, 61, 90],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#615dff", "#3dd9eb", "#ffae1f", "#fa896b"],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 80,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    }, ],
  };

  var chart_radial_custom_circle = new ApexCharts(
    document.querySelector("#chart-radial-circle"),
    options_custom_circle
  );
  chart_radial_custom_circle.render();

  // Stroked Gauge Radial Bar Chart -------> RADIAL CHART
  var options_gradient = {
    series: [75],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#615dff",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#6610f2",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#615dff"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  };

  var chart_radial_gradient = new ApexCharts(
    document.querySelector("#chart-radial-gradient"),
    options_gradient
  );
  chart_radial_gradient.render();

  // Stroked Gauge Radial Bar Chart -------> RADIAL CHART
  var options_strocked = {
    series: [67],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    colors: ["#615dff"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: "#a1aab2",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Median Ratio"],
  };

  var chart_radial_strocked = new ApexCharts(
    document.querySelector("#chart-radial-stroked-gauge"),
    options_strocked
  );
  chart_radial_strocked.render();

  // Semi Circle Radial Bar Chart -------> RADIAL CHART
  var options_semi_circle = {
    series: [76],
    chart: {
      fontFamily: '"Nunito Sans", sans-serif',
      type: "radialBar",
      offsetY: -20,
      width: 400,
      height: 300,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#615dff",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
            color: "#a1aab2",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        color: "#6610f2",
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  var chart_radial_semi_circle = new ApexCharts(
    document.querySelector("#chart-radial-semi-circle"),
    options_semi_circle
  );
  chart_radial_semi_circle.render();
});