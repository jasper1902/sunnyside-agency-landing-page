import React from 'react'
import { useState } from 'react'
import imgEmily from '../assets/images/image-emily.jpg'
import imgJennie from '../assets/images/image-jennie.jpg'
import imgThomas from '../assets/images/image-thomas.jpg'

const Review = () => {
    const [usersData, setUsersData] = useState([
        { 
            img: imgEmily,
            content: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            name: "Emily R.",
            position: "Marketing Director"
        },
        { 
            img: imgJennie,
            content: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
            name: "Thomas S.",
            position: "Chief Operating Officer"
        },
        { 
            img: imgThomas,
            content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            name: "Jennie F.",
            position: "Business Owner"
        },

    ])
  return (
    <div className="text-center py-[10rem] py-[5rem]">
        <h3 className='uppercase text-3xl'>Client Testimonials</h3>
        <div className="flex flex-col lg:flex-row">
            {usersData.map((user, key) => (
                <div key={key.name} className="lg:p-[5rem] p-[1rem]">
                    <img src={user.img} alt={user.name} className="lg:my-[3rem] my-[1rem] rounded-full inline-block"/>
                    <p className="lg:py-[5rem] py-[1rem] text-xl">{user.content}</p>
                    <h3 className="font-bold mb-[1rem]">{user.name}</h3>
                    <p className="text-slate-400">{user.position}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review