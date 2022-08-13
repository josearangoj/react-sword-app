import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { CharactersScreen } from "../screens/CharactersScreen";
import { WinnerScreen } from "../screens/WinnerScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { BattlegroundScreen } from "../screens/BattlegroundScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddCharacterScreen } from "../screens/AddCharacterScreen";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [winner, setWinner] = useState(null);
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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginScreen />} />
          <Route path="/characters" element={<CharactersScreen />} />
          <Route path="/winner" element={<WinnerScreen winner={winner} />} />
          <Route path="/manageCharacter" element={<AddCharacterScreen />} />
          <Route
            path="/battleground"
            element={
              <BattlegroundScreen setWinner={setWinner} winner={winner} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};