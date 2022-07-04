import React from "react";

export const sampleComponent = () => {
  const header = (
    //we can only use className in JSX, because class is a reserved word in JS
    //JSX can have only one parent element
    <div className="App">
      <h1 className="jsx-style">Hello, Sword Art Gamers</h1>
      <h3>Welcome</h3>
    </div>
  );

  const transformCharacterToListItem = (character: any) => {
    return (
      //When you use repeating elements in JSX, you should use key attribute
      //It's required for React to be able to update the element
      <li key={character.name}>
        <h3>{character.name}</h3>
        <p>{character.health}</p>
        <p>{character.fraction}</p>
        <p>{character.weapon}</p>
        <p>{character.damagePerHit}</p>
      </li>
    );
  };

  const swordArtHeader = React.createElement(
    "h1",
    { className: "sword-art-header" },
    "Hello, Sword Art Gamers"
  );

  return <div>sampleComponent</div>;
};