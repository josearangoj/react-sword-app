import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import "./CharacterListItem.css";

export const CharacterListItem = ({ character, isChampion }) => {
  const { name, health, fraction, weapon, damagePerHit } = character;
  return (
    <Tr key={name}>
      <Td className="character-name">
        {isChampion ? `Champion ${name}` : name}
      </Td>
      <Td isNumeric>{health}</Td>
      <Td>{fraction}</Td>
      <Td>{weapon}</Td>
      <Td isNumeric>{damagePerHit}</Td>
    </Tr>
  );
};