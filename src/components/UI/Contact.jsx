import React from 'react'

const Contact = () => {
  return (

    <section id='contact' className='pb-16'>
        <div className='container'>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe title = 'google-maps'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.
                454566306433!2d36.849152940240515!3d-1.2534250270553549!2m3!1f0!2f0!3f0!3m2!
                1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17eb1d447363%3A0x17a2d29bdcf01fda!2sKCA%
                20University!5e0!3m2!1sen!2ske!4v1720765635686!5m2!1sen!2ske" 
                className='border-0 w-full h-full'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] 
              lg:flex items-center bg-indigo-100 px-4 lg:px-8'>

                <form className="w-full">
                  <div className='mb-5'>
                    <input type="text"
                          placeholder='Enter Your Name'
                          className='w-full p-3 focus:outline-none rounded-[5px]'/>
                  </div>

                  <div className='mb-5'>
                    <input type="email"
                          placeholder='Enter Your Email'
                          className='w-full p-3 focus:outline-none rounded-[5px]'/>
                  </div>

                  <div className='mb-5'>
                    <input type="text"
                          placeholder='Write Subject'
                          className='w-full p-3 focus:outline-none rounded-[5px]'/>
                  </div>
                  
                  <div className='mb-5'>
                    <input type="text"
                          row={3}
                          placeholder='Write Subject'
                          className='w-full p-3 focus:outline-none rounded-[5px]'/>
                  </div>

                  <button className='w-full p-3 focus:outline-none bg-smallTextColor text-white 
                  hover:bg-headingColor text-center ease-linear duration-150 rounded-[5px]'>
                    Send Message
                  </button>

                </form>

              </div>

            </div>

        </div>

    </section>
  )
}

export default Contact