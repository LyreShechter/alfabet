import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerData } from "../../types/player";

type PlayersState = {
  data: PlayerData[];
};

const initialState: PlayersState = {
  data: [],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<PlayerData[]>) => {
      state.data = action.payload;
    },
    toggleFavorite: (
      state,
      action: PayloadAction<{ playerId: number; isFavorite: boolean }>
    ) => {
      const player = state.data.find((p) => p.id === action.payload.playerId);
      if (player) {
        player.isFavorite = action.payload.isFavorite;
      }
    },
  },
});

export const { toggleFavorite, setPlayers } = playersSlice.actions;
export default playersSlice.reducer;
