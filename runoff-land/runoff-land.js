var headings = [ 'Land Cover', 'Evapotranspiration', 'Runoff', 'Infiltration'];
var headingWidths = [250, 250, 200, 200];
var dataSetColors = [ "rgb(194, 211, 60)", "rgb(207, 67, 0)", "rgb(248, 170, 0)"];

var labels = [
'LIR',
'HIR',
'Commercial',
'Grassland',
'Forest',
'TurfGrass',
'Pasture',
'Row Crops',
'Chaparral',
'Tall Grass Prairie',
'Short Grass Prairie',
'Desert'
]

var data = [];

var barChart = setupBarGraph(data, labels, headings, headingWidths, dataSetColors);
