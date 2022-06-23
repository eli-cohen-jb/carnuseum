import React, { Component } from "react";

import CarsTable from "./carsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getCars, getYears } from "../services/fakeCarsService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Cars extends Component {
  state = {
    cars_lst: [],
    years: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: {path: 'make',  order: 'asc'}
  };
  componentDidMount() {
    this.setState({
      cars_lst: getCars(),
      years: [{'id':'', 'name':'All'}, ...getYears()],
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

  handleSort = (column) => {
    let sortColumn = {...this.state.sortColumn};    
    if(sortColumn.path === column)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else 
      sortColumn = {path: column,  order: 'asc'} ;

    this.setState({ sortColumn});
  };

  render() {
    const count = this.state.cars_lst.length;

    const { pageSize, currentPage, selectedYear, cars_lst , sortColumn} = this.state;

    if (this.state.cars_lst.length === 0) return <h1>No cars</h1>;

    const filterd = selectedYear && selectedYear.id
      ? cars_lst.filter((c) => c.year === selectedYear.id)
      : cars_lst;

    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order])

    // const cars = paginate(pageSize, currentPage, cars_lst);
    const cars = paginate(sorted,  this.state.currentPage, this.state.pageSize)

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
          <CarsTable cars={cars} onDelete={this.handleDelete} onLike={this.handleLike} onSort={this.handleSort}></CarsTable>
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
