<template>
  <div>
    <canvas id="emp-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import EmpChartData from "./data.js";

export default {
  name: "Chart",
  data() {
    return {
      EmpChartData: EmpChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById("emp-chart");
    new Chart(ctx, this.EmpChartData);
  },
};
</script>