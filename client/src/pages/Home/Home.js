// import React, { Component } from "react";
// import API from "../../utils/API";
// import Carousel from "../../components/Carousel";
// import Search from "../../components/Search";

// import "./Home.scss";

// class Home extends Component {

//   state = {
//     loggedIn: false,
//     featuredfood: "",
//     shuffledArray: []

//   };

//   componentDidMount() {
//     // this.getfood();
//     this.loggedIn();
//   }

  
  

//   getfood = () => {
//     API.getRecipes("vegetables")
//       .then(res => {
//         console.log("Info from API", res);
//         // let newFood = food.data.value.joke.replace(/&quot;/g, '"');
//         // this.setState({
//         //   featuredfood: newFood
//         // })
//       }).catch(err => {
//         console.log(err)
//       });
//   }

//   loggedIn = () => {
//     API.isLoggedIn().then(user => {
//       if (user.data.loggedIn) {
//         this.setState({
//           loggedIn: true
//         });
//       }
//     }).catch(err => {
//       console.log(err);
//     });
//   }

//   render() {
//     return (
      
//       <>
//       <div className="homeBox" style={{textAlign:"center"}}>
//         <Carousel> Carousel </Carousel>
//         <form>
//           <input
//             placeholder="Search for a recipe!"
//             ref={input => this.search = input}
//             onChange={this.handleInputChange}
//           />
//           <p>{this.state.query}</p>
//         </form>
//         </div>
//         <p className= "bottomText" style={{textAlign:"center"}}>Access your favorite recipes on the go!</p>
//       <div className="homeBox" >
//         {/* <Carousel> Carousel </Carousel> */}
//         <Search />
//         <p className= "bottomText" >Access your favorite recipes on the go!</p>

//       </div>
//       </>

//     );
//   }
// }

// export default Home;

import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import Nav from "../../components/TopNav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";

class Home extends Component {
    state = {
      recipes: [],
      recipeSearch: ""
    };
  
    handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      API.getRecipes(this.state.recipeSearch)
        .then(res => this.setState({ recipes: res.data }))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          {/* <TopNav /> */}
          <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
                <form>
                  <Container>
                    <Row>
                      <Col size="xs-9 sm-10">
                        <Input
                          name="recipeSearch"
                          value={this.state.recipeSearch}
                          onChange={this.handleInputChange}
                          placeholder="Search For a Recipe"
                        />
                      </Col>
                      <Col size="xs-3 sm-2">
                        <Button
                          onClick={this.handleFormSubmit}
                          type="success"
                          className="input-lg"
                        >
                          Search
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Col>
            </Row>
            <Row>
              <Col size="xs-12">
                {!this.state.recipes.length ? (<h1 className="text-center">No Recipes to Display</h1>) : (
                  <RecipeList>
                    {this.state.recipes.map(recipe => {
                      return (
                        <RecipeListItem
                          key={recipe.title}
                          title={recipe.title}
                          href={recipe.href}
                          ingredients={recipe.ingredients}
                          thumbnail={recipe.thumbnail}
                        />
                      );
                    })}
                  </RecipeList>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default Home;


