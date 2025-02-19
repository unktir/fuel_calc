export interface FuelCostResultType {
  trips: TripType[];
}

export interface TripType {
  car?: string;
  distance?: number;
  total_fuel?: number;
  total_cost?: number;
  recommendations?: string;
}
