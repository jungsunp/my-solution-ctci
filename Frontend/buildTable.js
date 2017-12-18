// <style>
// /* Defines a cleaner look for tables */
// table  { border-collapse: collapse; }
// td, th { border: 1px solid black; padding: 3px 8px; }
// th     { text-align: left; }
// </style>

// <script>
function buildTable(data) {
  // Your code here.
  const headers = ['name', 'height', 'country'];
  const table = document.createElement('table');

  // table header
  let row = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
      th.appendChild(document.createTextNode(header));
      row.appendChild(th);
  });
  table.appendChild(row); // append header row

  // table rows
  data.forEach(mountain => {
      row = document.createElement('tr');
    headers.forEach(header => {
        const td = document.createElement('td');
          td.appendChild(document.createTextNode(mountain[header]));
          row.appendChild(td);
      });
      table.appendChild(row);
  });

  return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
// </script>
