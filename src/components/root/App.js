import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navi />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/product" component={Dashboard}/>
        <Route exact path="/cart" component={CartDetail}/>
       
      </Switch>
    </div>
  );
}

export default App;
