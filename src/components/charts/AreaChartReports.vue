<template>
  <div>
    <apexchart
      type="area"
      height="350"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        chart: {
          height: 350,
          type: "area",
          fontFamily: "Jost",
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
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 7,
            columnWidth: "70%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        grid: {
          show: true,
          padding: {
            left: 0,
            right: 0,
          },
        },
        dataLabels: {
          formatter: function (val, opts) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: [
            "ENE",
            "FEB",
            "MAR",
            "ABR",
            "MAY",
            "JUN",
            "JUL",
            "AGT",
            "SEP",
            "OCT",
            "NOV",
            "DIC",
          ],
          tickPlacement: "on",
        },
        colors: ["#0EB07A", "#B00E0E"],
        markers: {
          size: 3,
          colors: undefined,
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0,
            opacityFrom: 0,
            opacityTo: 0,
          },
        },
      },
    };
  },
};
</script>

<script setup>
const series = [
  {
    name: "series-1",
    data: [0, 300, 200, 800, 10, 600, 1000, 100, 900, 10, 300, 0],
  },
  {
    name: "series-2",
    data: [0, 100, 300, 400, 200, 480, 599, 1000, 200, 1200, 400, 0],
  },
];
</script>

<style lang="scss">
.apexcharts-tooltip {
  background: #fff !important;
  color: black;
}
</style>