export type PlayerAPIData = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
  team: TeamAPIData;
};

export type TeamAPIData = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};

export type APIMetaData = {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
};

export type PlayersAPI = {
  data: PlayerAPIData[];
  meta: APIMetaData;
};
