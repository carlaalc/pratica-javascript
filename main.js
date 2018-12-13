function preencherPerfil(info) {
  var nome = document.querySelector(".nome");
  var altura = document.querySelector("#altura");
  var corCabelo = document.querySelector("#cor_cabelo");
  var anoNascimento = document.querySelector("#ano_nascimento");
  var naves = document.querySelector("#naves");

  nome.innerHTML = info.name;
  altura.innerHTML = info.height + "cm";
  corCabelo.innerHTML = info.hair_color;
  anoNascimento.innerHTML = info.birth_year;

  $.each(info.starships, function(index, starship){
    console.log(starship)
    $(naves).find("ul").append(
      $("<li>").html(starship)
    )
  })
}

// AJAX com jQuery
$.ajax({
  url: "https://swapi.co/api/people/1/"
})
.done(function(info){
  preencherPerfil(info)
})