import React, { Component } from "react";

import FuleTable from "./fuleTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { getPetrolPricess } from "../services/fakePetrolService";

class FulePricess extends Component {
  state = {
  
    petrol_lst:[],
    pageSize: 30,
    currentPage: 1,
    sortColumn: {path: 'id',  order: 'asc'}
  };
  componentDidMount() {
    this.setState({
      petrol_lst : getPetrolPricess(),
    });
  }
  handleDelete = (petrol) => {
    console.log(petrol);
    const petrol_lst = this.state.petrol_lst.filter((c) => c.id !== petrol.id);
    this.setState({ petrol_lst: petrol_lst });
  };


  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };


  handleSort = (sortColumn) => {
      this.setState({ sortColumn});
  };

  render() {
    const count = this.state.petrol_lst.length;

    const { pageSize, currentPage, petrol_lst , sortColumn} = this.state;

    if (this.state.petrol_lst.length === 0) return <h1>No petrols</h1>;

    const filterd = petrol_lst;

    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order])

    // const cars = paginate(pageSize, currentPage, cars_lst);
    const petrols = paginate(sorted,  this.state.currentPage, this.state.pageSize)


    return (
      <div className="row">
        <div className="col">
          <p>There's ({count}) cars in the inventory</p>
          <FuleTable
            cars={petrols}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            // onLike={this.handleLike}
            onSort={this.handleSort}
          ></FuleTable>
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

export default FulePricess;
