import React from 'react'
import imgTransform from '../assets/images/desktop/image-transform.jpg'

const SectionOne = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-center lg:text-left">
        <div className="flex items-center">
            <div className="lg:p-[10rem] p-[3rem] text-bold">
                <h2 className="text-4xl font-bold mb-[3rem]">Transform your brand</h2>
                <p className="mb-[3rem]">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a className="uppercase font-bold" href="">Learn more</a>
            </div>
        </div>

        <div>
            <img className="w-full" src={imgTransform} alt="transform" />
        </div>

    </div>
  )
}

export default SectionOne