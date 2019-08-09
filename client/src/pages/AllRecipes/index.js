import React, { Component } from "react";
import API from "../../utils/API";
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";

class AllRecipes extends Component {
    state = {
      recipes: [],
    };

    componentDidMount() {
      this.loadRecipes();
    }
  
    loadRecipes = () => {
      API.getAllRecipes()
        .then(res => this.setState({ recipes: res.data }))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <Container>
            <Row>
              <Col size="xs-12">
                {!this.state.recipes.length ? (<h1 className="text-center">No Recipes to Display</h1>) : (
                  <RecipeList>
                    {this.state.recipes.map(recipe => {
                      console.log("recipe-----------------------", recipe);
                      return (
                  
                        <RecipeListItem
                          key={recipe._id}
                          title={recipe.RecipeName}
                          href={"/recipe/"+recipe._id}
                          ingredients={recipe.Ingredients}
                          thumbnail={recipe.FoodPhoto}
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