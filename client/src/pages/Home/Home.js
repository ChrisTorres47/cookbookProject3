import React, { Component } from "react";
import API from "../../utils/API";
import Carousel from "../../components/Carousel";
import Search from "../../components/Search";

import "./Home.scss";

class Home extends Component {

  state = {
    loggedIn: false,
    featuredfood: "",
    shuffledArray: []

  };

  componentDidMount() {
    // this.getfood();
    this.loggedIn();
  }


  getfood = () => {
    API.getRecipes("vegetables")
      .then(res => {
        console.log("Info from API", res);
        // let newFood = food.data.value.joke.replace(/&quot;/g, '"');
        // this.setState({
        //   featuredfood: newFood
        // })
      }).catch(err => {
        console.log(err)
      });
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="homeBox" >
        <Carousel> Carousel </Carousel>
        <Search />
        <p className= "bottomText" >Access your favorite recipes on the go!</p>

      </div>

    );
  }
}

export default Home;