import React from 'react'
import ValuationForm from './CreateListProperty'
import News from '../../Frontend/home/parts/News';

const Homelist = () => {
  return (
    <div className='bg-[#333]'>
      <ValuationForm />
      <News/>
    </div>
  );
}

export default Homelist