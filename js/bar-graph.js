/**
   data
   columnIndices - [1,2,3]
   headings
   dataSetColors
   numRows - labels.length
   chartElement - document.getElementById("myChart")
   legendElement - document.getElementById("legend")
 */
function setupBarChart(options) {
  function initializeChartDataset(label, color, numValues) {
    var data = [];
    for(var i=0; i<numValues; i++){
      data.push(null);
    }

    return {
      label: label,
      fillColor: color,
      strokeColor: color,
      highlightFill: color,
      highlightStroke: color,
      data: data
    };
  }

  function setupDatasetConfigs(){
    var datasetConfigs = [];
    var config;

    options.columnIndices.forEach(function(colIndex, datasetIndex){
      config = initializeChartDataset(headings[colIndex], options.dataSetColors[datasetIndex], options.numRows);
      datasetConfigs.push(config);
    });
    return datasetConfigs;
  }

  Chart.defaults.global.animation = false;

  var chartData1 = {
      labels: options.labels,
      datasets: setupDatasetConfigs()
  };

  var ctx = options.chartElement.getContext("2d");
  var myNewChart = new Chart(ctx).Bar(chartData1);

  if(options.legendElement != null) {
    options.legendElement.innerHTML = myNewChart.generateLegend();
  }

  function convertValue(value) {
    if(value == null){
      return value;
    }
    var result = parseFloat(value);
    if(isNaN(result)){
      return null;
    }
    return result;
  }

  if(myNewChart == null) {
    return null;
  }

  myNewChart.updateFromData = function() {
    // update the data sections of the chartData.datasets
    // recreate the chart
    options.data.forEach(function(row, index){
      options.columnIndices.forEach(function(colIndex, datasetIndex){
        myNewChart.datasets[datasetIndex].bars[index].value = convertValue(row[colIndex]);
      });
    });

    myNewChart.update();
  }

  return myNewChart;
}

function initializeTableData(data, labels, numValues) {
  labels.forEach(function(label){
    row = [label]
    for(var i=0; i<numValues; i++){
      row.push(null);
    }
    data.push(row);
  });
}

/**
 data
 labels
 headings
 headingWidths
 charts
 */
function setupTable(options) {
  initializeTableData(options.data, options.labels, options.headings.length - 1);

  var container = document.getElementById('example');
  var columnConfigs = [{readOnly: true}];
  for(var i=1; i<options.headings.length; i++){
    columnConfigs.push({});
  }
  var hot = new Handsontable(container, {
    data: options.data,
    minSpareRows: 1,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    colWidths: options.headingWidths,
    colHeaders: options.headings,
    columns: columnConfigs,
    rowHeaders: false,
    allowInsertRow: false,
    minSpareRows: 0,
    afterChange: function (change, type) {
      // example 'change' [4,4,776,"773"]
      // row, col, oldVal, newVal
      // type: 'edit'
      // Because we don't care much about speed
      // it is probably easiest to just go through all of the data and update
      // the chart
      // because in some cases we might need to update the chart from a single
      // data source it might be best to put this in a function that clears all
      // chart data first and then updates the values
      options.charts.forEach(function(chart){
        chart.updateFromData();
      })
    }
  });

  return hot;
}