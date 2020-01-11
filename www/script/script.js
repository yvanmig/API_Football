
//Requete pour afficher tous les clubs
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "requetes/team.php",
  "method": "GET",
}

$.ajax(settings).done(function (response)
{
      response = JSON.parse(response);
      var teams_data = [];
      $(response.teams).each(function (i)
      {
            teams_data[i] = {
                  "data-id": this.id,
                  "nameTeam": this.shortName,
                  "logoTeam": this.crestUrl
            }

      });
      console.log(teams_data);

      $.get('../www/script/templates/teams.mst', function (template)
      {
            var rendered = Mustache.render(template, { teams: teams_data });
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
  console.log(standings_data);

  $.get('../www/script/templates/rank.mst', function (template)
  {
        var rendered = Mustache.render(template, { standings: standings_data });
        $('#containerLignes').html(rendered);
  });
});