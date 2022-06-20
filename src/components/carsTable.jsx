import React, { Component } from 'react';
import Like from './common/like';

const CarsTable = (props) => {
    const {cars, onDelete, onLike, onSort} = props

    return ( <table className="table">
    <thead>
      <tr>
        <th onClick={()=> onSort('mileage')}>mileage</th>
        <th onClick={()=> onSort('make')}>make</th>
        <th onClick={()=> onSort('model')}>model</th>
        <th onClick={()=> onSort('fuel')}>fuel</th>
        <th onClick={()=> onSort('gear')}>gear</th>
        <th onClick={()=> onSort('offerType')}>offerType</th>
        <th onClick={()=> onSort('price')}>price</th>
        <th onClick={()=> onSort('hp')}>hp</th>
        <th onClick={()=> onSort('year')}>year</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cars.map((car) => {
        return (
          <tr key={car.id}>
            <td>{car.mileage}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.fuel}</td>
            <td>{car.gear}</td>
            <td>{car.offerType}</td>
            <td>{car.price}</td>
            <td>{car.hp}</td>
            <td>{car.year}</td>
            <td>
              <Like
                liked={car.liked}
                onClick={() => onLike(car)}
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(car)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table> );
}
 
export default CarsTable;