import React from 'react'
import Image1 from '../../assets/shirt/shirt1.png'
import Image2 from '../../assets/shirt/shirt2.png'
import Image3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'

const TopProductsData = [
    {
        id:1,
        img: Image1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
        id:2,
        img: Image2,
        title: "Printed shirt",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        id:3,
        img: Image3,
        title: "Women shirt",
        description: "Lorem ipsum dolor sit amet."
    }
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* header section */}
            <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>
                    Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, impedit.
                </p>
            </div>

            {/* body section */} 
            
            <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                { TopProductsData.map((data) => (
                        <div
                        data-aos="zoom-in"
                        className='rounded-2xl bg-white dark:bg-gray-800 
                        hover:bg-black/80
                        dark:hover:bg-primary
                        hover:text-white relative shadow-xl
                        duration-300 group max-w-[300px]'>
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img 
                                    src={data.img} 
                                    alt=""
                                    className='max-w-[140px] block mx-auto
                                    transform -translate-y-20 group-hover:scale-105 duration-300 
                                    drop-shadow-md'
                                />
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center
                                justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p
                                    className='text-gray-500 group-hover:text-white duration-300
                                    text-sm line-clamp-2'> {data.description} 
                                    </p>
                                    <button className='bg-primary hover:scale-105 duration-300 text-white 
                                    py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>
                                        Order now
                                    </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts