$(function () {
  
  // =====================================
  // widgest-chart-1
  // =====================================
  var options = {
    chart: {
      id: "widgest-chart-1",
      type: "area",
      height: 90,
      sparkline: {
        enabled: true,
      },
      group: "widgest-chart-1",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: '',
        color: "#5D87FF",
        data: [0, 150, 110, 240, 200, 200, 300, 200],
      },
    ],
    stroke: {
      curve: "straight",
      width: 2,
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
  new ApexCharts(document.querySelector("#widgest-chart-1"), options).render();




  // =====================================
  // widgest-chart-2
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [20, 15, 30, 25, 10, 18, 20],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 80,
      type: "bar",
      sparkline: {
        enabled: true
      },
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#ebf8ff", "#ebf8ff", "#23caff", "#ebf8ff", "#ebf8ff", "#ebf8ff", "#ebf8ff"],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "48%",
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
      axisBorder: { 
        show: false,
      },
      labels: {
        show: false
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

  var chart = new ApexCharts(document.querySelector("#widgest-chart-2"), options);
  chart.render();



  // =====================================
  // widgest-chart-3
  // =====================================
  var options = {
    chart: {
      id: "widgest-chart-3",
      type: "area",
      height: 90,
      sparkline: {
        enabled: true,
      },
      group: "widgest-chart-3",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: '',
        color: "#5D87FF",
        data: [0, 3, 1, 2, 8, 1, 5, 1],
      },
    ],
    stroke: {
      curve: "straight",
      width: 2,
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
  new ApexCharts(document.querySelector("#widgest-chart-3"), options).render();



  // =====================================
  // widgest-chart-4
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 55,
      type: "bar",
      sparkline: {
        enabled: true
      },
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#23caff", "#23caff", "#23caff", "#23caff", "#23caff", "#23caff", "#23caff", "#23caff", "#23caff"],
    plotOptions: {
      bar: {
        borderRadius: 3,
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
      axisBorder: {
        show: false,
      },
      labels: {
        show: false
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

  var chart = new ApexCharts(document.querySelector("#widgest-chart-4"), options);
  chart.render();



  // =====================================
  // widgest-chart-5
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
      },
      {
        name: "",
        data: [-2.8, -1.1, -3.2, -1.5, -1.9, -2.8],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      },
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      height: 200,
      stacked: true,
    },
    colors: ["#615DFF", "#615DFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [5],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    stroke: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    
  };

  var chart = new ApexCharts(document.querySelector("#widgest-chart-5"), options);
  chart.render();




  // =====================================
  // widgest-chart-6
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
      },
      {
        name: "",
        data: [-2.8, -1.1, -3.2, -1.5, -1.9, -2.8],
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      },
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      height: 200,
      stacked: true,
    },
    colors: ["#44d2ff", "#44d2ff"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: [5],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    stroke: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    
  };

  var chart = new ApexCharts(document.querySelector("#widgest-chart-6"), options);
  chart.render();




  // =====================================
  // Current Year
  // =====================================
  var options = {
    color: "#adb5bd",
    series: [55, 55, 55],
    labels: ["Income", "Current", "Expance"],
    chart: {
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        donut: {
          size: '89%',
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
              color: '#5A6A85',
              fontSize: '20px',
              fontWeight: "600",
              label: '$98,260',
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    colors: ["#6B6CFF", "#EAEFF4", "#44d2ff"],

    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#current-year"), options);
  chart.render();




  // =====================================
  // Breakup
  // =====================================
  var options = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
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
    colors: ["#615DFF", "#EAEFF4", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), options);
  chart.render();



  // =====================================
  // monthly-earning
  // =====================================
  var options = {
    chart: {
      id: "monthly-earning",
      type: "area",
      height: 70,
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
  // Most Visited
  // =====================================
  var options = {
    series: [
      {
        name: "San Francisco",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Diego",
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    chart: {
      height: 265,
      type: 'bar',
      fontFamily: "Plus Jakarta Sans,sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
          show: false,
      },
      stacked: true,
    },

    colors: ["#615DFF", "#23CAFF"],

    plotOptions: {
      bar: {
          borderRadius: [6],
          horizontal: false,
          barHeight: '60%',
          columnWidth: '40%',
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
      }
    },
    stroke: {
      show: false
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
      tickAmount: 4,
    },

    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06'],
      axisTicks: {
          show: false
      }
    },

    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      x: {
          show: false
      }
    },

  };

  var chart = new ApexCharts(document.querySelector("#most-visited"), options);
  chart.render();




  // =====================================
  // Yearly Salary
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [20, 15, 30, 25, 10, 15],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 310,
      type: "bar",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#F2F3F9", "#F2F3F9", "#615DFF", "#F2F3F9", "#F2F3F9", "#F2F3F9"],
    plotOptions: {
      bar: {
        borderRadius: 3,
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

  var chart = new ApexCharts(document.querySelector("#yearly-salary"), options);
  chart.render();

  

  // =====================================
  // Impressions
  // =====================================
  var options = {
    series: [
      {
        name: "",
        data: [20, 15, 30, 25, 10],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 100,
      type: "bar",
      sparkline: {
        enabled: true
      },
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#ebf8ff", "#ebf8ff", "#23caff", "#ebf8ff", "#ebf8ff"],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "64%",
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
      axisBorder: { 
        show: false,
      },
      labels: {
        show: false
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

  var chart = new ApexCharts(document.querySelector("#impressions"), options);
  chart.render();



  // =====================================
  // Customers
  // =====================================
  var options = {
    chart: {
      id: "customers",
      type: "area",
      height: 80,
      sparkline: {
        enabled: true,
      },
      group: "customers",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: '',
        color: "#23caff",
        data: [30, 25, 35, 20, 30, 40],
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
  new ApexCharts(document.querySelector("#customers"), options).render();




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
      toolbar: {
        show: false,
      },
      height: 80,
      type: "bar",
      sparkline: {
        enabled: true
      },
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    colors: ["#6B6CFF", "#6B6CFF", "#6B6CFF", "#6B6CFF", "#6B6CFF", "#6B6CFF", "#6B6CFF", "#6B6CFF", "#6B6CFF"],
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        borderRadiusApplication: 'end',
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
      axisBorder: {
        show: false,
      },
      labels: {
        show: false
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

  var chart = new ApexCharts(document.querySelector("#projects"), options);
  chart.render();



  // =====================================
  // Revenue Updates
  // =====================================
  var options = {
    series: [
      {
        name: "Footware",
        data: [2.5, 2.7, 3.2, 2.6, 1.9],
      },
      {
        name: "Fashionware",
        data: [-2.8, -1.1, -3.0, -1.5, -1.9],
      },
    ],
    chart: {
      height: 320,
      type: 'bar',
      fontFamily: "Plus Jakarta Sans,sans-serif",
      toolbar: {
          show: false
      },
      offsetX: -20,
      stacked: true
    },
    colors: ["#615DFF", "#23CAFF"],
    plotOptions: {
      bar: {
          horizontal: false,
          barHeight: '60%',
          columnWidth: '20%',
          borderRadius: [5],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all'
      }
    },
    stroke: {
      show: false
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
      min: -5,
      max: 5,
      tickAmount: 4
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      axisTicks: {
          show: false
      }
    },
    tooltip: {
      theme: "dark",
    },

  };

  var chart = new ApexCharts(document.querySelector("#revenue-updates"), options);
  chart.render();




  // =====================================
  // Sales Overview
  // =====================================
  var options = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["Expance", "Revenue", "Profit"],
    chart: {
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        donut: {
          size: '89%',
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
              color: '#5A6A85',
              fontSize: '20px',
              fontWeight: "600",
              label: '$500,458',
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    colors: ["#49BEFF", "#EAEFF4", "#5D87FF"],

    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#sales-overview"), options);
  chart.render();




});