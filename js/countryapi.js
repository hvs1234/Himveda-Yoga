document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Sort countries alphabetically
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching country data:", error));
});
