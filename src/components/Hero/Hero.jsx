import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"

const ImageList = [
    {
        id:1,
        img: Image1,
        title: "Up to 50% on men's wear",
        description:"Lorem ipsum",
    },
    {
        id:2,
        img: Image2,
        title: "30% off on all Women's Wears",
        description:"Lorem ipsum",
    },
    {
        id:3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:"Lorem ipsum",
    }

]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg primary/40 
        absolute -top-1/2 right-0 rounded-3xl rotate-45-z-9'>
        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                    <div>
                        <h1 className='text-5xl sm:text-6xl 
                        lg:text-7xl font-bold'>Lorem ipsum dolor</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est repellat molestiae at asperiores labore eius ea facilis inventore optio officia ex incidunt veritatis, numquam enim omnis nisi illo magnam!
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to secondary hover:scale-105
                            duration-200 text-white py-2 px-4 rounded-full">
                                    Order Now
                            </button>
                        </div>
                    </div>
                </div>
                {/* text content section */}

            </div>
        </div>
    </div>
  )
}

export default Hero