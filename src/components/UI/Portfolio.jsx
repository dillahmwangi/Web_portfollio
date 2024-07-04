// import React,{useState, useEffect} from 'react'
// import data from '../../assets/data/portfolioData.js'


// const Portfolio = () => {
//     const [nextItems, setNextItems] = useState(6)
//     const [portfolios, setPortfolios] = useState(data) x

//     const loadMoreHandler = ()=>{
//         setNextItems(prev => prev + 3)

//     };
//   return (
//   <section id='portfolio'>
//     <div className='container'>
//         <div className='flex items-center justify-between flex-wrap'>
//             <div className='mb-7 sm:mb-0'>
//                 <h3 className='text-headingColor text-[2rem] font-[700]'>
//                     My Recent Projects
//                 </h3>
//             </div>
//             <div className='flex gap-3 '>
//                 <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'> 
//                     All
//                 </button>

//                 <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'> 
//                    Web Design
//                 </button>

//                 <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'> 
//                    UX/UI Design
//                 </button>

//             </div>

//         </div>
//         <div className='flex items-center gap-4 flex-wrap mt-12'>
//             {
//                 portfolios?.slice(0, nextItems)?.map((portfolios,index)=>(
//                     <div
//                     key={index}
//                      data-aos='fade-zoom-in'
//                         data-aos-delay='50'
//                         data-aos-duration='1000'
//                      className='group max-w-full sm:w-[48.5%] md:w-[31.8%] relative z-[1]'>
//                         <figure>
//                             <img className='rounded-[8px]' src={portfolios.imgUrl} alt="" />
//                         </figure>
                        
//                         <div 
//                           className='w-full h-full flex item-center justify-center'>
//                             <button
//                              onClick={loadMoreHandler} 
//                              className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] 
//                             font-[500] ease-in duration-200'>
//                                 Load More

//                             </button>
//                         </div>

//                      </div>
//                 ))}
//          </div>
        
//         <div>

//         </div>

//     </div>
    
 
//   </section>
//             );
//      }


// export default Portfolio;


import React, { useState } from 'react';
import data from '../../assets/data/portfolioData.js';

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3);
  };

  return (
    <section id='portfolio'>
      <div className='container'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-headingColor text-[2rem] font-[700]'>
              My Recent Projects
            </h3>
          </div>
          <div className='flex gap-3'>
            <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
              All
            </button>
            <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
              Web Design
            </button>
            <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
              UX/UI Design
            </button>
          </div>
        </div>
        <div className='flex items-center gap-4 flex-wrap mt-12'>
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos='fade-zoom-in'
              data-aos-delay='50'
              data-aos-duration='1000'
              className='group max-w-full sm:w-[48.5%] md:w-[31.8%] relative z-[1]'>
              <figure>
                <img className='rounded-[8px]' src={portfolio.imgUrl} alt={portfolio.title} />
              </figure>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300'>
                <h3 className='text-white text-lg font-semibold'>{portfolio.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {nextItems < portfolios.length && (
          <div className='text-center mt-8'>
            <button
              onClick={loadMoreHandler}
              className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
