// from data.js
const tableData = data;

// get table references
const tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        });
    });
}

// Keep track of all filters
var filters = {
    "datetime": d3.select("#datetime").property("value"),
    "city": d3.select("#city").property("value"),
    "state": d3.select("#state").property("value"),
    "country": d3.select("#country").property("value"),
    "shape": d3.select("#shape").property("value")
};

for (var key in filters) {
    if (!filters[key]) {
        delete filters[key]
    }
}

var filters = Object.defineProperties(filters);

const filterTable = tableData.filter(item =>
    filters.every(([key, value]) => item[key] == value)
);

buildTable(filteredData);

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

d3.selectAll('input').on("keydown",updateFilters)
d3.select("#filter-btn").on("click", updateFilters)

// Build the table when the page loads
buildTable(tableData);