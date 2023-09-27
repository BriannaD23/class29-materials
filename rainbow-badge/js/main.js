document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const poke1 = document.querySelector('#poke1').value;
  const poke2 = document.querySelector('#poke2').value;
  const url1 = 'https://pokeapi.co/api/v2/pokemon/' + poke1;
  const url2 = 'https://pokeapi.co/api/v2/pokemon/' + poke2;

  // Function to display Pokémon data and images
  function displayPokemonData(data, imgElement) {
    imgElement.src = data.sprites.front_default;
  }

  fetch(url1)
    .then((res) => res.json()) // parse response as JSON
    .then((data1) => {
      // Display the first Pokémon's image
      const pokeImg1 = document.querySelector('#pokeImg1');
      displayPokemonData(data1, pokeImg1);

      fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data2) => {
          // Display the second Pokémon's image
          const pokeImg2 = document.querySelector('#pokeImg2');
          displayPokemonData(data2, pokeImg2);

          // Check the types and update the result
          if (
            data1.types[0].type.name === 'grass' &&
            data2.types[0].type.name === 'water'
          ) {
            document.querySelector('h2').innerText = '2x >';
          } else {
            document.querySelector('h2').innerText = '';
          }
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}