$(function () {

  // =====================================
  // Earning chart 1  
  // =====================================
  var options = {
    chart: {
      id: "earning-chart-1",
      type: "area",
      height: 76,
      sparkline: {
        enabled: true,
      },
      group: "earning-chart-1",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#13DEB9",
    },
    series: [
      {
        name: 'products',
        color: "#13DEB9",
        data: [30, 50, 20, 40, 20, 58],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#13DEB9"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning-chart-1"), options).render();



  // =====================================
  // Revenue Updates
  // =====================================
  var options = {
    series: [
      {
        name: "Footware",
        data: [1.5, 2.7, 2.2, 3.6, 1.5],
      },
      {
        name: "Fashionware",
        data: [-2.8, -1.1, -2.5, -1.5, -1.2],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      fontFamily: "Plus Jakarta Sans,sans-serif",
      foreColor: "#adb0bb",
      height: 270,
      stacked: true,
      offsetX: -20
    },
    colors: ["#5D87FF", "#49BEFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "70%",
        columnWidth: "20%",
        borderRadius: [5],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: -4,
      max: 4,
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "Jan",
        "Fab",
        "Mar",
        "Apr",
        "May",
      ],
      show: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      }
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
  chart.render();




  // =====================================
  // Revenue Updates
  // =====================================
  var options = {
    color: "#adb5bd",
    series: [55, 55, 55],
    labels: ["Expance", "Revenue", "Profit"],
    chart: {
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        donut: {
          size: '88%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: '#7C8FAC',
              fontSize: '20px',
              fontWeight: "600",
              label: '$500,458',
            },
          },
        },
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#EAEFF4", "#49BEFF"],

    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#sales-overview"), options);
  chart.render();



  // =====================================
  // Projects
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
      },
    ],
    chart: {
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      height: 60,

      resize: true,
      barColor: "#fff",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#49BEFF"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "60%",
        barHeight: "20%",
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ["rgba(0,0,0,0.01)"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
      },
      x: {
        show: false,
      },
    },
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#projects"), options);
  chart_column_basic.render();


  // =====================================
  // monthly-earning
  // =====================================
  var options = {
    chart: {
      id: "monthly-earning",
      type: "area",
      height: 73,
      sparkline: {
        enabled: true,
      },
      group: "monthly-earning",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: 'monthly earnings',
        color: "#5D87FF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#monthly-earning"), options).render();


  // =====================================
  // weekly-stats
  // =====================================
  var options = {
    chart: {
      id: "weekly-stats",
      type: "area",
      height: 120,
      sparkline: {
        enabled: true,
      },
      group: "weekly-stats",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Weekly Stats",
        color: "#5D87FF",
        data: [5, 15, 5, 10, 5],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0,
        stops: [20, 180],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#weekly-stats"), options).render();



  // =====================================
  // Salary
  // =====================================
  var options = {
    series: [
      {
        name: "Yearly Sales",
        data: [20, 15, 30, 25, 10, 15],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      offsetX: -20,
      height: 250,
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#f2f6fad9", "#f2f6fad9", "#5D87FF", "#f2f6fad9", "#f2f6fad9", "#f2f6fad9"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "45%",
        distributed: true,
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [["Apr"], ["May"], ["June"], ["July"], ["Aug"], ["Sept"]],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#salary"), options);
  chart.render();



  // =====================================
  // table-chart
  // =====================================
  var options = {
    chart: {
      id: "table-chart",
      type: "area",
      width: 76,
      height: 18,
      sparkline: {
        enabled: true,
      },
      group: "table-chart",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        color: "#DFE5EF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  new ApexCharts(document.querySelector("#table-chart"), options).render();



  // =====================================
  // table-chart
  // =====================================
  var options = {
    chart: {
      id: "table-chart-1",
      type: "area",
      width: 76,
      height: 18,
      sparkline: {
        enabled: true,
      },
      group: "table-chart-1",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        color: "#5D87FF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#5D87FF"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  new ApexCharts(document.querySelector("#table-chart-1"), options).render();



  // =====================================
  // table-chart
  // =====================================
  var options = {
    chart: {
      id: "#table-chart-2",
      type: "area",
      width: 76,
      height: 18,
      sparkline: {
        enabled: true,
      },
      group: "#table-chart-2",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        color: "#DFE5EF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  new ApexCharts(document.querySelector("#table-chart-2"), options).render();




  // =====================================
  // table-chart
  // =====================================
  var options = {
    chart: {
      id: "table-chart-3",
      type: "area",
      width: 76,
      height: 18,
      sparkline: {
        enabled: true,
      },
      group: "table-chart-3",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        color: "#5D87FF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  new ApexCharts(document.querySelector("#table-chart-3"), options).render();


});
