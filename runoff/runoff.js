var headings = [ 'Land Cover', 'Evapotranspiration', 'Runoff', 'Infiltration'];

var data = [
  ['LIR', null, null, null],
  ['HIR', null, null, null],
  ['Commercial', null, null, null],
  ['Grassland', null, null, null],
  ['Forest', null, null, null],
  ['TurfGrass', null, null, null],
  ['Pasture', null, null, null],
  ['Row Crops', null, null, null],
  ['Chaparral', null, null, null],
  ['Tall Grass Prairie', null, null, null],
  ['Short Grass Prairie', null, null, null],
  ['Desert', null, null, null]
];

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

var container = document.getElementById('example');
var hot = new Handsontable(container, {
  data: data,
  minSpareRows: 1,
  rowHeaders: true,
  colHeaders: true,
  contextMenu: true,
  colWidths: [250, 250, 200, 200],
  colHeaders: headings,
  columns: [{readOnly: true},{},{},{}],
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


Chart.defaults.global.animation = false;

var chartData1 = {
    labels: labels,
    datasets: [
        {
            label: 'Evapotranspiration',
            fillColor: "rgb(194, 211, 60)",
            strokeColor: "rgb(194, 211, 60)",
            highlightFill: "rgb(194, 211, 60)",
            highlightStroke: "rgb(194, 211, 60)",
            data: [null,null,null,null,null,null,null,null,null,null,null,null]
        },
        {
            label: 'Runoff',
            fillColor: "rgb(207, 67, 0)",
            strokeColor: "rgb(207, 67, 0)",
            highlightFill: "rgb(207, 67, 0)",
            highlightStroke: "rgb(207, 67, 0)",
            data: [null,null,null,null,null,null,null,null,null,null,null,null]
        },
        {
            label: 'Infiltration',
            fillColor: "rgb(248, 170, 0)",
            strokeColor: "rgb(248, 170, 0)",
            highlightFill: "rgb(248, 170, 0)",
            highlightStroke: "rgb(248, 170, 0)",
            data: [null,null,null,null,null,null,null,null,null,null,null,null]
        }
    ]
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
  return parseInt(value);
}

function updateData() {
  if(myNewChart == null) {
    return;
  }
  // update the data sections of the chartData.datasets
  // recreate the chart
  data.forEach(function(row, index){
    myNewChart.datasets[0].bars[index].value = convertValue(row[1]);
    myNewChart.datasets[1].bars[index].value = convertValue(row[2]);
    myNewChart.datasets[2].bars[index].value = convertValue(row[3]);
  });

  myNewChart.update();
};
