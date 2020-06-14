import React, { Component } from "react";

class Rating extends Component {
  ratingStar = (score) => {
    return [...Array(5).keys()].map((i) => (
      <i
        key={i}
        style={{ color: i < score ? "gold" : "lightgray" }}
        className="fas fa-star"
      ></i>
    ));
  };
  render() {
    return <span>{this.ratingStar(this.props.rate)}</span>;
  }
}

export default Rating;
