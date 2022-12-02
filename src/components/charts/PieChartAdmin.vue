<script setup>
const options = {
  colors: ["#A8D6E5", "#D4EEF1", "#23563B", "#53B684", "#53B6B6"],
  chart: {
    type: "donut",
  },
  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    fontSize: "22px",
    fontFamily: "Nunito",
    fontWeight: 700,
    formatter: function (value) {
      return `<div>${value}</div> <p class='textChart'>Categoria</p>`;
    },
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {},
        legend: {
          position: "bottom",
          fontSize: "12px",
          fontFamily: "Nunito",
          fontWeight: 300,
        },
      },
    },
  ],
  labels: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%"],
};

const series = [40, 25, 15, 10, 10];
</script>

<template>
  <div id="chart">
    <apexchart
      type="donut"
      width="100%"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<style lang="scss">
#chart {
  .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .textChart{
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;

.apexcharts-legend-marker{

}
  }
}
</style>