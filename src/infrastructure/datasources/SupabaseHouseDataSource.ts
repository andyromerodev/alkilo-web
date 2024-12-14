import type { House } from "../../core/domain/entities/Houses";
import { supabase } from "../../lib/supabase";
import type { IHouseDataSource } from "./IHouseDataSource";

export class SupabaseHouseDataSource implements IHouseDataSource {
    private readonly TABLE_NAME = 'houses_beach';
    

    private handleError(error: Error, context: string): never {
      throw new Error(`[SupabaseHouseDataSource] ${context}: ${error.message}`);
    }
  
    async getHouses(from: number = 0, to: number = 9): Promise<House[]> {
      try {
        const { data, error } = await supabase
          .from(this.TABLE_NAME)
          .select('*')
          .order('id', { ascending: true })
          .range(from, to);

        if (error) throw error;
        if (!data) return [];

        return data as House[];
      } catch (error) {
        this.handleError(error as Error, 'Error fetching houses');
      }
    }
}