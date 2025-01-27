import './App.css';
import Laskuri from './Laskuri';
import Viesti from './Viesti';
import React, { useState } from "react";
import Posts from './Posts';
const App = () => {
  const [showLaskuri, setShowLaskuri] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, World!
        </p>
        <Posts />

        {showLaskuri && <Laskuri />}
        {showLaskuri && <button onClick={() => setShowLaskuri(false)}>Piilota Laskuri</button>}
        {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>Näytä Laskuri</button>}

        <Viesti teksti="This is a message"></Viesti>
        <Viesti teksti_2="This is another message"></Viesti>
      </header>
    </div>
  );
}

export default App;
