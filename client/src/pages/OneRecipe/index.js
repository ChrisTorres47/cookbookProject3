import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import "./OneRecipe.scss";

class OneRecipe extends Component {

  state = {
    loggedIn: false,
    featuredfood: "",
    
  };

  componentDidMount() {
    this.getfood();
    this.loggedIn();
  }

  getfood = () => {
    API.getRecipes("vegetables")
    .then(res => {
      console.log("Info from API" , res);
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
      <div className="homeBox">
        <h1>This is the OneRecipe page.</h1>
        {this.state.loggedIn ? (
          <Button onClick={e=> {this.getfood()}} color="warning" block>Get New Joke</Button>
        ) : (<></>)}
      </div>
    );
  }
}

export default OneRecipe;
