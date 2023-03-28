function shortenUrl() {
  var longUrl = document.getElementById("longUrl").value;
  fetch("https://api.shrtco.de/v2/shorten?url=" + longUrl)
    .then(response => response.json())
    .then(data => {
      var shortUrl = data.result.full_short_link;
      document.getElementById("shortUrl").innerHTML = "<a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a>";
    })
    .catch(error => console.log(error));
}
