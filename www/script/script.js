



//Lancer une requête via l'api
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.football-data.org/v2/teams/58",
    "method": "GET",
    "headers": {
      "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
    }
  }
  
  $.ajax(settings).done(function (response) {
    var pos = 1;
    console.log(response);
    console.log(response.address);
    // Faire une nouvelle ligne avec les infos de l'API. 
    // Fastidieux et inefficient
    $(".ligne").after(
      "<div class='ligne'><div class='numeroLigne'>" + pos +
       "</div> <div class='blocOval'><div class='oval'></div></div>" +
      "<div class='imageLigne'><img src="+response.crestUrl+"></div>");
                    //     <div class="blocOval">
                    //         <div class="oval"></div>
                    //     </div>                        
                    //     <div class="imageLigne"><img src="image/arsenal.png" alt=""></div>
                    //     <div class="nomLigne">Arsenal</div>
                    //     <div class="scoreLigne">27 pts</div>
                    // </div>
  });