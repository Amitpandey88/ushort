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
// JavaScript for pop-up
window.onload = function() {
  var popupWrapper = document.querySelector('.popup-wrapper');
  var closePopup = document.querySelector('#close-popup');
  
  if(!sessionStorage.getItem('popupDisplayed')) {
    popupWrapper.style.display = 'flex';
    sessionStorage.setItem('popupDisplayed', 'true');
  }
  
  closePopup.addEventListener('click', function() {
    popupWrapper.style.display = 'none';
  });
}
