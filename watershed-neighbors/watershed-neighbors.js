
var hot1 = new Handsontable(document.getElementById('upstream-neighbors'), {
  data: [[null, null, null],[null, null, null],[null, null, null]],
  contextMenu: false,
  colWidths: [200, 300, 400],
  colHeaders: [ 'Upstream Watershed Neighbor', 'Conservation Practice', 'Impact on Watershed'],
  columns: [{},{},{}],
  rowHeaders: false,
  allowInsertRow: true,
  minSpareRows: 1
});

var hot2 = new Handsontable(document.getElementById('downstream-neighbors'), {
  data: [[null, null, null],[null, null, null],[null, null, null]],
  contextMenu: false,
  colWidths: [200, 300, 400],
  colHeaders: [ 'Downstream Watershed Neighbor', 'Conservation Practice', 'Impact on Watershed'],
  columns: [{},{},{}],
  rowHeaders: false,
  allowInsertRow: true,
  minSpareRows: 1
});
