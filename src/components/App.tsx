import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { CharactersScreen } from "./screens/CharactersScreen";
import { Login } from "./Login/Login";
import { Battleground } from "./Battleground/Battleground";
import { Text } from "@chakra-ui/react";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFightGoingOn, setFightStart] = useState(false);
  const [battleCharacters, setBattleCharacters] = useState([]);
  const [winner, setWinner] = useState(null);
  const characters = [
    {
      name: "Goku",
      health: 100,
      fraction: "Saiyan",
      weapon: "Ki",
      damagePerHit: 25,
    },
    {
      name: "Bobrik",
      health: 150,
      fraction: "Random",
      weapon: "Bow",
      damagePerHit: 19,
    },
    {
      name: "Valera",
      health: 80,
      fraction: "Ukraine",
      weapon: "Tanto",
      damagePerHit: 15,
    },
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    //We can use React.Fragment instead of div
    //In react we can't render objects or arrays
    return <>Error: {error.message} </>;
  }
  console.log("Selected characters", battleCharacters);

  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn && !isFightGoingOn ? (
        <CharactersScreen
          characters={characters}
          setFightStart={setFightStart}
          setBattleCharacters={setBattleCharacters}
        />
      ) : null}
      {isFightGoingOn && !winner ? (
        <Battleground
          winner={winner}
          setWinner={setWinner}
          battleCharacters={battleCharacters}
        />
      ) : null}
      {isFightGoingOn && winner ? (
        <Text fontSize={"5xl"} fontWeight="800">
          Winner of the battle is {winner}
        </Text>
      ) : null}
    </div>
  );
};