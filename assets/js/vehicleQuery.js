

// Query utilizado na consulta
const query = `
query Busca($previous: String, $next: String, $query: JSON, $limit: Int, $type: ResultType!) {
	search(previous: $previous, next: $next, query: $query, limit: $limit, type: $type) {
		results {
			... on Veiculo {
				_id
				marca
				modelo
				descricao
				ano_fabricacao
				ano_modelo
			}
		}
		hasNext
		next
		hasPrevious
		previous
	}
}
`




// Faz a consulta
fetch('https://service.teleport.com.br/teste-veiculo/v1/gql', {
	mode: 'cors',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		operationName: 'Busca',
		variables: {
			type: 'VEICULO'
		},
		query
	})
})

	//Tratamento da consulta

	.then(response => {
		if (!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	})


	.then(data => {
		const html = data.data.search.results.map(veiculo => {
			return `
			
			<tbody>
				<tr onclick='getInfoCar("Marca: ${veiculo.marca}<br>Modelo: ${veiculo.modelo}<br>Ano Fabricação: ${veiculo.ano_modelo}<br>Ano Modelo: ${veiculo.ano_fabricacao}");' class="  changeCursor ">

					<td class="p-2 card-text ">${veiculo.modelo}</td>
					<td class="p-2 card-text">${veiculo.marca}</td>
					<td class="p-2 card-text">${veiculo.ano_modelo}</td>	
					<td class="p-2 card-text"><hr></td>	
					<td class=" card-text text-center pb-4"> <a ><img class="style-img-tag" src="layout/icons/tag.svg" width="20px" onclick='unavailableFunction("${veiculo.descricao}");' alt="botão de tag"
					srcset=""></a></td>	

				</tr>
				
				<br>  
				</tbody>  
	
			`;

		})
			.join("")


		document.querySelector("table").insertAdjacentHTML("afterbegin", html)
			;

		search();



	}).catch(error => {
		console.log(error);
	});

//Função responsável por retornar o alerta de função indisponível
function unavailableFunction() {
	alert("Função indisponível :/");
}

//Função responsável por pegar os dados do veículo
function getInfoCar(vehicle_info) {

	let vehicle = document.querySelector("#info-car");
	let easterEgg1 = document.querySelector(".easterEgg1");
	let easterEgg2 = document.querySelector(".easterEgg2");
	vehicle.innerHTML = vehicle_info;
	easterEgg1.removeAttribute("hidden");
	easterEgg2.removeAttribute("hidden");

}

//Função responsável por adicionar novos veículos
function add() {
	let inputValor = document.querySelector(".input-add-style").value;
	let myString = inputValor;
	let splits = myString.split(' ', 4);
	let conteudoHTML = `
	<tbody>
	<tr onclick='getInfoCar("Marca: ${splits[1]}<br>Modelo: ${splits[0]}<br>Ano Fabricação: ${splits[2]}<br>Ano Modelo: ${splits[3]}");' class="  changeCursor ">

					<td class="p-2 card-text ">${splits[0]}</td>
					<td class="p-2 card-text">${splits[1]}</td>
					<td class="p-2 card-text">${splits[2]}</td>	
					<td class="p-2 card-text"><hr></td>	
					<td class=" card-text text-center pb-4"> <a ><img class="style-img-tag" src="layout/icons/tag.svg" width="20px" onclick='unavailableFunction("${inputValor}");' alt="botão de tag"
					srcset=""></a></td>	

				</tr>
				
		
				</tbody>  
	<br>
	`

	if (inputValor != "" && splits.length == 4) {
		document.querySelector("table").insertAdjacentHTML("afterbegin", conteudoHTML)
			;

	} else {
		alert("[ATENÇÃO] Você não preencheu corretamente os dados.\n\nO modelo de preeenchimento é:\nMODELO MARCA ANO_FABRICACAO ANO_MODELO\n\nExemplo: HB20 HONDA 2019 2020");

	}

}
//Função responsavel pela pesquisa dos carros
function search() {
	var filter = document.getElementById('filter-vehicle');

	var table = document.getElementById('list');
	filter.onkeyup = function () {
		var nameFilter = filter.value;
		for (var i = 1; i < table.rows.length; i++) {
			var content = table.rows[i].cells[0].innerText;
			var match = content.toLowerCase().indexOf(nameFilter) >= 0;
			table.rows[i].style.display = match ? '' : 'none';
		}
	};
}

//Funções adicionais//
function FirstEasterEgg() {
	alert("Apesar de não ter conseguido implementar todo o desafio proposto... (clique no próximo Easter Egg)");
}
function SecondEasterEgg() {
	alert("Sou muito dedicado, sei que se me derem uma chance posso evoluir e surpreender :)");
}

function bestCompany() {
	alert("Melhor empresa! :D");
}

