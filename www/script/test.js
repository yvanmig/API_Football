  // Fonctions test
  // function loadUser() {
  //   var template = $('#template').html();
  //   Mustache.parse(template);   // optional, speeds up future uses
  //   var rendered = Mustache.render(template, {name: "Luke"});
  //   $('#target').html(rendered);
  // }


  // Load external file
  // function loadUser() {
  //   $.get('test.txt', function(template) {
  //     var rendered = Mustache.render(template, {name: "Luke"});
  //     $('#target').html(rendered);
  //   });
  // }



var templateData;
// Préparer la variable qui va servir pour la requête via l'api
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.football-data.org/v2/teams/59",
//     "method": "GET",
//     "headers": {
//       "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
//     }
//   }
// var standingPL = {
//     "async": true,
//     "crossDomain": true,
//     //pour l'url, plutot passer par l'id de la PL, qui est 2021
//     "url": "https://api.football-data.org/v2/competitions/PL/standings",
//     "method": "GET",
//     "headers": {
//       "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
//     }
// }
 
//   //Lancement de la raquête avec nos paramètres
//   $.ajax(standingPL).done(function (response) {
//     var pos = 1;
//     console.log(response);
//     // On remplit les variables selons les valeurs renvoyées par l'API
//     templateData = {
//         pos:5,
//         name: "coucou",        
//     };
//     $.get('script/test.html', function(templates) {
//       // On va chercher le template externe qui contient le html pour générer du contenu sur la page
//       //on créé une variable template
//       var template = $(templates).filter('#teamData').html();
//       $('body').append(Mustache.render(template, templateData));
//     });
//   });


  
  // var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "http://localhost/premierleague/www/html/request_standings.php",
  //   "method": "GET",
  //   "headers": {
  //            "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
  //          }
  // }

  // $.ajax(settings).done(function (response) {
  //   response = JSON.parse(response);
  //   var standings_data = [];
  //   $(response.standings[0].table).each(function(i){
  //    standings_data[i] = {
  //     "nameclub":this.team.name,
  //     "logoclub":this.team.crestUrl,
  //     "point":this.points,
  //     "place":this.position

  //   }

  // });
  //   console.log(standings_data);

  //   $.get('../templates/standings/standings.mst', function(template) {
  //     var rendered = Mustache.render(template, {standings: standings_data});
  //     $('.team').html(rendered);
  //   });
  // });



  

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://api.football-data.org/v2/competitions/2021/standings",
    "method": "GET",
    "headers": {
      "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(typeof response);
  // response = JSON.parse(response);
  var teams_data = [];
    $(response.teams).each(function(i){
      teams_data[i] = {
        "nameClub":this.shortName,
        "logoClub":this.crestUrl,
        "nbClub":i, //lien vers le slider
      }
      
    });
    console.table(teams_data);
  });