import React from 'react'
import imgstandOut from '../assets/images/desktop/image-stand-out.jpg'

const SectionTwo = () => {
  return (
    
    <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="row-start-2 row-end-3 lg:row-start-1">
            <img className="w-full" src={imgstandOut} alt="stand out" />
        </div>

        <div className="flex items-center">
            <div className="lg:p-[10rem] p-[3rem] text-bold">
                <h2 className="text-4xl font-bold mb-[3rem]">Stand out to the right audience</h2>
                <p className="mb-[3rem]">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a className="uppercase font-bold" href="">Learn more</a>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo