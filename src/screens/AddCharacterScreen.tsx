import { Alert, AlertIcon, Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { clear } from "@testing-library/user-event/dist/clear";
import { addCharacter, Character, setCharacterToUpdate, updateCharacter } from "../slices/charactersSlice";

export const AddCharacterScreen = () => {
  const character = useSelector(
    (state: any) => state.characters.characterToUpdate
  );
  const [name, setName] = useState(character ? character.name : "");
  const [damagePerHit, setDamagePerHit] = useState(
    character ? character.damagePerHit : ""
  );
  const [health, setHealth] = useState(character ? character.health : "");
  const [fraction, setFraction] = useState(character ? character.fraction : "");
  const [weapon, setWeapon] = useState(character ? character.weapon : "");

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const validateValues = () => {
    const damage = parseInt(damagePerHit);
    const hp = parseInt(health);
    if (
      name.length === 0 ||
      damage < 0 ||
      hp < 0 ||
      fraction.length === 0 ||
      weapon.length === 0
    ) {
      setIsAlertVisible(true);
      return false;
    }
    return true;
  };

  const handleCharacterAddition = () => {
    if (!validateValues()) {
      return;
    }
    setIsAlertVisible(false);
    const newCharacter = {
      name,
      damagePerHit: parseInt(damagePerHit),
      health: parseInt(health),
      fraction,
      weapon,
    };
    dispatch(addCharacter(newCharacter as Character));
    navigate("/characters");
  };

  const handleCharacterToUpdate = () => {
    if (!validateValues) {
      return;
    }
    setIsAlertVisible(false);
    const characterToUpdate = {
      name,
    };
    dispatch(updateCharacter(characterToUpdate as Character));
    navigate("/manageCharacters");
  };

  const handleCharacterUpdate = () => {
    name, 


  setIsAlertVisible(false);
  const newCharacter = {
    id: character.id,
    name,
    damagePerHit: parseInt(damagePerHit),
    health: parseInt(health),
    fraction,
    weapon,
  };
  };
  dispatch(updateCharacter(characterToUpdate as Character));
  dispatch(updateCharacter(newCharacter as Character));
  navigate("/characters");
};

  const alert = (
    <Alert status="error">
      <AlertIcon />
      Please make sure your inputs are valid!
    </Alert>
  );
  return (
    <Stack spacing={4}>
      <Input
        type="text"
        value={health}
        placeholder="Please enter a character health"
        onChange={(e) => setHealth(e.target.value)}
      />
      <Input
        type="text"
        value={damagePerHit}
        placeholder="Please enter a character damage per hit"
        onChange={(e) => setDamagePerHit(e.target.value)}
      />
      <Input
        type="text"
        value={weapon}
        onChange={(e) => setWeapon(e.target.value)}
        placeholder="Please enter a character weapon"
      />
      <Button onClick={handleCharacterAddition}>
        {character ? "Add Character" : "Update Character"}
      </Button>
      <Button onClick={character ? handleCharacterUpdate : handleCharacterAddition}>
        {character ? "Uptade Character" : "Add Character"}
      </Button>
      {isAlertVisible && alert}
    </Stack>
  );
};
