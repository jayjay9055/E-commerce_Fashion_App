import React from 'react'
import Image1 from '../../assets/women/women.png'
import Image2 from '../../assets/women/women2.jpg'
import Image3 from '../../assets/women/women3.jpg'
import Image4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id:1,
        img: Image1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id:2,
        img: Image2,
        title: "Women Western",
        rating: 4.5,
        color: "red",
        aosDelay: "200",
    },
    {
        id:3,
        img: Image3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id:4,
        img: Image4,
        title: "Printed T-Shirt",
        rating: 4.6,
        color: "yellow",
        aosDelay: "600",
    }

]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top Selling Products for you
                    </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>
                    Products
                    </h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, impedit.
                </p>
            </div>
            {/* Body section */}
            <div>
                <div
                className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center 
                gap-5'>
                    {/* card section */}
                    { ProductsData.map((data) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className='space-y-3'>
                                <img src={data.img} alt=""
                                className='h-[220px] w-[150px]
                                object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}
                                    </p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className= 'text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* view all button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer
                    bg-primary text-white py-1 px-5 rounded-md'>View All</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products