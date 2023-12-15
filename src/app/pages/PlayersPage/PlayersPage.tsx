import { AllPlayersList } from "../../components/AllPlayersList/AllPlayersList";
import { FavoritePlayersList } from "../../components/FavoritePlayersList/FavoritePlayersList";
import "./style.css";

export default function PlayersPage() {
  return (
    <div className="players-page">
      <AllPlayersList />
      <FavoritePlayersList />
    </div>
  );
}
