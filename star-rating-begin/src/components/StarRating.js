import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state

  state = {

    rating:0
  }


  // Write a function that returns 5 Star components

  showStars = () =>{

    const stars=[];

    for(let i=0;i<5;i++)
    stars.push(
      <Star
      key=(i.toString()}
      >)
    )
    return stars;
  }


  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
      </ul>
    );
  }
}

export default StarRating;