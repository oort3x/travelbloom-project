function travelRecommendation() {

  const input = document.getElementById("searchInput").value.toLowerCase(); //input = lowercase search input

  const result = document.getElementById("result"); // write results here
  result.innerHTML = ""; 

  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      const beaches = data.beaches;
      const temples = data.temples;
      const countries = data.countries;

      if (input == "beaches" || input == "beach") {
        beaches.forEach((beach) => {
          result.innerHTML += `<h2>${beach.name}</h2>`;
          result.innerHTML += `<img src="${beach.imageUrl}">`;
          result.innerHTML += `<p>${beach.description}</p>`;
        });
      } else if (input == "temples" || input == "temple") {
        temples.forEach((temple) => {
          result.innerHTML += `<h2>${temple.name}</h2>`;
          result.innerHTML += `<img src="${temple.imageUrl}">`;
          result.innerHTML += `<p>${temple.description}</p>`;
        });
      } else if (input === "countries" || input === "country") {
        countries.forEach((country) => {
          const countryCities = country.cities;
          countryCities.forEach((city) => {
            result.innerHTML += `<h2>${city.name}</h2>`;
            result.innerHTML += `<img src="${city.imageUrl}">`;
            result.innerHTML += `<p>${city.description}</p>`;
          });
        });
      } else {
        console.log('User did not enter "beaches", "temples" or "countries"');
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function clearRecs() {
    result.innerHTML = ""; 
}

btnSearch.addEventListener("click", travelRecommendation);
btnReset.addEventListener("click", clearRecs);
