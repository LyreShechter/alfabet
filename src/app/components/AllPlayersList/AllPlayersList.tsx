import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPlayers } from "../../utils/fetchAllPlayers";
import { usePlayers } from "../../hooks/usePlayers";
import { setPlayers } from "../../store/slices/playersSlice";
import { PlayerData } from "../../types/player";
import { PlayerItem } from "../../components/PlayerItem/PlayerItem";
import { debounce } from "../../utils/debounce";
import "./style.css";

export function AllPlayersList() {
  const dispatch = useDispatch();
  const players = usePlayers();

  const [searchInput, setSearchInput] = useState<string>("");

  const filteredPlayers = getFilteredPlayers();

  // On mount - fetch all players and save them in the store
  useEffect(() => {
    async function fetchAndSavePlayers() {
      const playersData = (await fetchAllPlayers()) as PlayerData[];
      dispatch(setPlayers(playersData));
    }

    fetchAndSavePlayers();
  }, [dispatch]);

  function getFilteredPlayers() {
    if (!searchInput.trim()) return players;

    // Filter player by name
    return players.filter(({ first_name, last_name }) => {
      const fullname = `${first_name} ${last_name}`;

      // Ignore casing
      return fullname.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  // Debounce search to prevent lag
  const debouncedSearchChange = debounce(onSearchChange, 300);

  return (
    <div className="all-players-content">
      <h2>All Players</h2>
      <input
        type="text"
        placeholder="Search Player..."
        value={searchInput}
        onChange={onSearchChange}
      />
      <ul>
        {filteredPlayers.length === 0 && <li>Loading Players...</li>}
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <PlayerItem player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
}
