function setupBarGraph(data, labels, headings, headingWidths, firstDataColumn, dataSetColors) {
  initializeTableData(data, labels, headings.length - 1);

  var container = document.getElementById('example');
  var columnConfigs = [{readOnly: true}];
  for(var i=1; i<headings.length; i++){
    columnConfigs.push({});
  }
  var hot = new Handsontable(container, {
    data: data,
    minSpareRows: 1,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    colWidths: headingWidths,
    colHeaders: headings,
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
      updateData();
    }
  });

  function initializeTableData(data, labels, numValues) {
    labels.forEach(function(label){
      row = [label]
      for(var i=0; i<numValues; i++){
        row.push(null);
      }
      data.push(row);
    });
  }


  // numValues = 12
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
    for(var i=firstDataColumn; i<headings.length; i++){
      config = initializeChartDataset(headings[i], dataSetColors[i-firstDataColumn], labels.length);
      datasetConfigs.push(config);
    }
    return datasetConfigs;
  }

  Chart.defaults.global.animation = false;

  var chartData1 = {
      labels: labels,
      datasets: setupDatasetConfigs()
  };

  var ctx = document.getElementById("myChart").getContext("2d");
  var myNewChart = new Chart(ctx).Bar(chartData1);

  document.getElementById("legend").innerHTML = myNewChart.generateLegend();

  // Ugh so I'm going to have to sync the bars with the
  // the table, it seems chart.js isn't good at this but perhaps
  // handsontable is...
  function convertValue(value) {
    if(value == null){
      return value;
    }
    var result = parseInt(value);
    if(isNaN(result)){
      return null;
    }
    return result;
  }

  function updateData() {
    if(myNewChart == null) {
      return;
    }
    // update the data sections of the chartData.datasets
    // recreate the chart
    data.forEach(function(row, index){
      for(var i=firstDataColumn; i<headings.length; i++){
        myNewChart.datasets[i-firstDataColumn].bars[index].value = convertValue(row[i]);
      }
    });

    myNewChart.update();
  };

  return myNewChart;
}