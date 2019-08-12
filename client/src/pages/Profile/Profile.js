import React, { Component } from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";


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
                var currentUser = user.data.user._id
                this.setState({
                    loggedIn: true,
                    user: user.data.user,
                    userID: currentUser
                }, () => this.loadRecipes());
                console.log("This is user", this.state.user)
            }
        }).catch(err => {
            console.log(err);
        });
        
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    loadRecipes = () => {
        API.getAllRecipes()
            .then(res => {
                console.log(res.data)
               const userRecipes = res.data.filter(item => {
                    return item.userID === this.state.userID
                })
                console.log("This is userRecipes", userRecipes)
                this.setState({
                    recipes: userRecipes,
                })
            })
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

            .then(res => console.log("This is the save Recipe", res), this.loadRecipes())
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


                <div>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>My saved recipes</h1>
                        </Jumbotron>
                        {this.state.recipes.length ? (
                            <List>
                                {this.state.recipes.map(recipe => (
                                            <ListItem key={recipe._id}>
                                                <Link to={"/recipes/allrecipes"}>
                                                    <strong>
                                                        {recipe.RecipeName}
                                                    </strong>
                                                </Link>
                                            </ListItem>
                                        )
                                )}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </div>
            </>

        )
    }
}


export default Profile;



