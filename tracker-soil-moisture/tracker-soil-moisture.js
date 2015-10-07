var headings = [ 'Location', 'Description of Location', 'Soil Moisture'];
var headingWidths = [100, 400, 200];
var firstDataColumn = 2;
var dataSetColors = [ "rgb(207, 67, 0)"];

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

var barChart = setupBarGraph(data, labels, headings, headingWidths, firstDataColumn, dataSetColors);
