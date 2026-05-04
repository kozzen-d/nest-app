export default interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
}

export type CarCreateInput = Omit<Car, 'id'>;
export type CarUpdateInput = Partial<CarCreateInput>;
