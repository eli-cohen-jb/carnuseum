const cars = [
  {
    "id" : 1,
    "mileage": 235000,
    "make": "BMW",
    "model": 316,
    "fuel": "Diesel",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6800,
    "hp": 116,
    "year": 2011,
    "liked":true,
  },
  {
    "id" : 2,
    "mileage": 92800,
    "make": "Volkswagen",
    "model": "Golf",
    "fuel": "Gasoline",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6877,
    "hp": 122,
    "year": 2011
  },
  {
    "id" : 3,
    "mileage": 149300,
    "make": "SEAT",
    "model": "Exeo",
    "fuel": "Gasoline",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6900,
    "hp": 160,
    "year": 2011
  },
  {
    "id" : 4,
    "mileage": 96200,
    "make": "Renault",
    "model": "Megane",
    "fuel": "Gasoline",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6950,
    "hp": 110,
    "year": 2011
  },
  {
    "id" : 5,
    "mileage": 156000,
    "make": "Peugeot",
    "model": 308,
    "fuel": "Gasoline",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6950,
    "hp": 156,
    "year": 2011
  },
  {
    "id" : 6,
    "mileage": 147000,
    "make": "Toyota",
    "model": "Auris",
    "fuel": "Electric/Gasoline",
    "gear": "Automatic",
    "offerType": "Used",
    "price": 6950,
    "hp": 99,
    "year": 2011
  },
  {
    "id" : 7,
    "mileage": 91894,
    "make": "Renault",
    "model": "Scenic",
    "fuel": "Diesel",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6970,
    "hp": 131,
    "year": 2011
  },
  {
    "id" : 8,
    "mileage": 127500,
    "make": "Opel",
    "model": "Zafira",
    "fuel": "Gasoline",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6972,
    "hp": 116,
    "year": 2011
  },
  {
    "id" : 9,
    "mileage": 115000,
    "make": "Mazda",
    "model": 3,
    "fuel": "Gasoline",
    "gear": "Automatic",
    "offerType": "Used",
    "price": 6980,
    "hp": 150,
    "year": 2011
  },
  {
    "id" : 10,
    "mileage": 104,
    "make": "Ford",
    "model": "Transit",
    "fuel": "Diesel",
    "gear": "Manual",
    "offerType": "Used",
    "price": 6990,
    "hp": 86,
    "year": 2011
  }
]

export function getCars(){
  return cars;
}
export function getCar(id){
  return cars.find(c=> c.id === id);
}