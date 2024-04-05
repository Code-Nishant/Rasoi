import React from 'react'
import "./SimpleRatingCard.scss"
import { MdOutlineStarOutline } from "react-icons/md"; //empty
import { MdOutlineStarPurple500 } from "react-icons/md"; //fill

function SimpleRatingCard({item}) {
    
  return (
    <div className={`simpleRatingCard ${item.class}`}>
        <div className="profileImage">
            <img src={item.image} alt="" />
        </div>
        <div className="stars">
            <div className="star">
                {item.star>=1?<MdOutlineStarPurple500 />:<MdOutlineStarOutline />}
            </div>
            <div className="star">
                {item.star>=2?<MdOutlineStarPurple500 />:<MdOutlineStarOutline />}
            </div>
            <div className="star">
                {item.star>=3?<MdOutlineStarPurple500 />:<MdOutlineStarOutline />}
            </div>
            <div className="star">
                {item.star>=4?<MdOutlineStarPurple500 />:<MdOutlineStarOutline />}
            </div>
            <div className="star">
                {item.star>=5?<MdOutlineStarPurple500 />:<MdOutlineStarOutline />}
            </div>
        </div>
        <div className="description">
            <p>{item.des}</p>
        </div>
    </div>
  )
}

export default SimpleRatingCard