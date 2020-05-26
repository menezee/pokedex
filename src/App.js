import React from 'react';

import { usePokemon } from './hooks';

const App = () => {
  const pokemon = usePokemon(1);

  return (
    <main>
      <h1>{ pokemon?.name }</h1>
    </main>
  );
};

export default App;
