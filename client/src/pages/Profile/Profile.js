import React, { Component } from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            console.log(user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }
    
    saveRecipe(){

    }

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
                <div class="container backColor text-light">
                    <form>
                        <fieldset>
                            <legend>Add your recipe</legend>
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
                            <br /><br />

                        </fieldset>
                    </form>

                </div>
            </>
        )
    }
}


export default Profile;