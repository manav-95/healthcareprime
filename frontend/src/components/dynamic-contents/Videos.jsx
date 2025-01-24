import React from 'react'
import ExImage from '../../assets/main-images/main-hospital-image.png'

import { GoDotFill } from "react-icons/go";

const Videos = () => {

  const videos = [
    { image: ExImage, duration: '2:39', views: '93 views', relativeTime: '2 weeks ago', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officiis quaerat voluptatum enim', },
    { image: ExImage, duration: '3:40', views: '91 views', relativeTime: '3 weeks ago', title: 'Lorem ipsum dolor sit amet', },
    { image: ExImage, duration: '4:19', views: '92 views', relativeTime: '1 months ago', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officiis quaerat voluptatum enim', },
    { image: ExImage, duration: '0:55', views: '91 views', relativeTime: '2 months ago', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officiis quaerat voluptatum enim', },
    { image: ExImage, duration: '3:40', views: '92 views', relativeTime: '2 weeks ago', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', },
    { image: ExImage, duration: '4:19', views: '91 views', relativeTime: '3 weeks ago', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officiis quaerat voluptatum enim', },
    { image: ExImage, duration: '2:39', views: '92 views', relativeTime: '1 months ago', title: 'Lorem ipsum dolor sit amet Accusamus officiis quaerat voluptatum enim', },
    { image: ExImage, duration: '0:55', views: '93 views', relativeTime: '2 months ago', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', },

  ]

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-6 py-8'>
        {videos.map((video, index) => (
          <div
            key={index}
            className='flex flex-col bg-gray-100 hover:bg-gray-50 shadow-md rounded-sm transition-all'
            >

            <div className='relative'>
              <img
                src={video.image}
                alt='example image'
                className='h-40 w-full object-cover object-center rounded-sm'
              />
              <div className='absolute inset-0 bg-black bg-opacity-15'></div>
              <div className='absolute bottom-1 right-2'>
                <p className=' px-2 rounded-sm text-sm bg-black bg-opacity-80 text-white'>{video.duration}</p>
              </div>
            </div>

            <div className='py-2.5 px-2.5'>
              <p className='line-clamp-2 text-md font-semibold text-gray-900 mt-0.5'>{video.title}</p>
              <div className='flex justify-start space-x-2.5 items-center py-2'>
                  <p className='text-gray-500 text-sm'>{video.views}</p>
                  <p className='text-gray-500 text-sm flex items-center'><GoDotFill className='h-3 w-3 mr-1 text-gray-400'/> {video.relativeTime}</p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </>
  )
}

export default Videos