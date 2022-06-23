import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Table from "./common/table";

class FuleTable extends Component {
  state = {};
  columns = [
    { path: "id", label: "id" },
    { path: "Country", label: "Country"},
    { path: "Daily Oil Consumption (Barrels)", label: "Daily Oil Consumption (Barrels)" },
    { path: "World Share", label: "World Share" },
    { path: "Yearly Gallons Per Capita", label: "Yearly Gallons Per Capita" },
    { path: "Price Per Gallon (USD)", label: "Price Per Gallon (USD)" },
    { path: "Price Per Liter (USD)", label: "Price Per Liter (USD)" },
    { path: "Price Per Liter (PKR)", label: "Price Per Liter (PKR)" },
    
    {
      key: "delete",
      content: (car) => (
        <button
          onClick={() => this.props.onDelete(car)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { cars, onDelete, onSort, onLike, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={cars}
        onSort={onSort}
        sortColumn={sortColumn}
      ></Table>
    );
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

export default FuleTable;
