import React from 'react'

const Header = () => {
  return(
  <header className="w-full h-[80px] leading-[80px] flex items-center">

    <div className='container'>
        <div className='flex items-center justify-between'>
{/* Start of Logo  */}
            <div className='flex items-center gap-[10px]'>
                <span className='w-[40px] h-[40px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>M

                </span>
                <div className='leading-[20px]'>
                  <h2 className='text-xl text-smallTextColor font-[700]'>
                    Mwangi Muthony Charity
                  </h2>
                  <p className='text-smallTextColor text-[16px] font-[500]'>
                      personal
                  </p>
                  
                </div>
            </div>
{/* End of Logo */}

{/* Start of Menu */}
<div className='menu'>
<ul className='flex items-center gap-10'>

  <li>
    <a className='text-smallTextColor font-[600]' href="#about">About</a>
  </li>
  <li>
    <a className='text-smallTextColor font-[600]' href="#services">Services</a>
  </li>
  <li>
    <a className='text-smallTextColor font-[600]' href="Portfolio">Portfolio</a>
  </li>
  <li>
    <a className='text-smallTextColor font-[600]' href="#contact">Contact</a>
  </li>

</ul>
</div>

{/* End of menu */}

{/* Start of menu right */}
<div className='flex items-center gap-4'>
  <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid
   border-smallTextColor py-4 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
    hover:text-white hover:font-[500] ease-in duration-300'>
  <i class="ri-send-plane-line">Let's Talk</i>
  </button>

  <span className='text-2l text-smallTextColor md:hidden cursor-pointer'>

  <i class="ri-menu-line"></i>

  </span>

</div>
        </div>

    </div>
  </header>
  )
}

export default Header;
