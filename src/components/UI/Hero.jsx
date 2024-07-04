import React from 'react'
import profile1 from '../../assets/images/profile1.jpeg';
import CountUp from 'react-countup';


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
                        data-aos-duration='1800'
                        data-aos-delay='200'
                        className='flex items-center gap-6 mt-7'>

                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-mail-line"></i>
                                Hire Me
                                </button>
                            </a>

                            <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-smallTextColor'>
                                See Portfolio
                            </a>
                    </div>

                    <p data-aos='fade-left'
                                 data-aos-duration='1500' className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                                    
                    <span>
                    <i class="ri-apps-2-line"></i>
                    </span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Quos expedita odio corrupti explicabo ipsum facilis dolorem earum facere animi, 
                                eos nesciunt officia consequuntur ut quod! Impedit quo nobis assumenda maiores?</p>

                    <div className='flex items-center gap-9 mt-14'>
                        <span className='text-smallTextColor text-[15px] font-[600]'>
                                Follow me:
                        </span>
                        <span>
                            <a href="#Linkedin" className='text-smallTextColor text-[15px] font-[600]'>
                                <i class="ri-linkedin-line"></i></a>
                        </span>

                        <span>
                            <a href="#github" className='text-smallTextColor text-[15px] font-[600]'>
                                <i class="ri-github-fill"></i></a>
                        </span>

                        <span>
                            <a href="#Linkedin" className='text-smallTextColor text-[15px] font-[600]'>
                            <i class="ri-phone-line"></i></a>
                        </span>

                        <span>
                            <a href="#Linkedin" className='text-smallTextColor text-[15px] font-[600]'>
                            <i class="ri-mail-line"></i></a>
                        </span>
                        
                    </div>
                </div>

                {/* End of hero left content */}

                {/* hero image */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center '>
                        <img 
                        src={profile1}
                         alt="Profile"
                         className='h-81 rounded-full' />

                    </figure>

                    </div>
                {/* End of hero image */}

                {/* Hero content right */}
                    <div className='basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={3} duration={2} suffix='+'/> 
                        </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>
                        Years of experience
                    </h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='+'/> 
                        </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>
                        Success Rate
                    </h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={150} duration={2} suffix='+'/> 
                        </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>
                       Happy Clients
                    </h4>
                    </div>

                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={210} duration={2} suffix='+'/> 
                        </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>
                        Projects completed
                    </h4>
                    </div>

                    </div>

                {/* End of hero content right */}

            </div>

        </div>

    </section>
  
  )
}

export default Hero;