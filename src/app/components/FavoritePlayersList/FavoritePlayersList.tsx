import { useState } from "react";
import { usePlayers } from "../../hooks/usePlayers";
import { PlayerItem } from "../../components/PlayerItem/PlayerItem";
import "./style.css";

const bgColors = ["White", "Pink", "Yellow", "Green"];

export function FavoritePlayersList() {
  const players = usePlayers();
  const [backgroundColor, setBackgroundColor] = useState<string>(bgColors[0]);

  const favoritePlayers = getFavoritePlayers();

  function getFavoritePlayers() {
    return players.filter((player) => player.isFavorite);
  }

  function onSelectBgColor(e: React.ChangeEvent<HTMLSelectElement>) {
    setBackgroundColor(e.target.value);
  }

  return (
    <div className="favorite-players-content">
      <h2>Favorites</h2>
      <label>Select Background Color </label>
      <select value={backgroundColor} onChange={onSelectBgColor}>
        {bgColors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <ul style={{ backgroundColor: backgroundColor }}>
        {favoritePlayers.length === 0 && <li>No favorite players...</li>}
        {favoritePlayers.map((player) => (
          <li key={player.id}>
            <PlayerItem player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
}
