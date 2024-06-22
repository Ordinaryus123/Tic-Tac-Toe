import { useState } from "react";

export default function Player({ initalName, symbol, isActive }) {
  const [isEditting, setIsEditting] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleEditClick() {
    setIsEditting((editting) => !editting);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {" "}
          {!isEditting && playerName}{" "}
          {isEditting && (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
