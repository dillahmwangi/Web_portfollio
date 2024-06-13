import React from 'react'


const Hero = () => {
  return (

    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* Start of hero left content */}

                <div className='w-full md:basis-1/2'>
                <h5 
                data-aos='fade-right' 
                data-aos-duration='1500'
                className='text-headingColor font-[600] text-[16px]'>
                    Hello Welcome
                </h5>
                <h1 data-aos='fade-up' data-aos-duration='1500'
                className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                    I'm Mwangi Muthony <br/>
                    Software Developer
                    </h1>
                    <div data-aos='fade-up'
                        data-aos-durati>

                    </div>

                </div>

                {/* End of hero left content */}

            </div>

        </div>

    </section>
  
  )
}

export default Hero