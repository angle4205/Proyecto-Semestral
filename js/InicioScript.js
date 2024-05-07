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
            $(
              '<div class="container" style="width: 100px; margin: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center;">'
            )
              .append(
                '<img src="' +
                  equipos[i].team.logo +
                  '" class="card-img-top" alt="' +
                  equipos[i].team.name +
                  '">'
              )
              .append(
                '<p class="card-text" style="margin-top: 10px;">' +
                  equipos[i].points +
                  " pts</p>"
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
