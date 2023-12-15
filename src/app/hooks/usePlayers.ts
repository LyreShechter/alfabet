import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function usePlayers() {
  return useSelector((state: RootState) => state.players.data);
}
