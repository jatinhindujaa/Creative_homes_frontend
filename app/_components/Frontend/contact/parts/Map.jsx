import React from 'react'

const Map = () => {
  return (
    <div className='w-full flex justify-center md:w-[80%]'>
      <div className="w-[92%] h-[300px] rounded-lg my-5 overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Jumeirah%20Dubai&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Map