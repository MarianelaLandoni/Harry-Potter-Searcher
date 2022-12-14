import { v4 as uuidv4 } from 'uuid';

function getDataApi() {
  return fetch('https://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character) => {
        return {
          id: uuidv4(),
          name: character.name,
          species: character.species,
          image: character.image,
          gender: character.gender,
          house: character.house,
          alive: character.alive,
          ancestry: character.ancestry,
          actor: character.actor,
        };
      });
      return dataClean;
    });
}

export default getDataApi;
