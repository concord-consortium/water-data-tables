var headings = [ 'Soil Type', 'Evapotranspiration', 'Runoff', 'Infiltration'];

var labels = [
'A - High Infiltration',
'B - Moderate Infiltration',
'C - Slow Infiltration',
'D - Very Slow Infiltration'
]

var data = [];

var charts = [
  setupBarChart({
    data: data,
    headings: headings,
    columnIndices: [1,2,3],
    dataSetColors: [ "rgb(194, 211, 60)", "rgb(207, 67, 0)", "rgb(248, 170, 0)"],
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
