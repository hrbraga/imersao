function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        alert("Digite um ano para pesquisa.")
        return
    }

    if (campoPesquisa >= 1903 && campoPesquisa <= 2024) {
        let resultados = "";

        for (let dado of ano) {

            if (dado.ano.includes(campoPesquisa)) {
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
        }
        section.innerHTML = resultados
    } else {
        alert("Não há provas registradas para o ano informado.");
    }
}