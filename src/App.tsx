import React from "react";
import "./App.css";
import ImagesList from "./components/gallery/ImagesList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./reducers/index";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ImagesList />
      </div>
    </Provider>
  );
};

export default App;
