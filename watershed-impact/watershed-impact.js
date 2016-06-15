var hot = new Handsontable(document.getElementById('example'), {
  data: [[null, null],[null, null],[null, null],[null, null],[null, null]],
  contextMenu: false,
  colWidths: [200, 600],
  colHeaders: [ 'Neighbor', 'Impact on Watershed'],
  columns: [{},{}],
  rowHeaders: false,
  allowInsertRow: true,
  minSpareRows: 1
});
