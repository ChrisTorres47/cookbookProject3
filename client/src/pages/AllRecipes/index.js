import React, { Component } from "react";
import API from "../../utils/API";
import TopNav from "../../components/TopNav"
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";

class AllRecipes extends Component {
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