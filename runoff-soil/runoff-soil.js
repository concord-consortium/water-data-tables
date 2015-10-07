var headings = [ 'Land Cover', 'Evapotranspiration', 'Runoff', 'Infiltration'];
var headingWidths = [250, 250, 200, 200];
var dataSetColors = [ "rgb(194, 211, 60)", "rgb(207, 67, 0)", "rgb(248, 170, 0)"];

var labels = [
'Sand',
'Loam',
'Sandy Clay',
'Clay Loam'
]

var data = [];

var barChart = setupBarGraph(data, labels, headings, headingWidths, dataSetColors);
