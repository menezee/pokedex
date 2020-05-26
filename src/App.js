import React, { useEffect } from 'react';

import { PokeClient } from './clients';

function App() {
  useEffect(() => {
    (async () => {
      console.log(await PokeClient.getById(1));
    })();
  }, []);

  return (
    <div>
      app
    </div>
  );
}

export default App;
