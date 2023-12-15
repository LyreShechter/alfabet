import { PlayerAPIData } from "./api";

export type PlayerData = PlayerAPIData & {
  isFavorite?: boolean;
};
