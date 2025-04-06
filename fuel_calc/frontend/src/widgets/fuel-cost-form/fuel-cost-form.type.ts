import { Dispatch, SetStateAction } from 'react';

export interface FuelCostFormType {
  onSubmit: Dispatch<SetStateAction<CarFormType>>;
}

export interface CarType {
  id?: number;
  name?: string;
  fuel_consumption?: number;
  engine_type?: string;
  tank_capacity?: number;
  manufacturer?: string;
  year?: number;
  image?: string;
  image_url?: string;
}

export interface CarFormType {
  car_id?: number;
  distance_km?: number;
  fuel_price?: number;
}
