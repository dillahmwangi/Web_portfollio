import React from 'react'
import data from '../../assets/data/portfolioData.js'

const Portfolio = () => {
  return (
  <section id='portfolio'>
    <div className='container'>
        <div className='flex items-center justify-between flex-wrap'>
            <div className='mb-7 sm:mb-0'>
                <h3 className='text-headingColor text-[2rem] font-[700]'>
                    My Recent Projects
                </h3>
            </div>
            <div className='flex gap-3 '>
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
            {
                data?.map((Portfolio,index)=>(
                    <div className='group max-w-full sm:w-[4'>

                    </div>
                    
                ))
            }

        </div>

    </div>
    
 
  </section>
  )
}

export default Portfolio;