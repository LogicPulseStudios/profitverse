// Fetch the JSON file
fetch('/scripts/json/country.json')
  .then(response => response.json())
  .then(data => {
    // Get the select element
    var countrySelect = document.getElementById("country");

    // Populate the select with country names
    data.forEach(function (country) {
      var option = document.createElement("option");
      option.value = country.name;
      option.text = country.name;
      countrySelect.add(option);
    });
  })
  .catch(error => {
    console.error('Error fetching countries:', error);
  });