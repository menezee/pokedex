const BASE_HOST = 'https://pokeapi.co/api/v2';

const PokeClient = {
  getById: async id => (
    (await fetch(`${BASE_HOST}/pokemon/${id}`)).json()
  ),
};

export { PokeClient, };
