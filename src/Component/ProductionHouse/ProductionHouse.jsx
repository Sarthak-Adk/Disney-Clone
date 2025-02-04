import React from 'react';
import disney from '/src/assets/Images/disney.png';
import marvel from '/src/assets/Images/marvel.png';
import nationalG from '/src/assets/Images/nationalG.png';
import pixar from '/src/assets/Images/pixar.png';
import starwar from '/src/assets/Images/starwar.png';

import starwarV from '/src/assets/Videos/star-wars.mp4';
import disneyV from '/src/assets/Videos/disney.mp4';
import marvelV from '/src/assets/Videos/marvel.mp4';
import nationalGeographicV from '/src/assets/Videos/national-geographic.mp4';
import pixarV from '/src/assets/Videos/pixar.mp4';

function ProductionHouse() {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: starwar, video: starwarV },
    { id: 5, image: nationalG, video: nationalGeographicV },
  ];

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item) => (
        <div key={item.id} className='border-[2px] border-gray-600
          rounded-lg hover:scale-110 transition-all duration-300
          ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
          
          <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'/> 
          
          <img src={item.image} alt='Production House' className='w-full z-[1] opacity-100' /> 
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
