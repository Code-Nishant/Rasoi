// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";

// //page importing
// import Home from "./Pages/Home/Home.jsx";
// import Recipes from "./Pages/Recipes/Recipes.jsx";
// import Favourities from "./Pages/Favourites/Favourities.jsx";
// import Cuisine from "./Pages/Cuisine/Cuisine.jsx";
// import About from "./Pages/About/About.jsx";
// import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
// import Explore from "./Pages/Explore/Explore.jsx";

// import Navbar from "./component/Navbar/Navbar.jsx";
// import Footer from "./component/Footer/Footer.jsx";

// import ScrollToTopOnMount from "./util/ScrollToTopOnMount.jsx"

// function App() {
//   return (
//     <div className="app">
//       <div className="navBar">
//         <Navbar></Navbar>
//       </div>
      
//       {/* routing of pages */}
//       <div className="page">
//         <Routes >
//           <ScrollToTopOnMount />
//           <Route path="/" element={<Home></Home>}></Route>
//           <Route path="/recipes" element={<Recipes></Recipes>}></Route>
//           <Route path="/cuisine" element={<Cuisine></Cuisine>}></Route>
//           <Route path="/favourites" element={<Favourities></Favourities>}></Route>
//           <Route path="/favourites/:sectionId"element={<Favourities></Favourities>}></Route>
//           <Route path="/about" element={<About></About>}></Route>
//           <Route path="/explore/:query" element={<Explore />}/>
//           <Route path="*" element={<PageNotFound></PageNotFound>} />
//         </Routes>
//       </div>

//       {/* footer */}
//       <div className="footer container-fluid">
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Page importing
import Home from "./Pages/Home/Home.jsx";
import Recipes from "./Pages/Recipes/Recipes.jsx";
import Favourities from "./Pages/Favourites/Favourities.jsx";
import Cuisine from "./Pages/Cuisine/Cuisine.jsx";
import About from "./Pages/About/About.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import Explore from "./Pages/Explore/Explore.jsx";

import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

import ScrollToTopOnMount from "./util/ScrollToTopOnMount.jsx";

function App() {
  return (
    <div className="app">
      <div className="navBar">
        <Navbar />
      </div>

      <div className="page">
        {/* Wrap your routes and ScrollToTopOnMount component in a container */}
        <React.Fragment>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/favourites" element={<Favourities />} />
            <Route
              path="/favourites/:sectionId"
              element={<Favourities />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/explore/:query" element={<Explore />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      </div>

      <div className="footer container-fluid">
        <Footer />
      </div>
    </div>
  );
}

export default App;
