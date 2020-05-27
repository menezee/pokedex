import React, { useState } from 'react';

import { usePokemon } from './hooks';

const App = () => {
  const [id, setId] = useState('')
  const pokemon = usePokemon(id);

  return (
    <main className='app'>
      <h1>{pokemon?.name}</h1>
      <input maxLength={1} onChange={e => { setId(e.target.value); }} />
    </main>
  );
};

export default App;
