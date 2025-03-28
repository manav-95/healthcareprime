import React, { useState, useEffect } from 'react'

// Icons 
import { IoIosStar } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdOutlineDirections } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { BsBookmarkCheck } from "react-icons/bs";

// Tippy React
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Main Images 
import Main_Hospital_Image from '../assets/main-images/main-hospital-image.png'
import Patint_Room from '../assets/main-images/patient-room.jpg'
import Hallway from '../assets/main-images/hallway.jpg'
import Main_Hospital_Image_2 from '../assets/main-images/main-hospital-image.png'

// Rounded Images
import First_Logo from '../assets/rounded-images/first-logo.jpg'
import Second_Logo from '../assets/rounded-images/second-logo.jpg'
import Third_Logo from '../assets/rounded-images/third-logo.jpg'

// Dynamic Content Components imports
import Description from '../components/dynamic-contents/Description'
import Photos from '../components/dynamic-contents/Photos'
import Videos from '../components/dynamic-contents/Videos'
import Reviews from '../components/dynamic-contents/Reviews'

const Home = () => {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 425);

    const [activeTabButton, setActiveTabButton] = useState('description')

    const starIcon = Array(5).fill(null);

    useEffect(() => {
        const handleResize = () => setIsWideScreen(window.innerWidth >= 425);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const buttons = [
        { title: 'Add Review', icon: <MdEdit className='text-yellow-400 h-5 w-5' />, Color: 'border-yellow-400 text-yellow-500' },
        { title: 'Direction', icon: <MdOutlineDirections className='text-pink-400 h-5 w-5' />, },
        { title: 'Save', icon: <BsBookmarkCheck className='text-pink-400 h-5 w-5' />, Bold: 'font-semibold' },
        { title: 'Share', icon: <FaRegShareFromSquare className='text-pink-400 h-5 w-5' />, },
    ]

    const roundedImages = [
        { image: First_Logo, alt: 'first logo', },
        { image: Second_Logo, alt: 'second logo', },
        { image: Third_Logo, alt: 'third logo', },

    ]

    const tabButtons = [
        { id: 'description', component: <Description />, title: 'Description', marginX: 'mr-2', paddingX: 'pr-1 min-[425px]:pr-2' },
        { id: 'photos', component: <Photos />, title: 'Photos', marginX: 'mx-2', paddingX: 'px-1 min-[425px]:px-2' },
        { id: 'videos', component: <Videos />, title: 'Videos', marginX: 'mx-2', paddingX: 'px-1 min-[425px]:px-2' },
        { id: 'reviews', component: <Reviews />, title: 'Reviews', marginX: 'mx-2', paddingX: 'px-1 min-[425px]:px-2' },
    ]


    const images = [
        Main_Hospital_Image,
        Patint_Room,
        Hallway,
        Main_Hospital_Image_2,
        Main_Hospital_Image_2,
        Main_Hospital_Image_2,
        Main_Hospital_Image_2,






    ]

    return (
        <div className='max-w-7xl container mx-auto px-4'>




            {/*Main Image Gird */}
            {/* <div className='grid grid-cols-12 gap-2 sm:gap-4 lg:gap-4 py-4'>
                <div className='col-span-12 lg:col-span-8'>
                    <img src={Main_Hospital_Image} alt='main hospital' className='h-[240px] min-[425px]:h-[280px] sm:h-[380px] lg:h-[510px] w-full rounded-sm object-cover' />

                    <div className='grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-0 col-span-12 lg:col-span-4 lg:flex lg:flex-col lg:justify-between lg:space-y-4'>
                        <div>
                            <img src={Patint_Room} alt='Patient Room' className='h-full w-full object-cover object-center rounded-sm' />
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${Hallway})`,
                            }}
                            className="relative h-full w-full bg-cover bg-center rounded-sm"
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                                <div className="flex flex-col justify-center items-center text-white text-2xl">
                                    <p>+</p>
                                    <p>15 more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* New Conditional Rendering Grid */}
            <div className='grid grid-cols-12 gap-2 sm:gap-4 lg:gap-4 py-4'>
                {/* Main Image */}
                <div className={`col-span-12 ${images.length === 1 ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
                    <img
                        src={images[0]}
                        alt='main hospital'
                        className='h-[240px] min-[425px]:h-[280px] sm:h-[380px] lg:h-[510px] w-full rounded-sm object-cover'
                    />
                </div>

                {/* Conditional Grid for Other Images */}
                {images.length > 1 && (
                    <div className='grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-0 col-span-12 lg:col-span-4 lg:flex lg:flex-col lg:justify-between lg:space-y-4'>
                        {/* First Additional Image */}
                        <div>
                            <img
                                src={images[1]}
                                alt='Patient Room'
                                className='h-full w-full object-cover object-center rounded-sm'
                            />
                        </div>

                        {/* Show the third image only if there are 3 or more images */}
                        <div className="relative h-full w-full">
                            {images.length >= 4 ? (
                                <div
                                    style={{ backgroundImage: `url(${images[2]})` }}
                                    className="relative h-full w-full bg-cover bg-center rounded-sm"
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                                        <div className="flex flex-col justify-center items-center text-white text-2xl">
                                            <p>+</p>
                                            <p>{images.length - 3} more</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {images.length > 2 && (
                                        <img
                                            src={images[2]}
                                            alt='Hallway'
                                            className='h-full w-full object-cover object-center rounded-sm'
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                )}
            </div>








            {/* Main Image Contents */}
            < div className='flex flex-col items-start sm:flex-row sm:justify-between sm:items-start py-2 sm:py-0' >
                {/* Left Side */}
                <div div className='flex flex-col justify-center space-y-1.5' >
                    <h1 className='text-2xl lg:text-4xl font-semibold text-wrap'>Kokilaben Dhirubhai Ambani Hospital</h1>
                    <p className='text-md lg:text-xl font-medium'>Andheri, Mumbai</p>
                    <p className='text-md lg:text-xl font-medium'>MultiSpeciality hospital <strong>700 Beds</strong></p>
                </div>

                {/* Right Side  */}
                <div className='flex flex-col justify-center text-[#74c365] my-2 sm:my-0 space-y-0.5 sm:space-y-1.5 text-left sm:text-right'>
                    <div className='flex justify-center items-center'>
                        <p className='text-lg font-medium mr-3'>4.8</p>
                        {starIcon.map((_, index) => (
                            <IoIosStar key={index} className='h-5 w-5 mr-0.5' />
                        ))
                        }
                    </div>
                    <div className='text-gray-600'>
                        <p>59 Reviews</p>
                    </div>
                </div>

            </div>



            {/* Buttons & Rounded Images*/}
            <div className='flex flex-col sm:flex-row items-start sm:items-center sm:space-y-0 space-y-5 justify-between pb-4 sm:py-4'>

                {/* Left Side for Buttons */}
                <div className='flex items-center space-x-2 min-[425px]:space-x-1 md:space-x-2'>
                    {buttons.map((btn, index) => (
                        <Tippy key={index} content={btn.title}>
                            <button
                                key={index}
                                className={`flex justify-center items-center gap-x-[5px] text-xs sm:text-sm md:text-base border-2 py-2 px-5 min-[425px]:px-2 md:px-4 rounded ${btn.Color} ${btn.Bold} `}
                            >
                                {btn.icon} {isWideScreen && btn.title}
                            </button>
                        </Tippy>
                    ))}
                </div>

                {/* Right Side for Rounded Images */}
                <div className='flex space-x-1.5 md:space-x-2'>
                    {roundedImages.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt={item.alt}
                            className='h-14 w-14 md:h-14 md:w-14 object-cover object-center rounded-full'
                        />
                    ))}
                </div>

            </div>


            {/* Dynamic Section */}

            <div className='flex flex-col py-2 md:py-0.5'>
                {/* For Tab Buttons */}
                <div className='flex items-center justify-start border-b-2'>
                    {tabButtons.map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setActiveTabButton(btn.id)}
                            className={` ${btn.marginX} ${btn.paddingX} pt-1 pb-3 text-xs sm:text-base md:text-lg font-semibold transition-all duration-150 ease-in-out ${activeTabButton === btn.id ? 'text-gray-900 border-b-[6px] border-gray-700 rounded-sm' : 'border-b-[6px] border-transparent text-gray-500'} `}
                        >
                            {btn.title}
                        </button>
                    ))}
                </div>

                {/* For Contents */}
                <div className=''>

                    {tabButtons.map((btn) =>
                        activeTabButton === btn.id ? btn.component : null
                    )}


                </div>
            </div>
        </div >





    )
}

export default Home