
import React, { useState, useEffect } from 'react';
import data from '../../assets/data/portfolioData.js';
import Modal from './Modal.jsx';

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3);
  };

  const showModalHandler = id  => {
    setShowModal(true)
    setActiveID(id)
  }


    useEffect (() =>{
      if (selectTab === "all"){
        setPortfolios(data);
      }
      if(selectTab === "web-design") {
        const filterData = data.filter(item => item.category = "Web Design");
        setPortfolios(filterData);
      }

      if(selectTab === "ux-design") {
        const filterData = data.filter(item => item.category = "Ux");
        setPortfolios(filterData);
      }
    }, [selectTab]);
 
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
            <button onClick = {()=> setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
              All
            </button>
            <button onClick = {()=> setSelectTab('web-design')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
              Web Design
            </button>
            <button onClick = {()=> setSelectTab('ux-design')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
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
              <div className='w-full h-full flex items-center justify-center'>
                <button onClick={() => showModalHandler(portfolio.id)}className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                  See Details
                </button>

              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-8'>
          {nextItems < portfolios.length && data.length > 6 && (

            <button
              onClick={loadMoreHandler}
              className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
              Load More
            </button>
      
          )}

          </div>
          </div>

        {showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>}
    
    
     
    </section>

  );
};

export default Portfolio;
