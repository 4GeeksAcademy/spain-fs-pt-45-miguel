import React, { useState, useEffect } from 'react';

import ListItem from './components/ListItem';
import  charactersData from './data';

function App() {
  const [characters, setCharacters] = useState(charactersData);

  const handleDeleteCharacter = (uid) => {
    const newList = characters.filter(character => character.uid !== uid);
    setCharacters(newList);
  }

  return (
    <React.Fragment>
      <div className="container">
        <ul className="list-group">
          {characters.map((character) => (
            <ListItem
              className="list-group-item"
              {...character}
              key={character.uid}
              onDeleteCharacter={handleDeleteCharacter} // callback props
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App
