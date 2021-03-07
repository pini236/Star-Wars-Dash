import { Pilot } from "./pilot";

export interface Vehicle {
  name: string;
  url: string;
  pilots: Array<string>;
}
