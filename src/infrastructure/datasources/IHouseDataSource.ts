import type { House } from "../../core/domain/entities/Houses";

export interface IHouseDataSource {
  getHouses(from?: number, to?: number): Promise<House[]>;
}