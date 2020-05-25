// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

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
    //Add filters
    let date = d3.select{"#datetime"}.property("value");
    let city = d3.select{"#city"}.property("value");
    let state = d3.select{"#state"}.property("value");
    let country = d3.select{"#country"}.property("value");
    let shape = d3.select{"#shape"}.property("value");

    let dateId = date.attr("id");
    let cityId = city.attr("id");
    let stateId = state.attr("id");
    let countryId = country.attr("id");
    let shapeId = shape.attr("id");

  //Placeholder
  
    //Add or clear filter
    //Based on what is added by the user
    If (date) {
        filters[dateId] = date;
    } else {
        delete filters[dateId];
    }
  
    If (city) {
        filters[cityId] = date;
    } else {
        delete filters[cityId];
    }

    If (state) {
        filters[stateId] = date;
    } else {
        delete filters[stateId];
    }

    If (country) {
        filters[countryId] = date;
    } else {
        delete filters[countryId];
    }

    If (shape) {
      filters[shapeId] = date;
    } else {
      delete filters[shapeId];
    }

  // Save the element, value, and id of the filter that was changed  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.defineProperties(filters).forEac(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

d3.selectAll('input').on("keydown",updateFilters)
d3.selectAll("#filter-btn").on("click", updateFilters)

// Build the table when the page loads
buildTable(tableData);
