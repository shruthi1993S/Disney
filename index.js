document.addEventListener("DOMContentLoaded", function () {
  fetchUrl();
});

let fetchData = [];

// asyn function to fetch data from an API using async & await

async function fetchUrl() {
  // fetching API
  const response = await fetch("https://api.disneyapi.dev/character");
  fetchData = await response.json();

  renderfetchData();
}

// Appending the data in table
try {
  function renderfetchData() {
    // push the object into an array
    var arr = [];
    arr.push(fetchData);

    const userList = document.getElementById("disneyList");
    userList.innerHTML = "";

    arr.forEach((arr, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `  <td>${index + 1}</td>
    <td>${arr.data[0].films}</td>
    <td>${arr.data[0].videoGames}</td>
    <td>${arr.data[0].tvShows}</td>
    <td>${arr.data[0].sourceUrl}</td>`;

      userList.appendChild(row);
    });
  }
} catch (error) {
  console.log("Error");
}
