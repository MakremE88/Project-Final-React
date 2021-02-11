import React from 'react';
import './App.css';
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import DetailsProducts from "./components/DetailsProducts";
import { Provider } from "react-redux";
import { HashRouter as Switch, Route } from 'react-router-dom';
import store from "./store";

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1 className="title-app">Product App</h1>
          <hr />
          <div className="row">
            <div className="col-md-12 col-sm-12 boxtop-app">
                <div className="box-filtre">
                    <Filter />
                </div>
                <div className="box-basket">
                  <span className="item-basket">My cart</span>
                    <div className="hidden-cart">
                    <Basket />
                    </div>
                </div>

            </div>
            <div className="col-md-12 col-sm-12 box-list-product">
              <hr />
              <Switch>
                  <Route path="/" exact component={Products} />
                   <Route path="/:id" component={DetailsProducts} />
              </Switch>
            </div>
          </div>
        </div>
        </Provider>
    );
  }
}

export default App;
