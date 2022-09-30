import React from 'react'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'

const Footer = () => {
  return (
    <div className="bg-[#458C7E] flex flex-col text-center">
        <h3 className="py-[3rem] font-bold text-3xl">sunnyside</h3>
        <ul className="flex justify-center">
            <li className="mx-[3rem]"><a href="">About</a></li>
            <li className="mx-[3rem]"><a href="">Services</a></li>
            <li className="mx-[3rem]"><a href="">Projects</a></li>
        </ul>
        <ul className="flex justify-center my-[3rem]">
            <li className="mx-[1rem]"><a href=""><img src={facebook} alt="" /></a></li>
            <li className="mx-[1rem]"><a href=""><img src={instagram} alt="" /></a></li>
            <li className="mx-[1rem]"><a href=""><img src={twitter} alt="" /></a></li>
            <li className="mx-[1rem]"><a href=""><img src={pinterest} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Footer