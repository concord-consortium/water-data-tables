
var hot1 = new Handsontable(document.getElementById('study-site-1'), {
  data: [['Conservation Practice', null],
         ['Land Cover', null],
         ['Shade', null],
         ['Slope', null],
         ['Surface Water', null],
         ['Soil Type', null]],
  colHeaders: false,
  contextMenu: false,
  colWidths: [200, 700],
  columns: [{readOnly: true},{}],
  rowHeaders: false,
  allowInsertRow: false
});

var hot2 = new Handsontable(document.getElementById('study-site-2'), {
  data: [['Conservation Practice Needed', null],
         ['Land Cover', null],
         ['Shade', null],
         ['Slope', null],
         ['Surface Water', null],
         ['Soil Type', null]],
  colHeaders: false,
  contextMenu: false,
  colWidths: [200, 700],
  columns: [{readOnly: true},{}],
  rowHeaders: false,
  allowInsertRow: false
});
