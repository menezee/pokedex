import { useEffect, useState } from 'react';

import { PokeClient } from '../clients';

const usePokemon = id => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    let curr = true;

    (async () => {
      const poke = await PokeClient.getById(id);
      if (curr) {
        setPokemon(poke);
      }
    })();

    return () => curr = false;
  }, [id]);

  return pokemon;
};

export { usePokemon, };
