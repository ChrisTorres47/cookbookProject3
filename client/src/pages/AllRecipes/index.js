import React, { Component } from "react";
import API from "../../utils/API";
import TopNav from "../../components/TopNav"
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";

class AllRecipes extends Component {
    state = {
      loggedIn: false,
      user: null,
      recipes: [],
      recipeSearch: ""
    };
    componentDidMount(){
      this.handleFormSubmit()

      API.isLoggedIn().then(user => {
        console.log(user)
        if (user.data.loggedIn) {
            var currentUser = user.data.user._id
            this.setState({
                loggedIn: true,
                user: user.data.user,
                userID: currentUser
            });
            console.log("This is user", this.state.user)
        }
    }).catch(err => {
        console.log(err);
    });
    
    }
  
    handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = () => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      // event.preventDefault();
      API.getAllRecipes()
        .then(res => console.log(res.data)
          // this.setState({ recipes: res.data })
          )
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <Container>
            <h1>This is the AllRecipes page.</h1>
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
  
  export default AllRecipes;