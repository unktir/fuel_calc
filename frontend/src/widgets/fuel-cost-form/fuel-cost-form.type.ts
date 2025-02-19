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
}

export interface CarFormType {
  car_id?: number;
  distance?: number;
  fuel_cost?: number;
}
