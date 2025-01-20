import React from 'react'
import ExImage from '../../assets/main-images/main-hospital-image.png'

const Photos = () => {

  const photos = Array(16).fill(null)

  return (
    <div>
      <div className='grid grid-cols-4 gap-4 py-8'>
        {photos.map((photo) => (
          <img
          src={ExImage}
          alt='ex image'
          className='rounded-sm object-cover object-center shadow-lg'
          />
        ))}
      </div>
    </div>
  )
}

export default Photos