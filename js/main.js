var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var siteContainer = [];

if (localStorage.getItem("Sites") != null) {
  siteContainer = JSON.parse(localStorage.getItem("Sites"));
  displayWebsite();
}

function addWebsite() {
  var Website = {
    name: siteName.value,
    url: siteUrl.value,
  };
  siteContainer.push(Website);
  console.log(siteContainer);
  localStorage.setItem("Sites", JSON.stringify(siteContainer));
  displayWebsite();
  clearForm();
}
function displayWebsite() {
  var container = "";

  for (var i = 0; i < siteContainer.length; i++) {
    container += `
    <tr>
    <td>${i}</td>
    <td>${siteContainer[i].name}</td>
    <td> <a target="_blank" href="${siteContainer[i].url}"><button class="btn btn-outline-success btn-sm">Visit</button></a> </td>
    <td> <button onclick="deleteSite();" class="btn btn-outline-danger btn-sm">Delete</button> </td>
  </tr>
    `;
  }
  document.getElementById("tableData").innerHTML = container;
}

function deleteSite(element) {
  siteContainer.splice(element, 1);
  localStorage.setItem("Sites", JSON.stringify(siteContainer));
  displayWebsite();
}

function clearForm() {
  siteName.value = "";
  siteUrl.value = "";
}
