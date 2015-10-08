var headings = [ 'Location', 'Description of Location', 'Temperature', 'Humidity', 'Light'];
var labels = [
'A',
'B',
'C',
'D',
'E'
]

var data = [];

var charts = [
  setupBarChart({
    data: data,
    headings: headings,
    columnIndices: [2],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: labels.length,
    chartElement: document.getElementById("myChart1")
  }),
  setupBarChart({
    data: data,
    headings: headings,
    columnIndices: [3],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: labels.length,
    chartElement: document.getElementById("myChart2")
  }),
  setupBarChart({
    data: data,
    headings: headings,
    columnIndices: [4],
    dataSetColors: [ "rgb(207, 67, 0)"],
    numRows: labels.length,
    chartElement: document.getElementById("myChart3")
  })
]

var table = setupTable({
  data: data,
  headings: headings,
  headingWidths: [100, 400, 130, 130, 130],
  labels: labels,
  charts: charts
})