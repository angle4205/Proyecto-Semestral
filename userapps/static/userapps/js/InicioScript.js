$(document).ready(function () {
  $.ajax({
    url: "https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39",
    method: "GET",
    headers: {
      "x-rapidapi-key": "9299052402mshfb49d105f14df47p1e56fdjsnca95cebafabe",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
    success: function (r) {
      if (r.response && r.response.length > 0) {
        var equipos = r.response[0].league.standings[0];
        equipos.sort(function (a, b) {
          return b.points - a.points;
        });
        for (var i = 0; i < 3; i++) {
          console.log(equipos[i].team.name);

          $("#equiposPunteros").append(
            $('<div class="card-fixed-size" style="width: 11rem; margin: 10px; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);">')
              .append(
                $('<img class="card-img-top" alt="' + equipos[i].team.name + '">')
                  .attr('src', equipos[i].team.logo)
              )
              .append(
                $('<div class="card-body">')
                  .append(
                    $('<h5 class="card-title team-name">' + equipos[i].team.name + '</h5>')
                  )
                  .append(
                    $('<p class="card-text">' + equipos[i].points + ' pts</p>')
                  )
              )
          );
        }
      }
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
});
