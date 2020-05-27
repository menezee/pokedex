const memoize = func => {
  const memoizedPokemons = new Map();

  return async id => {
    if (memoizedPokemons.has(id)) {
      return memoizedPokemons.get(id);
    }

    memoizedPokemons.set(id, await func(id));
    return memoizedPokemons.get(id);
  }
};

class PokeClient {
  #BASE_HOST = 'https://pokeapi.co/api/v2';

  getById = memoize(async id => (
    (await fetch(`${this.#BASE_HOST}/pokemon/${id}`)).json()
  ));

  getInRange = async listOfIds => {

  };
}

export { PokeClient, };
