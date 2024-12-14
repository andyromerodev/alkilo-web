import type { House } from "../../../core/domain/entities/Houses";
import type { IHouseRepository } from "../../../core/domain/Repositories/IHouseRepository"

export class GetHousesUseCase {
  constructor(private houseRepository: IHouseRepository) {}

  async execute(from?: number, to?: number): Promise<House[]> {
    return await this.houseRepository.getHouses(from, to);
  }
}