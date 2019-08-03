import React from "react";
import "./App.css";
import ImagesList from "./components/gallery/ImagesList";

const App: React.FC = () => {
  return (
    <div className="App">
      <ImagesList />
    </div>
  );
};

export default App;
