var headings = [ 'Location', 'Description of Location', 'Soil Moisture'];
var labels = [
'A',
'B',
'C',
'D',
'E',
'F',
'G'
]

var data = [];

var charts = [
  setupBarChart({
    data: data,
    headings: headings,
    columnIndices: [2],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: labels.length,
    chartElement: document.getElementById("myChart"),
    legendElement: document.getElementById("legend")
  })
]

var table = setupTable({
  data: data,
  headings: headings,
  headingWidths: [100, 400, 200],
  labels: labels,
  charts: charts
})
