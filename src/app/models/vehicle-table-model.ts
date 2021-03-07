import { Planet } from "./planet";

export interface VehicleTableModel {
  name: string;
  populationSum: number;
  planets: Array<Planet>;
  pilots: Array<string>;
}
