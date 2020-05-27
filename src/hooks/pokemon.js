import { useEffect, useState, useMemo } from 'react';

import { PokeClient } from '../clients';

const usePokemon = id => {
  const [pokemon, setPokemon] = useState(null);
  const pokeClient = useMemo(() => new PokeClient(), []);

  const isValidId = id => {
    const idAsNumber = Number(id);
    return Number.isInteger(idAsNumber) && idAsNumber > 0;
  };

  useEffect(() => {
    let curr = true;

    if (isValidId(id)) {
      (async () => {
        const poke = await pokeClient.getById(id);
        if (curr) {
          setPokemon(poke);
        }
      })();
    }

    return () => curr = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return pokemon;
};

export { usePokemon, };
