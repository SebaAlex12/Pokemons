import React from "react";
import "./App.css";
import PokemonsList from "./store/Pokemons/components/PokemonsList";
import "./store/Pokemons/pokemons.scss";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./store/index";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PokemonsList />
      </div>
    </Provider>
  );
};

export default App;
