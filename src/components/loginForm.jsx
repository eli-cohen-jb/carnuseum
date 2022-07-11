import React, { Component } from "react";
import Joi  from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label('UserName'),
    password: Joi.string().required().label('Password'),

  };

  username = React.createRef();

  componentDidMount() {
    this.username.current.focus();
  }
  validate = () => {
    // const validateResult = Joi.validate(this.state.account,  this.schema, {abortEarly: false});
    // console.log(validateResult)

    // if(!validateResult.error) return null;
    // const errors = {};
    // for(let item of validateResult.error.details)
    //   errors[item.path[0]] = item.message;


    // return errors;


    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length ? errors : null;
  };

  validateProperty = (input) => {

    const {name, value} = input;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // const errors = {};
    // const { account } = this.state;

    // if (input.name === "username") {
    //   if (input.value.trim() === "") return "Username is required";
    // } else if (input.name === "password") {
    //   if (input.value.trim() === "") return "Password is required";
    // }

    // return null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    // XXXXXXXXX worngway   const username = document.getElementById('username').value;
    const username = this.username.current.value;
    console.log("submit", username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errorMessage = this.validateProperty(input);
    const errors = { ...this.state.errors };

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User</label>
            <input
              name="username"
              onChange={this.handleChange}
              value={account.username}
              //   autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={this.handleChange}
              value={account.password}
              id="password"
              type="text"
              className="form-control"
            />
          </div> */}
          <Input
            name="password"
            label="password"
            onChange={this.handleChange}
            value={account.password}
            error={this.state.errors.password}
          ></Input>
          <button disabled={this.validate()} className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
