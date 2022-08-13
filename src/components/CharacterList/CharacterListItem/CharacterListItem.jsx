import { Td, Tr, Button } from "@chakra-ui/react";
import React from "react";
import React from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setCharacterToUpdate } from "../../../slices/charactersSlice";
import "./CharacterListItem.css";
import "./CharacterListItem.css";
import { useNavigate } from "react-router-dom";


//React component can receive one argument: props
//React component can receive one argument: props
//You can pass data to the react component by using props.
//You can pass data to the react component by using props.
//Props is an object that groups data that is passed to a component.
//Props is an object that groups data that is passed to a component.
export const CharacterListItem = ({ character, isChampion }) => {
export const CharacterListItem = ({ character, isChampion }) => {
  const { name, health, fraction, weapon, damagePerHit } = character;
  const { name, health, fraction, weapon, damagePerHit } = character;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    dispatch(setCharacterToUpdate(character));
    navigate("/manageCharacter");
  }
  return (
  return (
    //When you use repeating elements in JSX, you should use key attribute
    //When you use repeating elements in JSX, you should use key attribute
    //It's required for React to be able to update the element
    //It's required for React to be able to update the element
    <Tr key={name}>
    <Tr key={name}>
      <Td className="character-name">
      <Td className="character-name">
        {isChampion ? `Champion ${name}` : name}
        {isChampion ? `Champion ${name}` : name}
      </Td>
      </Td>
      <Td isNumeric>{health}</Td>
      <Td isNumeric>{health}</Td>
      <Td>{fraction}</Td>
      <Td>{fraction}</Td>
      <Td>{weapon}</Td>
      <Td>{weapon}</Td>
      <Td isNumeric>{damagePerHit}</Td>
      <Td isNumeric>{damagePerHit}</Td>
      <Td><Button colorScheme={"blue"} onClick={handleUpdate}>Update Character</Button></Td>
    </Tr>
    </Tr>
  );
  );
};
};