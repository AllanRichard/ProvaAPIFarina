


$(document).ready( function() {
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/',
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPlanet = document.querySelector("#divListagemPlaneta");
			divPlanet.innerHTML = "";
			$.each(data.results, function(i, obj) {
				divPlanet.innerHTML += '<a href="javascript:mostrarPlanetas(\'' + obj.url + '\')" >' + obj.name + '</a> <br />';
			})
		}
	})
})

function mostrarPlanetas(Purl) {
	$.ajax({
		type: 'GET',
		url: Purl,
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPlaneta = document.querySelector("#informacaoPlaneta");
			divPlaneta.innerHTML = "";
			divPlaneta.innerHTML += 
								   "<br/><br/>Nome Planeta: " + data.name + 
			                       "<br/>Periodo Rotacao:" + data.rotation_period + 
			                       "<br/>Periodo Orbita: " + data.orbital_period +
								   "<br/>Populacao: " + data.population + 
								   "<br/>";
	}});
}