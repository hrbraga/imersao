function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";
    
    for (let dado of ano) {
        resultados += `
        <div class="item-resultado">
                <p class="ano-prova">${dado.ano}</p>
                <p class="nome-ciclista">${dado.ciclista}</p>
                <p class="pais-ciclista">${dado.pais}</p>
            <div class="prova">
                <p class="distancia-prova"><i class="fas fa-biking icone"></i> ${dado.distancia}</p>
                <p class="tempo-prova"><i class="fas fa-stopwatch icone"></i> ${dado.tempo}</p>
           </div>
        </div>
    `
    }
    
    section.innerHTML = resultados
}