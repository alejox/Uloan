<script setup>
const options = {
  chart: {
    height: 428,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: "#ECECEE",
    strokeDashArray: 0,
    position: "back",
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 18,
      borderRadiusApplication: "end",
      columnWidth: "50%",
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: false,
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  fill: {
    colors: ["#39A2B0"],
  },
  xaxis: {
    categories: ["LU", "MA", "MI", "JU", "VI", "SA", "DO"],
    position: "bottom",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#39A2B0",
          colorTo: "#39A2B0",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
    },
  },
};

const series = [
  {
    name: "Option",
    data: [800, 600, 1200, 400, 600, 200, 1100],
  },
];
</script>

<template>
  <div>
    <apexchart
      type="bar"
      height="428"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>