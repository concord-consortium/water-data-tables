var site1data = [
  ['Corner 1', null, null],
  ['Corner 2', null, null],
  ['Corner 3', null, null],
  ['Corner 4', null, null],
  ['Center',   null, null],
  ['Average',  null, null]];

var site2data = [
  ['Corner 1', null, null],
  ['Corner 2', null, null],
  ['Corner 3', null, null],
  ['Corner 4', null, null],
  ['Center',   null, null],
  ['Average',  null, null]];

var averageData = []
var headings = [ 'Study Site', 'Temperature', 'Humidity', 'Light'];
var labels = [
  '1',
  '2'];
initializeTableData(averageData, labels, headings.length - 1);

var charts = [
  setupBarChart({
    data: averageData,
    labels: labels,
    headings: headings,
    columnIndices: [1],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: 2,
    chartElement: document.getElementById("myChart1")
  }),
  setupBarChart({
    data: averageData,
    labels: labels,
    headings: headings,
    columnIndices: [2],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: 2,
    chartElement: document.getElementById("myChart2")
  }),
  setupBarChart({
    data: averageData,
    labels: labels,
    headings: headings,
    columnIndices: [3],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: 2,
    chartElement: document.getElementById("myChart3")
  })
];

// on each change go through all of the data and update the average cell
var updateAverages = function(table, data, siteIdx) {
  var columns = [1,2,3];
  var numRows = data.length -1;
  columns.forEach(function(columnIdx, index){
    var total = 0;
    var numPoints = 0;
    var value;

    for(var rowIdx=0; rowIdx<numRows; rowIdx++){
      value = data[rowIdx][columnIdx]
      if(value == null || value == '' || isNaN(value)){
        continue;
      }
      numPoints += 1;
      total += parseFloat(data[rowIdx][columnIdx], 10);
    }
    if(numPoints > 0) {
      data[numRows][columnIdx] = total/numPoints;
      averageData[siteIdx][columnIdx] = total/numPoints;
    } else {
      data[numRows][columnIdx] = null;
      averageData[siteIdx][columnIdx] = total/numPoints;
    }
  });
  table.render();
  charts.forEach(function(chart){
    chart.updateFromData();
  });
}

var hot1 = new Handsontable(document.getElementById('study-site-1-table'), {
  data: site1data,
  contextMenu: false,
  colWidths: [140, 240, 240, 240],
  colHeaders: [ 'Location', 'Temp. (°C)', 'Relative Humidity (%)', 'Light (lux)'],
  columns: [{readOnly: true},{},{},{}],
  rowHeaders: false,
  allowInsertRow: false,
  minSpareRows: 0,
  afterChange: function (change, type) {
    updateAverages(this, site1data, 0);
    return true;
  }
});


var hot2 = new Handsontable(document.getElementById('study-site-2-table'), {
  data: site2data,
  contextMenu: false,
  colWidths: [140, 240, 240, 240],
  colHeaders: [ 'Location', 'Temp. (°C)', 'Relative Humidity (%)', 'Light (lux)'],
  columns: [{readOnly: true},{},{},{}],
  rowHeaders: false,
  allowInsertRow: false,
  minSpareRows: 0,
  afterChange: function (change, type) {
    updateAverages(this, site2data, 1);
    return true;
  }
});

var lastRowReadOnly = {
    cells: function (row, col, prop) {
      var cellProperties = {};

      if (row == (site1data.length -1)) {
        cellProperties.readOnly = true;
      }

      return cellProperties;
    }
  };

hot1.updateSettings(lastRowReadOnly);
hot2.updateSettings(lastRowReadOnly);
