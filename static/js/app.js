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
var filters = {};
// This function will replace your handleClick function
function updateFilters() {
    //console.log("Hello World!")
    //Add filters
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    //console.log("test")

    let filteredData = data.filter(d =>{
        
        let matched = false

        if (d.datetime == date || date === ''){
            matched =  true;
        } else {
            return false;
        }

        if (d.city.toUpperCase() === city.toUpperCase() || city === '') {
            matched =  true;
        } else {
            return false;
        }

        if (d.state.toUpperCase() === state.toUpperCase() || state === '') {
            matched =  true;
        } else {
            return false;
        }

        if (d.country.toUpperCase() === country.toUpperCase() || country === '') {
            matched =  true;
        } else {
            return false;
        }

        if (d.shape.toUpperCase() === shape.toUpperCase() || shape === '') {
            matched =  true;
        } else {
            return false;
        }
        

        return matched

    } )
    buildTable(filteredData);
    
    //console.log(filteredData)
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

//d3.selectAll('input').on("keydown",updateFilters)
d3.selectAll("#filter-btn").on("click", updateFilters)

// Build the table when the page loads
buildTable(tableData);