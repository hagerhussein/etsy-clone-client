import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import { Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import ClothingAndShoesContainer from './components/ClothingAndShoesContainer';
import JewelryAndAccesoriesContainer from './components/JewelryAndAccesoriesContainer';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/clothing-and-shoes" component={ClothingAndShoesContainer} />
          <Route path="/jewelry-and-accessories" component={JewelryAndAccesoriesContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;