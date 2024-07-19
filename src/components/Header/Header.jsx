import React, { useRef, useEffect } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = e =>{
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top: location -80,
      left:0,
    })
  }
  const togglemenu = () => menuRef.current.classList.toggle('show__menu')
   

  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* Start of Logo */}
          <div className='flex items-center gap-[10px]'>
            <span className='w-[40px] h-[40px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
              M
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
          <div className='menu' ref={menuRef} onClick={togglemenu}>
            <ul className='flex items-center gap-10'>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">About</a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">Services</a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* End of menu */}

          {/* Start of menu right */}
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid
              border-smallTextColor py-4 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
              hover:text-white hover:font-[500] ease-in duration-300'>
              <i className="ri-send-plane-line">Let's Talk</i>
            </button>

            <span onClick={togglemenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* End of menu right */}
        </div>
      </div>
    </header>
  );
};

export default Header;
