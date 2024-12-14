import type { House } from "../entities/Houses";

export interface IHouseRepository {
  getHouses(from?: number, to?: number): Promise<House[]>;
}