import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//page importing
import Home from "./Pages/Home/Home.jsx";
import Recipes from "./Pages/Recipes/Recipes.jsx";
import Favourities from "./Pages/Favourites/Favourities.jsx";
import Cuisine from "./Pages/Cuisine/Cuisine.jsx";
import About from "./Pages/About/About.jsx";

function App() {
  return (
    <div className="app">
      <div className="navbar"></div>

      {/* routing of pages */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/recipes" element={<Recipes></Recipes>}></Route>
          <Route path="/cuisine" element={<Cuisine></Cuisine>}></Route>
          <Route path="/favourites"element={<Favourities></Favourities>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </div>

      {/* footer */}
    </div>
  );
}

export default App;
