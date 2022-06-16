import React, { Component } from 'react';
import { getCars } from '../services/fakeCarsService';
import Like from './common/like';

class Cars extends Component {
    state = { 
        cars_lst : getCars() 
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

    render() {
        if (this.state.cars_lst.length === 0)
            return <h1>No cars</h1>

        
        return (<React.Fragment>
        <p>There's ({this.state.cars_lst.length}) cars in the inventory</p>
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
                {this.state.cars_lst.map(car=>{
                    return(
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
                    <td><Like  liked={car.liked} onClick={()=>this.handleLike(car)}/></td>
                    <td><button onClick={()=> this.handleDelete(car)} className="btn btn-danger btn-sm">Delete</button></td>

                </tr>)

                })}
                
            </tbody>
        </table>
        </React.Fragment>);
    }
}
 
export default Cars;