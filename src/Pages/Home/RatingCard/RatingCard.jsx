import React from 'react'
import "./RatingCard.scss"
import SimpleRatingCard from '../../../component/Cards/SimpleRatingCard/SimpleRatingCard'
import { data } from './data'


function RatingCard() {
  
  return (
    <div className='ratingCard container'>
      {
        data.map((item, key)=>{
          return (
            <SimpleRatingCard key={key} item={item} className={`card ${item.class}`} />
          )
        })
      }
    </div>
  )
}

export default RatingCard