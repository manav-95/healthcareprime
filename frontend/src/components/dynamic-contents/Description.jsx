import React from 'react'

import { FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { IoSquare } from "react-icons/io5";

import PMJAY_Logo from '../../assets/dynamic-content-images/description-images/pmjay-logo.png'
import Ex_Logo from '../../assets/dynamic-content-images/description-images/ex-logo.jpg'

// Achievement Images
import Throphy from '../../assets/dynamic-content-images/description-images/throphy.jpg'

const Description = () => {

    const departments = [
        { title: 'Gastroenterologist (3)' },
        { title: 'Internal Medicine (3)' },
        { title: 'Nephrologist (3)' },
        { title: 'Cardaic Surgeon (2)' },
        { title: 'Dermatologist (2)' },
        { title: 'Neurosurgeon (2)' },
        { title: 'Pediatric Surgeon (2)' },
        { title: 'Plastic Surgeon (2)' },
        { title: 'Phychaitrist (2)' },
        { title: 'Phychologist (2)' },
        { title: 'Spine Surgeon (2)' },
        { title: 'Diabetologist (1)' },
        { title: 'Endocrlnologist (1)' },
        { title: 'Head And Neck Surgeon (1)' },
    ]

    const corporates = [
        { image: Ex_Logo, title: 'Railways', },
        { image: PMJAY_Logo, title: 'PMJAY', },
        { image: Ex_Logo, title: 'Railways', },
        { image: PMJAY_Logo, title: 'PMJAY', },
        { image: Ex_Logo, title: 'Railways', },
        { image: PMJAY_Logo, title: 'PMJAY', },
        { image: Ex_Logo, title: 'Railways', },
        { image: PMJAY_Logo, title: 'PMJAY', },
        { image: Ex_Logo, title: 'Railways', },
        { image: PMJAY_Logo, title: 'PMJAY', },
        { image: Ex_Logo, title: 'Railways', },
        { image: PMJAY_Logo, title: 'PMJAY', },
    ]

    const accreditations = [
        { image: Ex_Logo, heading: 'NABH', subHeading: 'India Standard for Hospital Accreditation' },
        { image: PMJAY_Logo, heading: 'JCI', subHeading: 'International Standard for Hospital Accreditation' },
    ]

    
    const achievements = [
        { image: Throphy, heading: `Western India's first bilateral hand transplant` },
        { image: Throphy, heading: `Western India's first dual lobe liver transplant` },
    ]

    return (
        <>
            <div className='grid grid-cols-12 gap-6'>

                {/* Left Side */}
                <div className='col-span-9'>

                    {/* About Us Section */}
                    <div className='flex flex-col justify-center space-y-5 py-5'>
                        <h1 className='text-2xl font-semibold'>About Us</h1>
                        <p className='text-gray-600'>
                            The 750 bed multi-speciality hospital became operational in the first week of 2009. The project was initiated in 1999 by Nitu Mandke as a large-scale heart hospital, but ran into troubles after his death in 2003. Subsequently, it was completed by the Anil Ambani-led Reliance ADA group,!" The hospital has boasted of many firsts not only in India but also in Asia. Kokilaben Dhirubhai Ambani Hospital has the first 3-room intra-operative MRI suite (IMRIS) in Asia, Asia's first EDGE Radiosurgery system from Varian Medical Systems, India's 1st Spine Surgery Suite featuring the O-arm and many more.
                        </p>
                        <p className='text-gray-600'>
                            The hospital courted controversy in 2014 when it offered incentives to doctors for referring patients. It later apologised to the Maharashtra Medical Council,
                            In 2016, the hospital announced that it would be setting up 18 cancer-care centres in rural Maharashtra, under the name Reliance Cancer Centre's that will be operated and managed by Kokilaben Dhirubhai Ambani Hospital,14
                        </p>
                    </div>

                    {/* Departments Section */}
                    <div className='py-2'>
                        <h1 className='text-2xl font-semibold'>Departments</h1>
                        <div className='flex justify-start items-center flex-wrap gap-3 py-8'>
                            {departments.map((item, index) =>
                                <button
                                    key={index}
                                    className='bg-gray-100 px-4 py-2 rounded-full text-sm'
                                >
                                    {item.title}
                                </button>
                            )}
                            <button className='text-lg font-medium text-cyan-600'>more</button>
                        </div>


                    </div>

                    {/* Corporates Section */}
                    <div className='py-2'>
                        <h1 className='text-2xl font-semibold'>Corporates</h1>
                        <div className='grid grid-cols-7 gap-x-8 pt-8'>
                            {corporates.slice(0, 6).map((item, index) =>
                                <div
                                    key={index}
                                    className='flex flex-col justify-center items-center'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='rounded-full h-24 w-24'
                                    />
                                    <h1 className='py-3 text-gray-700 font-medium'>{item.title}</h1>
                                </div>
                            )}

                        </div>

                        <div className='grid grid-cols-7 gap-x-8 py-8'>
                            {corporates.slice(0, 6).map((item, index) =>
                                <div
                                    key={index}
                                    className='flex flex-col justify-center items-center'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='rounded-full h-24 w-24'
                                    />
                                    <h1 className='py-3 text-gray-700 font-medium'>{item.title}</h1>
                                </div>
                            )}

                            <div className='content-center mt-24'>
                                <button className='text-lg font-medium text-cyan-600'>more</button>
                            </div>
                        </div>


                    </div>


                    {/* Facts */}
                    <div>
                        <h1 className='text-2xl font-semibold'>Facts</h1>
                        <div className='grid grid-cols-2 py-8'>
                            <div className='flex flex-col justify-center items-start space-y-8'>
                                <p className='flex items-center text-xl font-medium'><TbArrowBadgeRightFilled className='h-8 w-8 mr-10' />3 Tesla MRI Machine</p>
                                <p className='flex items-center text-xl font-medium'><TbArrowBadgeRightFilled className='h-8 w-8 mr-10' />24/7 Pharmacy</p>
                                <p className='flex items-center text-xl font-medium'><TbArrowBadgeRightFilled className='h-8 w-8 mr-10' />24/7 Casualty</p>
                            </div>
                            <div className='flex flex-col justify-center items-start space-y-8'>
                                <p className='flex items-center text-xl font-medium'><IoSquare className='h-5 w-5 mr-10' />CT Scan - 64 Slice</p>
                                <p className='flex items-center text-xl font-medium'><IoSquare className='h-5 w-5 mr-10' />8 Operation Theatres</p>
                                <p className='flex items-center text-xl font-medium'><IoSquare className='h-5 w-5 mr-10' />24/7 Cathlab</p>

                            </div>
                        </div>
                    </div>

                    {/* Accreditations */}
                    <div className='pt-6'>
                        <h1 className='text-2xl font-semibold'>Accreditations</h1>
                        <div className='py-10'>
                            {accreditations.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex justify-start items-center space-x-10 mb-6'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.heading}
                                        className='rounded-full h-16 w-16 '
                                    />
                                    <h1 className='text-xl font-semibold'>{item.heading}</h1>
                                    <h1 className='text-xl font-semibold'>{item.subHeading}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className=''>
                        <h1 className='text-2xl font-semibold'>Achievements</h1>
                        <div className='py-10'>
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex justify-start items-center space-x-10 mb-4'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.heading}
                                        className='rounded-full h-20 w-20 '
                                    />
                                    <h1 className='text-xl font-semibold'>{item.heading}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Side */}
                <div className='col-span-3 py-5'>
                    <div className='flex flex-col justify-center space-y-10 p-2'>

                        {/* Contact And Address Details  */}
                        <div className='flex flex-col space-y-6 p-5 bg-gray-50 rounded-sm'>

                            {/* Phone  */}
                            <div className='grid grid-cols-12 items-start'>
                                <FaPhone className='col-span-2 h-6 w-6 mt-0.5' />
                                <p className='col-span-10 text-2xl'>(800) 570-3142</p>
                            </div>

                            {/* Location  */}
                            <div className='grid grid-cols-12 items-start'>
                                <FaLocationDot className='col-span-2 h-6 w-6 mt-0.5 text-red-600' />
                                <p className='col-span-10'>Rao Saheb, Achutrao Patwardhan Marg, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053</p>
                            </div>

                            {/* Website  */}
                            <div className='grid grid-cols-12 items-center'>
                                <FaGlobeAmericas className='col-span-2 h-6 w-6 mt-0.5 text-blue-500' />
                                <p className='col-span-10 text-md'>kokilabenhospital.com</p>
                            </div>

                            {/* Woring hours */}
                            <div className='grid grid-cols-12 items-center'>
                                <FaClock className='col-span-2 h-6 w-6 mt-0.5 text-blue-500' />
                                <p className='col-span-10 text-md text-[#74c365]'>Open 24 hours</p>
                            </div>

                        </div>

                        {/* Map Location  */}
                        <div>
                            <h1 className='text-2xl font-semibold'>Map</h1>
                            <iframe className='my-3 rounded-sm' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1169.3441339678525!2d72.82530259490001!3d19.13455891093334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3be7b61f1a191fff%3A0xf3d2dd13d26ba8df!2sRao%20Saheb%20Achutrao%20Patwardhan%20Marg%2C%20Four%20Bungalows%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400047!3m2!1d19.1343778!2d72.8256808!5e1!3m2!1sen!2sin!4v1737193864693!5m2!1sen!2sin" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Description


