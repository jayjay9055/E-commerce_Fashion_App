import React from 'react'
import Logo from '../../assets/logo.png'
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'> 
    {/* upper Navbar */}
    {/* ( property ) React.HTMLAttributes<T>.className?: string | undefined */}
    <div className='bg-primary/40 py-2'>
      <div className='container flex justify-between items-center'>
        <div>
          <a href="#"
          className='font-bold
          text-2xl sm:text-3xl flex gap-2'>
            <img src={Logo} alt="Logo"
            className="w-10" />
            Sakura Shop
          </a>
        </div>
        {/* search bar and order button */}
        <div className="relative group hidden sm:block">
                <div g>
                    <input 
                    type="text" 
                    placeholder="search"
                    className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 focus:outline-none focus:border-1 focus:primary"
                    />
                    <IoIosSearch
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
        </div>      
    </div>
    </div>
    {/* lower Navbar */}
    <div></div>

     </div>
  );
};

export default Navbar;