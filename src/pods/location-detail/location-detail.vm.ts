export interface LocationEntityVm {
  id: number;
  image: string;
  name: string;
  type: string; 
  dimension: string;
  residents: string[];
}

export const createEmptyLocation = (): LocationEntityVm => ({
  id: 0,
  image: "",
  name: "",
  type: "",
  dimension: "",
  residents: [],
});
