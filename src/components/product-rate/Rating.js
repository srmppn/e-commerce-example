import React, { Component } from "react";

class Rating extends Component {
  ratingStar = (score) => {
    return [...Array(5).keys()].map(i => {
      console.log(i)
      return <i style={{color: i<score? 'gold' : 'lightgray'}} class="fas fa-star"></i>
    });
  }
  render() {
    return (
      <span>
        {this.ratingStar(this.props.rate)}
      </span>
    );
  }
}

export default Rating;
