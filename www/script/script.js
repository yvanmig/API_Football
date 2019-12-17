



//Lancer une requête via l'api
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/API_football/www/index.php",
    "method": "GET",
    "headers": {
      "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });