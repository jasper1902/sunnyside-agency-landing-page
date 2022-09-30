import React from 'react'
import imgMilk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import imgOrange from '../assets/images/desktop/image-gallery-orange.jpg'
import imgCone from '../assets/images/desktop/image-gallery-cone.jpg'
import imgSugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
        <img src={imgMilk} alt="milk" />
        <img src={imgOrange} alt="Orange" />
        <img src={imgCone} alt="Cone" />
        <img src={imgSugar} alt="Sugar" />
    </div>
  )
}

export default Gallery