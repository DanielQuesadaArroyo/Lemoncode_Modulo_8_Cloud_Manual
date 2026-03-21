export interface Root {
  info: Info;
  locations: Location[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
