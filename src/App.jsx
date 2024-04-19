import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//page importing
import Home from "./Pages/Home/Home.jsx";
import Recipes from "./Pages/Recipes/Recipes.jsx";
import Favourities from "./Pages/Favourites/Favourities.jsx";
import Cuisine from "./Pages/Cuisine/Cuisine.jsx";
import About from "./Pages/About/About.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import Explore from "./Pages/Explore/Explore.jsx";

import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <div className="navBar">
        <Navbar></Navbar>
      </div>
      
      {/* routing of pages */}
      <div className="page">
        <Routes >
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/recipes" element={<Recipes></Recipes>}></Route>
          <Route path="/cuisine" element={<Cuisine></Cuisine>}></Route>
          <Route path="/favourites" element={<Favourities></Favourities>}></Route>
          <Route path="/favourites/:sectionId"element={<Favourities></Favourities>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/explore/:query" element={<Explore />}/>
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </div>

      {/* footer */}
      <div className="footer container-fluid">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
