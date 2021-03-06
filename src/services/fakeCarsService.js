import _ from "lodash"
const cars = [
  {
    "id" : 1,
    "mileage": 235000,
    "make": "BMW",
    "model": 316,
    "fuel": {"id ": 1, "name": "Diesel"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6800,
    "hp": 116,
    "year": 2011,
    "liked" :true,
  },
  {
    "id" : 2,
    "mileage": 92800,
    "make": "Volkswagen",
    "model": "Golf",
    "fuel": {"id ": 2, "name": "Gasoline"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6877,
    "hp": 122,
    "year": 2013,
    "liked" :false,
  },
  {
    "id" : 3,
    "mileage": 149300,
    "make": "SEAT",
    "model": "Exeo",
    "fuel": {"id ": 2, "name": "Gasoline"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6900,
    "hp": 160,
    "year": 2013,
    "liked" :false,
  },
  {
    "id" : 4,
    "mileage": 96200,
    "make": "Renault",
    "model": "Megane",
    "fuel": {"id ": 2, "name": "Gasoline"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6950,
    "hp": 110,
    "year": 2013,
    "liked" :false,
  },
  {
    "id" : 5,
    "mileage": 156000,
    "make": "Peugeot",
    "model": 308,
    "fuel": {"id ": 2, "name": "Gasoline"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6950,
    "hp": 156,
    "year": 2000,
    "liked" :false,
  },
  {
    "id" : 6,
    "mileage": 147000,
    "make": "Toyota",
    "model": "Auris",
    "fuel": {"id ": 3, "name": "Electric/Gasoline"},
    "gear": "Automatic",
    "offerType": "Used",
    "price": 6950,
    "hp": 99,
    "year": 2011,
    "liked" :false,
  },
  {
    "id" : 7,
    "mileage": 91894,
    "make": "Renault",
    "model": "Scenic",
    "fuel": {"id ": 1, "name": "Diesel"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6970,
    "hp": 131,
    "year": 2011,
    "liked" :false,
  },
  {
    "id" : 8,
    "mileage": 127500,
    "make": "Opel",
    "model": "Zafira",
    "fuel": {"id ": 2, "name": "Gasoline"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6972,
    "hp": 116,
    "year": 2011,
    "liked" :false,
  },
  {
    "id" : 9,
    "mileage": 115000,
    "make": "Mazda",
    "model": 3,
    "fuel": {"id ": 2, "name": "Gasoline"},
    "gear": "Automatic",
    "offerType": "Used",
    "price": 6980,
    "hp": 150,
    "year": 2013,
    "liked" :false,
  },
  {
    "id" : 10,
    "mileage": 104,
    "make": "Ford",
    "model": "Transit",
    "fuel": {"id ": 1, "name": "Diesel"},
    "gear": "Manual",
    "offerType": "Used",
    "price": 6990,
    "hp": 86,
    "year": 2013,
    "liked" :false,
  }
]

export function getCars(){
  return cars;
}
export function getCar(id){
  return cars.find(c=> c.id === id);
}

export function getYears(){
  
  console.log ('*******', _.uniqBy(cars.map(c=>  {return {'id':c.year, 'name':c.year}}), 'id'));
  // return [{'id':2010, 'name':2010},
  // {'id':2011, 'name':2011},
  // {'id':2012, 'name':2012},
  // {'id':2013, 'name':2013},]
  // return cars.map(c=>  {return {'id':c.year, 'name':c.year}})
  return _(cars.map(c=>  {return {'id':c.year, 'name':c.year}})).uniqBy('id').orderBy('id')
}