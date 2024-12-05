document.addEventListener("DOMContentLoaded", function () {
  const countryCodeSelect = document.getElementById("country-code");

  // Function to fetch country codes from an API
  async function fetchCountryCodes() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      const countryCodes = countries.map((country) => {
        const code =
          country.idd.root +
          (country.idd.suffixes ? country.idd.suffixes[0] : "");
        return { name: country.name.common, code };
      });
      countryCodes.sort((a, b) => a.name.localeCompare(b.name));
      populateCountryCodes(countryCodes);
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  }

  // Function to populate the select element with country codes
  function populateCountryCodes(countryCodes) {
    countryCodes.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.code;
      option.textContent = `${country.name} (${country.code})`;
      countryCodeSelect.appendChild(option);
    });
  }

  // Fetch and populate country codes when the page loads
  fetchCountryCodes();
});
