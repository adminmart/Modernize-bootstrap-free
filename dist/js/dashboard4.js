$(function () {
  var investments = {
    series: [
        {
          name: "BTC",
          data: [3500, 1000, 4000, 2500, 3500, 1500, 2500, 1900, 3500, 2000, 4500],
        },
        {
          name: "ETH",
          data: [3000, 2100, 3500, 1000, 2000, 1000, 5000, 2000, 1100, 2500, 3300],
        },
      ],
      chart: {
        ffontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
        height: 325,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      grid: {
        borderColor: "transparent",
      },
      colors: ["#615dff", "#49BEFF"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#6993ff"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'category',
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov"
        ],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        }
      },
      tooltip: {
        theme: "dark",
      },
  };
  new ApexCharts(document.querySelector("#investments"), investments).render();
});
