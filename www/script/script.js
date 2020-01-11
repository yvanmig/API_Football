
//Requete pour afficher tous les clubs
var settings = {
  "async": true,
  "crossDomain": true,
  //On va chercher notre requête stockée dans un fichier php en local
  "url": "requetes/team.php",
  "method": "GET",
}

$.ajax(settings).done(function (response)
{
      response = JSON.parse(response);
      // Initialisation d'un tableau pour stocker les données
      var teams_data = [];
      $(response.teams).each(function (i)
      {
        //Remplir le tableau avec les valeurs de la réponse qui nous intéressent
            teams_data[i] = {
                  "data-id": this.id,
                  "nameTeam": this.shortName,
                  "logoTeam": this.crestUrl
            }
      });
      //Chercher le template qui va nous permettre de générer du code
      $.get('../www/script/templates/teams.mst', function (template)
      {
        // On prépare la variable à l'aide de mustache, en passant le template et nos données en paramètres
            var rendered = Mustache.render(template, { teams: teams_data });
            // On injecte le template contenant notre code et nos valeurs dans le bloc ciblé
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