import React from 'react'
import "./Home.scss"

import HeroBanner from './HeroBanner/HeroBanner'
import Banner from "./Banner/Banner.jsx"
import ExploreRecipe from "./ExploreRecipe/ExploreRecipe.jsx"
import ExploreCuisine from "./ExploreCuisine/ExploreCuisine.jsx"
import RatingCard from "./RatingCard/RatingCard.jsx"

function Home() {
  return (
    <div className='home'>
      <HeroBanner className="container-fluid"/>
      {/* <div className="below container">
      <h3 className="text-center">Most Hand-pick Recipes</h3>
        <h2 className="text-center"> Quick + Easy <span className="text-secondary">Everyday lunch</span> </h2>
        <p className="text-center"> </p>
        
      </div> */}
      <Banner />
      <ExploreRecipe className="explore"/>
      <ExploreCuisine />
      <RatingCard />
      
    </div>
  )
}

export default Home