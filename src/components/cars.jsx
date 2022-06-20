import React, { Component } from "react";

import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getCars, getYears } from "../services/fakeCarsService";
import { paginate } from "../utils/paginate";

class Cars extends Component {
  state = {
    cars_lst: [],
    years: [],
    pageSize: 3,
    currentPage: 1,
  };
  componentDidMount() {
    this.setState({
      cars_lst: getCars(),
      years: [{'name':'All'}, ...getYears()],
    });
  }
  handleDelete = (car) => {
    console.log(car);
    const cars = this.state.cars_lst.filter((c) => c.id !== car.id);
    this.setState({ cars_lst: cars });
  };
  handleLike = (car) => {
    console.log("like", car);
    const cars = [...this.state.cars_lst];
    const index = cars.indexOf(car);
    cars[index] = { ...cars[index] };
    cars[index].liked = !cars[index].liked;
    this.setState({ cars_lst: cars });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleYearSelect = (year) => {
    this.setState({ selectedYear: year, currentPage: 1 });
  };

  render() {
    const count = this.state.cars_lst.length;

    const { pageSize, currentPage, selectedYear, cars_lst } = this.state;

    if (this.state.cars_lst.length === 0) return <h1>No cars</h1>;

    const filterd = selectedYear && selectedYear.id
      ? cars_lst.filter((c) => c.year === selectedYear.id)
      : cars_lst;

    // const cars = paginate(pageSize, currentPage, cars_lst);
    const cars = paginate(filterd,  this.state.currentPage, this.state.pageSize)

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.years}
            selectedItem={this.state.selectedYear}
            onItemSelect={this.handleYearSelect}
          ></ListGroup>
        </div>
        <div className="col">
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
            itemCount={filterd.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default Cars;
