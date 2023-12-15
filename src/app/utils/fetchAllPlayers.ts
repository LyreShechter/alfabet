import { PlayersAPI, PlayerAPIData } from "../types/api";

const PLAYERS_API_URL = "https://www.balldontlie.io/api/v1/players";
const PER_PAGE = 100;

export async function fetchAllPlayers() {
  const players: PlayerAPIData[] = [];

  try {
    // Fetch first page
    let res: Response = await fetch(buildQueryUrl(0, PER_PAGE));
    let playersApiData: PlayersAPI = await res.json();

    players.push(...playersApiData.data);

    //  ---------- NOTE ----------
    // Since API limits requests, I can't fetch all players, so we'll stick to 100 :)

    // Fetch the rest of the pages
    // const totalPlayersCount = playersApiData.meta.total_count;
    // while (players.length < totalPlayersCount) {
    //   res = await fetch(buildQueryUrl(playersApiData.meta.next_page, PER_PAGE));
    //   playersApiData = await res.json();
    //   players.push(...playersApiData.data);
    // }
  } catch (e) {
    console.error(`Error while fetching players: ${e}`);
    return [];
  }

  return players;
}

function buildQueryUrl(page: number, perPage: number) {
  const urlParams = new URLSearchParams();

  urlParams.append("page", page.toString());
  // Max 100 items per page (source: API docs)
  urlParams.append("per_page", Math.min(100, perPage).toString());

  return `${PLAYERS_API_URL}?${urlParams.toString()}`;
}
