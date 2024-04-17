import React from 'react'
import "./PageNotFound.scss"
import img from "../../assets/Image/PageNotFound/Pagenotfound.png"

function PageNotFound() {
  return (
    <div className='pageNotFound container-fluid'>
      <img src={img} alt="" />
    </div>
  )
}

export default PageNotFound