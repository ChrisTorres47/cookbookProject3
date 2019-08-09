import React, { Component } from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import { Input, FormBtn } from "../../components/Form";

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true,
        recipes: [],
        RecipeName: "",
        Ingredients: "",
        Directions: "",
        FoodPhoto: "",
        userID: ""
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            console.log(user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user,
                    userID: user.data.user._id
                });
                console.log("This is user" , this.state.user)
            }
        }).catch(err => {
            console.log(err);
        });

    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    loadRecipes = () => {
        API.getRecipe
        ()
            .then(res => 
                this.setState({recipes: res.data})
                )
            .catch(err => console.log(err))
    }

    saveRecipe = (event) => {
        event.preventDefault();
        API.addRecipe({
            RecipeName: this.state.RecipeName,
            Ingredients: this.state.Ingredients,
            Directions: this.state.Directions,
            FoodPhoto: this.state.FoodPhoto,
            userID: this.state.userID
        })
        
        .then(res => console.log( "This is the save Recipe" ,res), this.loadRecipes())
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <>
                <div className="profilePage">
                    {this.state.loggedIn ? (
                        <div className="profileBox">
                            <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                        </div>
                    ) : (
                            <div className="noUser">
                                {!this.state.loading ? (
                                    <>
                                        <h1>please log in</h1>
                                        <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                                    </>
                                ) : (
                                        <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
                                    )}
                            </div>
                        )}
                </div>
                <div className="container backColor text-light">
                    <form>
                        <fieldset>
                            <Input
                                value={this.state.recipeName}
                                onChange={this.handleInputChange}
                                name="RecipeName"
                                placeholder="Recipe Name"
                            />
                            <Input
                                value={this.state.ingredients}
                                onChange={this.handleInputChange}
                                name="Ingredients"
                                placeholder="Ingredients"
                            />
                            <Input
                                value={this.state.directions}
                                onChange={this.handleInputChange}
                                name="Directions"
                                placeholder="Directions"
                            />
                            <Input
                                value={this.state.foodPhoto}
                                onChange={this.handleInputChange}
                                name="FoodPhoto"
                                placeholder="Picture of food"
                            />
                            <FormBtn
                                onClick={this.saveRecipe}
                            >
                                Submit Recipe
                            </FormBtn>

                        </fieldset>
                    </form>

                </div>
                
            </>
        )
    }
}

{/* <legend>Add your recipe</legend>
<div class="form-group">
    <label for="recipeName">Recipe name</label>
    <textarea class="form-control" id="recipeName" rows="1"></textarea>
</div>
<div class="form-group">
    <label for="ingredients">List your ingredients here</label>
    <textarea class="form-control" id="ingredients" rows="3"></textarea>
</div>
<div class="form-group">
    <label for="directions">List your directions here</label>
    <textarea class="form-control" id="directions" rows="3"></textarea>
</div>
<div class="form-group">
    <label for="recipeImage">Picture of your deliciousness</label>
    <textarea class="form-control" id="recipeImage" rows="1" placeholder="Enter a URL for an image of your recipe"></textarea>
</div>
<button type="submit" class="btn btn-primary rounded-pill" id="create" onClick="saveRecipe">Submit</button>
<br /><br /> */}


export default Profile;