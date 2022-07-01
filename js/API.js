const url = "https://api.covid19api.com/summary";
function getAPIdata() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      this.data = data;
      displayData();
    })
    .catch((error) => console.log(error.message));
}
var data;
function displayData() {
  var s = document.getElementById("country").value;
  for (let i of data.Countries) {
    if (i.Country == s) {
      document.getElementById("name").textContent = i.Country;
      document.getElementById("date").textContent = new Date().toDateString();
      document.getElementById("totalcases").textContent = i.TotalConfirmed;
      document.getElementById("totaldeaths").textContent = i.TotalDeaths;
      document.getElementById("newcases").textContent = i.NewConfirmed;
      document.getElementById("newdeaths").textContent = i.NewDeaths;
    }
  }
}
getAPIdata();
