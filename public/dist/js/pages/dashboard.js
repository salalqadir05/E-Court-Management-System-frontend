$(function () {
  'use strict'

  // ... (Your existing code)

  // Sales chart
  var salesChartCanvas = document.getElementById('revenue-chart-canvas');
  if (salesChartCanvas) {
    var salesChartContext = salesChartCanvas.getContext('2d');

    var salesChartData = {
      // ... (Your existing salesChartData)
    };

    var salesChartOptions = {
      // ... (Your existing salesChartOptions)
    };

    var salesChart = new Chart(salesChartContext, {
      type: 'line',
      data: salesChartData,
      options: salesChartOptions
    });
  }

  // Donut Chart
  var pieChartCanvas = $('#sales-chart-canvas').get(0);
  if (pieChartCanvas) {
    var pieChartContext = pieChartCanvas.getContext('2d');

    var pieData = {
      // ... (Your existing pieData)
    };

    var pieOptions = {
      // ... (Your existing pieOptions)
    };

    var pieChart = new Chart(pieChartContext, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions
    });
  }

  // Sales graph chart
  var salesGraphChartCanvas = $('#line-chart').get(0);
  if (salesGraphChartCanvas) {
    var salesGraphChartContext = salesGraphChartCanvas.getContext('2d');

    var salesGraphChartData = {
      // ... (Your existing salesGraphChartData)
    };

    var salesGraphChartOptions = {
      // ... (Your existing salesGraphChartOptions)
    };

    var salesGraphChart = new Chart(salesGraphChartContext, {
      type: 'line',
      data: salesGraphChartData,
      options: salesGraphChartOptions
    });
  }
});
