import React, { Component } from 'react';
import Details from './Details';

class Form extends Component {
  state = {
    name: '',
    age: '',
    salary: '',
    user: [],
    details: true,
  };

  HandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  HandleSubmit = (event) => {
    event.preventDefault();

    const tempObj = {
      name: this.state.name,
      age: this.state.age,
      salary: this.state.salary,
      details: this.state.details,
    };

    const tempArr = this.state.user;
    tempArr.push(tempObj);
    this.setState({
      user: tempArr,
      details: !this.state.details,
    });
  };

  render() {
    console.log(this.state.user, 'USER');
    return (
      <>
        {this.state.details ? (
          <div>
            <h1>Employee FeedBack Form</h1>
            <form>
              <label htmlFor=''>Name:</label>
              <input
                type='text'
                name='name'
                id='name'
                value={this.state.name}
                onChange={this.HandleChange}
                required
              />
              <br />
              <label htmlFor=''>Age:</label>
              <input
                type='text'
                name='age'
                id='age'
                value={this.state.age}
                onChange={this.HandleChange}
                required
              />
              <br />
              <label htmlFor=''>salary: </label>
              <input
                type='text'
                name='salary'
                id='salary'
                value={this.state.salary}
                onChange={this.HandleChange}
                required
              />
              <br />
              <button onClick={this.HandleSubmit.bind(this)}>Submit</button>
            </form>
          </div>
        ) : (
          <Details data={this.state.user} />
        )}
      </>
    );
  }
}

export default Form;
