import React, { Component } from 'react';
import Like from './common/like';

class CarsTable extends Component {
  state = {  } 

  raisSort = path =>{
    let sortColumn = {...this.props.sortColumn};    
    if(sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else 
      sortColumn = {path: path,  order: 'asc'};

    this.props.onSort(sortColumn);
  }

  render() { 
    const {cars, onDelete, onLike} = this.props
    return ( <table className="table">
    <thead>
      <tr>
        <th onClick={()=> this.raisSort('mileage')}>mileage</th>
        <th onClick={()=> this.raisSort('make')}>make</th>
        <th onClick={()=> this.raisSort('model')}>model</th>
        <th onClick={()=> this.raisSort('fuel')}>fuel</th>
        <th onClick={()=> this.raisSort('gear')}>gear</th>
        <th onClick={()=> this.raisSort('offerType')}>offerType</th>
        <th onClick={()=> this.raisSort('price')}>price</th>
        <th onClick={()=> this.raisSort('hp')}>hp</th>
        <th onClick={()=> this.raisSort('year')}>year</th>
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
}
 


// const CarsTable = (props) => {
//     const {cars, onDelete, onLike, onSort} = props

  //   return ( <table className="table">
  //   <thead>
  //     <tr>
  //       <th onClick={()=> onSort('mileage')}>mileage</th>
  //       <th onClick={()=> onSort('make')}>make</th>
  //       <th onClick={()=> onSort('model')}>model</th>
  //       <th onClick={()=> onSort('fuel')}>fuel</th>
  //       <th onClick={()=> onSort('gear')}>gear</th>
  //       <th onClick={()=> onSort('offerType')}>offerType</th>
  //       <th onClick={()=> onSort('price')}>price</th>
  //       <th onClick={()=> onSort('hp')}>hp</th>
  //       <th onClick={()=> onSort('year')}>year</th>
  //       <th></th>
  //       <th></th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {cars.map((car) => {
  //       return (
  //         <tr key={car.id}>
  //           <td>{car.mileage}</td>
  //           <td>{car.make}</td>
  //           <td>{car.model}</td>
  //           <td>{car.fuel}</td>
  //           <td>{car.gear}</td>
  //           <td>{car.offerType}</td>
  //           <td>{car.price}</td>
  //           <td>{car.hp}</td>
  //           <td>{car.year}</td>
  //           <td>
  //             <Like
  //               liked={car.liked}
  //               onClick={() => onLike(car)}
  //             />
  //           </td>
  //           <td>
  //             <button
  //               onClick={() => onDelete(car)}
  //               className="btn btn-danger btn-sm"
  //             >
  //               Delete
  //             </button>
  //           </td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table> );
// }
 
export default CarsTable;