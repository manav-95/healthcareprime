import React from 'react'

import { IoIosStar, IoMdThumbsUp } from "react-icons/io";
import { BiSolidComment } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";

// Reviewers Images 
import First_Reviewer from '../../assets/dynamic-content-images/review-images/first-reviewer-image.jpg'
import Second_Reviewer from '../../assets/dynamic-content-images/review-images/second-reviewer-image.jpg'
import Third_Reviewer from '../../assets/dynamic-content-images/review-images/third-reviewer-image.jpg'
import Fourth_Reviewer from '../../assets/dynamic-content-images/review-images/fourth-reviewer-image.jpg'

const Reviews = () => {

  const starIcon = Array(5).fill(null);

  const bars = [
    { id: 1, width: 'w-[250px]', },
    { id: 2, width: 'w-[600px]', },
    { id: 3, width: 'w-[400px]', },
    { id: 4, width: 'w-[200px]', },
    { id: 5, width: 'w-[100px]', },
  ]

  const reviewer = [
    { image: First_Reviewer, name: 'Julia Deep', reviewCount: '1 Review', relativeTime: '4 days ago', reviewedText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.` },
    { image: Second_Reviewer, name: 'John Doe', reviewCount: '1 Review', relativeTime: '3 days ago', reviewedText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.` },
    { image: Third_Reviewer, name: 'Jane Doe', reviewCount: '1 Review', relativeTime: '2 days ago', reviewedText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.` },
    { image: Fourth_Reviewer, name: 'Blackacre', reviewCount: '1 Review', relativeTime: '1 days ago', reviewedText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.` },
  ]

  return (
    <div className='grid grid-cols-12 gap-6 py-8'>

      {/* Left Side  */}
      <div className='col-span-9'>

        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Reviews</h1>
          <select className='px-4 font-semibold text-gray-500'>
            <option>Newest First</option>
            <option>Old</option>
            <option>All</option>
          </select>
        </div>

        {/* Review Bar & Total Reviews  */}
        {/* <div className='flex w-full items-center space-x-4 py-8'>
          <div className='bg-[#1e90ff] text-white bg-opacity-90 py-10 px-14 rounded-2xl flex flex-col items-center justify-center space-y-1'>
            <h1 className='text-4xl font-semibold'>4.8</h1>
            <p className='text-lg font-semibold'>59 Reviews</p>
          </div>
          <div className='flex flex-col -space-y-0.5 justify-start '>
            <div className='flex items-center gap-x-4 text-lg text-gray-600 font-semibold'>1<div className='h-4 w-[250px] bg-[#1e90ff] bg-opacity-90 rounded-xl'></div></div>
            <div className='flex items-center gap-x-4 text-lg text-gray-600 font-semibold'>2<div className='h-4 w-[600px] bg-[#1e90ff] bg-opacity-90 rounded-xl'></div></div>
            <div className='flex items-center gap-x-4 text-lg text-gray-600 font-semibold'>3<div className='h-4 w-[400px] bg-[#1e90ff] bg-opacity-90 rounded-xl'></div></div>
            <div className='flex items-center gap-x-4 text-lg text-gray-600 font-semibold'>4<div className='h-4 w-[200px] bg-[#1e90ff] bg-opacity-90 rounded-xl'></div></div>
            <div className='flex items-center gap-x-4 text-lg text-gray-600 font-semibold'>5<div className='h-4 w-[100px] bg-[#1e90ff] bg-opacity-90 rounded-xl'></div></div>
          </div>
        </div> */}

        {/* Review Box & Bars */}
        <div className='grid grid-cols-12 py-8'>
          {/* Left box */}
          <div className='col-span-3 bg-[#1e90ff] text-white bg-opacity-90 rounded-2xl flex flex-col items-center justify-center space-y-1'>
            <h1 className='text-4xl font-semibold'>4.8</h1>
            <p className='text-lg font-semibold'>59 Reviews</p>
          </div>
          {/* Right Bars  */}
          <div className='col-span-9 flex'>
            <div className='flex flex-col justify-center w-full'>
              {bars.map(bar => (
                <div key={bar.id} className='flex items-center w-full'>
                  <div className='w-16 flex justify-center items-center'>
                    <span className='text-lg font-semibold text-gray-600'>{bar.id}</span>
                  </div>
                  <div className={`h-[18px] ${bar.width} bg-[#1e90ff] bg-opacity-90 rounded-2xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews by peoples */}
        {reviewer.map((review, index) => (
          <div key={index} className='my-8'>
            {/* Reviwer Information */}
            <div className='grid grid-cols-11'>
              <div className='col-span-1'>
                <img src={review.image} alt="reviewer image" className='h-20 w-20 rounded-full object-cover object-center' />
              </div>
              <div className='col-span-4 px-6 flex flex-col justify-center'>
                <h1 className='text-2xl font-semibold'>{review.name}</h1>
                <p className='text-md text-gray-600 font-semibold'>{review.reviewCount}</p>
              </div>
            </div>

            {/* Reviewed and Relative Days */}
            <div className='flex space-x-4 py-2.5'>
              <div className='flex justify-center items-center'>
                {starIcon.map((_, index) => (
                  <IoIosStar key={index} className='h-6 w-6 mr-0.5 text-[#74c365]' />
                ))
                }
              </div>
              <div>
                <p className='text-md font-semibold'>{review.relativeTime}</p>
              </div>
            </div>

            {/* Reviewed text and Like, Comment, Share Buttons */}
            <div className='flex flex-col items-start py-1'>
              <div>
                <p className='text-base font-medium text-gray-400'>{review.reviewedText}</p>
              </div>
              <div className='flex items-center space-x-8'>
                <button className='flex gap-2 items-center py-2 text-lg text-gray-500 font-medium '><IoMdThumbsUp className='h-6 w-6' />Like</button>
                <button className='flex gap-2 items-center py-2 text-lg text-gray-500 font-medium '><BiSolidComment className='h-5 w-5' />Comment</button>
                <button className='flex gap-2 items-center py-2 text-lg text-gray-500 font-medium '><PiShareFatFill className='h-6 w-6' />Share</button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Right Side  */}
      <div className='col-span-3 '>
        <div className='flex flex-col justify-center items-center py-6 px-2 bg-white border-2 rounded-sm'>
          <h1 className='text-xl font-medium'>Rate Your Experience</h1>
          <div className='flex justify-center items-center py-2'>
                {starIcon.map((_, index) => (
                  <IoIosStar key={index} className='h-7 w-7 mr-0.5 text-[#74c365]' />
                ))
                }
              </div>
              <button className='border-2 bg-gray-100 px-6 py-2 my-1 text-lg font-medium rounded-sm'>Write a Review</button>
        </div>
      </div>

    </div>
  )
}

export default Reviews