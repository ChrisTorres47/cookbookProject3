import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import AllRecipes from "./pages/AllRecipes"
import OneRecipe from "./pages/OneRecipe"
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
// import add from "./pages/Add/add"
import { Container } from 'reactstrap';


function App() {
  return (
      <Router>
        <>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              {/* <Route exact path="/add"  component={add} /> */}
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/recipes/allrecipes" component={AllRecipes} />
              <Route exact path="/recipes/onerecipe/:id" component={OneRecipe} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
          <Footer />
        </>
      </Router>
  );
}

export default App;
