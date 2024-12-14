import type { House } from "../../core/domain/entities/Houses";
import type { IHouseRepository } from "../../core/domain/Repositories/IHouseRepository";
import type { IHouseDataSource } from "../datasources/IHouseDataSource";

export class HouseRepositoryImpl implements IHouseRepository {
  constructor(private dataSource: IHouseDataSource) {}

  async getHouses(from?: number, to?: number): Promise<House[]> {
    return await this.dataSource.getHouses(from, to);
  }
}