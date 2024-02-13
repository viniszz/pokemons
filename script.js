function goPage(pokemon) {
    var pagePath;
    if (pokemon == 'pikachu') {
        pagePath = 'pikachu.html';
    } else if (pokemon == 'gengar') {
        pagePath = 'gengar.html';
    } else if (pokemon == 'cubone') {
        pagePath = 'cubone.html';
    } else if (pokemon == 'eevee') {
        pagePath = 'eevee.html';
    } else if (pokemon == 'raichu') {
        pagePath = 'raichu.html';
    } else if (pokemon == 'marowak') {
        pagePath = 'marowak.html';
    } else if (pokemon == 'gastly') {
        pagePath = 'gastly.html';
    } else if (pokemon == 'haunter') {
        pagePath = 'haunter.html';
    } else if (pokemon == 'flareon') {
        pagePath = 'flareon.html';
    } else if (pokemon == 'jolteon') {
        pagePath = 'jolteon.html';
    } else if (pokemon == 'vaporeon') {
        pagePath = 'vaporeon.html';
    }

    window.location.href = pagePath;
}

function clickPokemon(pokemon) {
    goPage(pokemon);
}

function back() {
    window.location.href = "index.html";
}

// Função para lidar com a pesquisa de Pokémon
function searchPokemon() {
    var searchValue = document.getElementById('search-bar').value.toLowerCase(); // Obtém o valor da pesquisa e converte para minúsculas
    var pokemons = document.getElementsByClassName('pokemon'); // Obtém todos os elementos de imagem dos Pokémons
    var displayedPokemonsCount = 0; // Contador para controlar o número de Pokémon exibidos

    // Itera sobre os Pokémons e mostra ou oculta conforme a pesquisa
    Array.from(pokemons).forEach(function(pokemon) {
        var pokemonName = pokemon.classList[1]; // Obtém a classe do Pokémon, que contém seu nome

        // Verifica se o nome do Pokémon corresponde ao valor da pesquisa e define o estilo de exibição
        if (displayedPokemonsCount < 3) { // Verifica se ainda não exibimos 3 Pokémon
            pokemon.style.display = pokemonName.includes(searchValue) ? 'inline-block' : 'none';

            if (pokemon.style.display !== 'none') { // Incrementa o contador se o Pokémon estiver sendo exibido
                displayedPokemonsCount++;
            }
        } else {
            pokemon.style.display = 'none'; // Oculta os Pokémon adicionais se já exibimos 3
        }
    });
}

// Adiciona um ouvinte de eventos de entrada na barra de pesquisa
document.getElementById('search-bar').addEventListener('input', searchPokemon);
