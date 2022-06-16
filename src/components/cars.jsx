import React, { Component } from 'react';

import Like from './common/like';
import Pagination from './common/pagination';
import { getCars } from '../services/fakeCarsService';
import { paginate } from '../utils/paginate';

class Cars extends Component {
    state = { 
        cars_lst : getCars(),
        pageSize : 30,
        currentPage: 1
     }
    
    handleDelete = (car)=> {
        console.log(car)
        const cars = this.state.cars_lst.filter(c=> c.id !== car.id);
        this.setState({cars_lst : cars})
    }
    handleLike = (car)=> {
        console.log('like', car);
        const cars = [...this.state.cars_lst];
        const index = cars.indexOf(car);
        cars[index] = {...cars[index]};
        cars[index].liked = !cars[index].liked;
        this.setState({cars_lst:cars})
    }

    handlePageChange = page =>{
        console.log(page)
        this.setState({currentPage : page})
    }
    

    render() {
        const count = this.state.cars_lst.length 
        if (this.state.cars_lst.length === 0)
            return <h1>No cars</h1>

        const cars = paginate(this.state.cars_lst,  this.state.currentPage, this.state.pageSize)
        return (
          <React.Fragment>
            <p>There's ({count}) cars in the inventory</p>
            <table className="table">
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
                          onClick={() => this.handleLike(car)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDelete(car)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              itemCount={count}
              pageSize={this.state.pageSize}
              currentPage = {this.state.currentPage}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </React.Fragment>
        );
    }
}
 
export default Cars;