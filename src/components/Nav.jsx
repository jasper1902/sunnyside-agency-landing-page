import React from 'react'

const Nav = () => {
  return (
    <div className="lg:px-[10rem] px-[3rem] py-[3rem]">
        <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="text-white font-bold text-xl">sunnyside</div>
            <ul className="flex items-center flex-col lg:flex-row">
                <li className="lg:mx-[40px] mx-[10px] mt-[10px] text-white"><a href="">About</a></li>
                <li className="lg:mx-[40px] mx-[10px] mt-[10px] text-white"><a href="">Services</a></li>
                <li className="lg:mx-[40px] mx-[10px] mt-[10px] text-white"><a href="">Projects</a></li>
                <li className="lg:mx-[40px] mx-[10px] mt-[10px] bg-white rounded-full px-[20px] py-[10px] font-semibold"><a href="">CONTACT</a></li>
            </ul>
    </div>
    </div>
  )
}

export default Nav