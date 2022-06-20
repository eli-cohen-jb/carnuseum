import React, { Component } from 'react';
import Like from './common/like';

const CarsTable = (props) => {
    const {cars, onDelete, onLike} = props

    return ( <table className="table">
    <thead>
      <tr>
        <th>mileage</th>
        <th>make</th>
        <th>model</th>
        <th>fuel</th>
        <th>gear</th>
        <th>offerType</th>
        <th>price</th>
        <th>hp</th>
        <th>year</th>
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