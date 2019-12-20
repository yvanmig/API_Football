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
//Préparer la variable qui va servir pour la requête via l'api
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.football-data.org/v2/teams/59",
    "method": "GET",
    "headers": {
      "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
    }
  }
var standingPL = {
    "async": true,
    "crossDomain": true,
    //pour l'url, plutot passer par l'id de la PL, qui est 2021
    "url": "https://api.football-data.org/v2/competitions/PL/standings",
    "method": "GET",
    "headers": {
      "x-auth-token": "6a895e1cccb14f07b90701ec3a5dc38a"
    }
}
 
  //Lancement de la raquête avec nos paramètres
  $.ajax(standingPL).done(function (response) {
    var pos = 1;
    console.log(response);
    // On remplit les variables selons les valeurs renvoyées par l'API
    templateData = {
        pos:5,
        name: "coucou",
        
    };
    $.get('script/test.html', function(templates) {
      // On va chercher le template externe qui contient le html pour générer du contenu sur la page
      //on créé une variable template
      var template = $(templates).filter('#teamData').html();
      $('body').append(Mustache.render(template, templateData));
    });
  });


  
//   var templateData = {
//     name: "Joli nom de club",
//     pos:5
// };
// $.get('script/test.html', function(templates) {
//   // Fetch the <script /> block from the loaded external
//   // template file which contains our greetings template.
//   var template = $(templates).filter('#tpl-greeting').html();
//   $('body').append(Mustache.render(template, templateData));
// });