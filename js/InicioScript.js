$(document).ready(function () {
    $.ajax({
        url: "https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39",
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "9299052402mshfb49d105f14df47p1e56fdjsnca95cebafabe",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
        success: function (response) {
            if (response.response && response.response.length > 0) {
                var equipos = response.response[0].league.standings[0];
                equipos.sort(function (a, b) {
                    return b.points - a.points;
                });
                for (var i = 0; i < 3; i++) {


                    console.log(equipos[i].team.name);

                    $("#equiposPunteros").append(
                        '<div class="card" style="width: 18rem; margin: 10px;">' +
                        '<img src="' +
                        equipos[i].team.logo +
                        '" class="card-img-top" alt="' +
                        equipos[i].team.name +
                        '">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' +
                        equipos[i].team.name +
                        "</h5>" +
                        '<p class="card-text">Puntos: ' +
                        equipos[i].points +
                        "</p>" +
                        "</div>" +
                        "</div>"
                    );
                }
            }
        },
        error: function (error) {
            console.error("Error al cargar datos:", error);
        },
    });
});
