import React, { Component } from "react";

import  Joi  from "joi-browser";

class Form extends Component {
  state = {
    account: { },
    errors: {},
  };


  validate = () => {
    const validateResult = Joi.validate(this.state.account,  this.schema, {abortEarly: false});
    console.log(validateResult)

    if(!validateResult.error) return null;
    const errors = {};
    for(let item of validateResult.error.details)
      errors[item.path[0]] = item.message;

    return errors;

  };

  validateProperty = (input) => {


    const {name, value} = input;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

   
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    // XXXXXXXXX worngway   const username = document.getElementById('username').value;
   this.doSubmit()
  };
  doSubmit = ()=>{
    const username = this.username.current.value;
    console.log("submit", username);
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errorMessage = this.validateProperty(input);
    const errors = { ...this.state.errors };

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    account[input.name] = input.value;
    this.setState({ account, errors });
  };

}

export default Form;
