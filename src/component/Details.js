import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div>
        <h1>Employe Feedback Data</h1>
        <div>
          {this.props.data.map((value, index) => {
            return (
              <div>
                Name : {value.name} || Age : {value.age} || Salary:
                {value.salary}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Details;
