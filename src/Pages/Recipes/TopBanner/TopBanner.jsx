import React from 'react'
import "./TopBanner.scss"
import path from "./p.svg"
function TopBanner() {
  return (

    <div className='topBanner'>

        <div className="layer-1">
            <div className="main">
                <div className="title">
                    <h3>Recipe</h3>
                </div>
                <div className="description">
                <p>We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.
                    </p> 
                </div>
            </div>
            <div className="image">
                <img src={path} alt="" />
            </div>
        </div>
        <div className="layer-2">
            <div className="search-box">
                <input type="search" placeholder='Search what recipe you prefered to cook today' />
            </div>
            <div className="suggestion">

            </div>
        </div>
    </div>
  )
}

export default TopBanner