var headings = [ 'Land Cover', 'Evapotranspiration', 'Runoff', 'Infiltration'];
var labels = [
'Water',
'Developed, Open Space',
'Developed-Low',
'Developed-Med',
'Developed-High',
'Barren Land',
'Forest',
'Shrub/Scrub',
'Grassland',
'Pasture/Hay',
'Crops',
'Wetlands'
]

var data = [];

var charts = [
  setupBarChart({
    data: data,
    labels: labels,
    headings: headings,
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
