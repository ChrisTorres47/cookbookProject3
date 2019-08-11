import React, { Component } from "react";
import API from "../../utils/API";
import TopNav from "../../components/TopNav"
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";


class AllRecipes extends Component {
    state = {
      recipes: [],
      recipeSearch: "",
      userId: "",

    };
    componentDidMount() {
      this.loadUserAllRecipes();
    }
  
    loadUserAllRecipes = () => {
      API.getAllRecipes()
        .then(res =>
          this.setState({ recipes: res.data,  })
        )
        .catch(err => console.log(err));
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
      API.saveRecipe(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
    };
           
    render() {
      console.log(this.state.recipes)
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
                          key={recipe._id}
                          title={recipe.RecipeName}
                        
                          ingredients={recipe.Ingredients}
                          directions={recipe.Directions}
                          image={recipe.FoodPhoto}
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