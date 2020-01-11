//Requete pour afficher tous les clubs
var settings = {
  "async": true,
  "crossDomain": true,
  // Aller chercher la requête contenue dans un fichier php en local
  "url": "requetes/team.php",
  "method": "GET",
}

$.ajax(settings).done(function (response)
{
      response = JSON.parse(response);
      var teams_data = [];
      $(response.teams).each(function (i)
      {
        // Remplir notre tableau avec les valeurs de la réponse
            teams_data[i] = {
                  "data-id": this.id,
                  "nameTeam": this.shortName,
                  "logoTeam": this.crestUrl
            }

      });
// Charger le template qui va générer notre code
      $.get('../www/script/templates/teams.mst', function (template)
      {
        // On charge Mustache, en donnant le template et notre tableau en paramètres
            var rendered = Mustache.render(template, { teams: teams_data });
            // On sélectionne le bloc qui va recevoir tout le code généré
            $('#blocLogos').html(rendered);
      });
});


//Requete pour afficher les clubs selon leur classement
var settingsRank = {
  "async": true,
  "crossDomain": true,
  "url": "requetes/rank.php",
  "method": "GET",
}


$.ajax(settingsRank).done(function (response)
{
  response = JSON.parse(response);
  console.log(response);
  var standings_data = [];
  $(response.standings[0].table).each(function (i)
  {
        standings_data[i] = {
              "data-id": this.team.id,
              "nameTeam": this.team.name,
              "logoTeam": this.team.crestUrl,
              "positionTeam": this.position,
              "pointsTeam": this.points
        }

  });
  $.get('../www/script/templates/rank.mst', function (template)
  {
        var rendered = Mustache.render(template, { standings: standings_data });
        $('#containerLignes').html(rendered);
  });
});