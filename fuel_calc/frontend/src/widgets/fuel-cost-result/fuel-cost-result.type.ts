export interface FuelCostResultType {
  trips: TripType[];
}

export interface TripType {
  car?: string;
  fuel_needed?: number;
  total_cost?: number;
  refuels?: number;
}
