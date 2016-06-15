var headings = [ '', 'Evapotranspiration', 'Runoff', 'Infiltration'];
var labels = [
'Conservation Practice 1',
'Conservation Practice 2',
'Current Conditions',
'100% Forest',
'100% Developed-Medium'
]

var data = [];

var charts = [
  setupBarChart({
    data: data,
    headings: headings,
    labels: labels,
    dataSetColors: [ "rgb(194, 211, 60)", "rgb(207, 67, 0)", "rgb(248, 170, 0)"],
    columnIndices: [1,2,3],
    numRows: labels.length,
    chartElement: document.getElementById("myChart"),
    legendElement: document.getElementById("legend")
  })
]

var table = setupTable({
  data: data,
  headings: headings,
  headingWidths: [250, 250, 200, 200],
  labels: labels,
  charts: charts
})
