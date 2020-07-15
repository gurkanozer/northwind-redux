import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import {Switch, Route} from "react-router-dom";
import AddOrUpadeteProduct from "../products/AddOrUpadeteProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div className="container">
      <Navi />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route  path="/product" component={Dashboard}/>
        <Route  path="/cart" component={CartDetail}/>
        <Route  path="/saveProduct/:productId" component={AddOrUpadeteProduct}/>
        <Route  path="/saveProduct" component={AddOrUpadeteProduct}/>
        <Route component={NotFound}/>
       
      </Switch>
    </div>
  );
}

export default App;
