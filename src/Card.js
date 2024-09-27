import React from 'react';

const Card = ({ img, title}) => {
  return (
    // <div className="max-w-sm rounded  flex flex-nowrap shadow-lg">
    //   <img className="w-full" src={img} alt={title} />
    //   <div className="px-6 py-4 ">
    //     <div className="font-bold text-3xl text-center">{title}</div>
       
    //   </div>
    // </div>
    <div className=' h-[55vh] w-[30vw] flex  border-2 border-black flex-row'>
        <img src={img} alt='img' className='w-[25vw] h-[55vh]' />
        <h1 className='text-3xl font-bold'>{title}</h1>
    </div>
  );
};

export default Card;
