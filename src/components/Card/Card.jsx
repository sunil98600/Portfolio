import React from 'react'
const Card = ({image,title,desc}) => {
  return (
    <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
    <img src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="text-white mt-2 text-sm">{desc}</p>
    </div>
  </div>
  )
}

export default Card
