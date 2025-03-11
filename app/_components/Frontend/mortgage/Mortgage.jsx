import React from 'react'
import Hero from './parts/Hero'
import MortgageCalculator from './parts/Mortgage'

const Mortgage = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <MortgageCalculator />
      </div>
    </>
  );
}

export default Mortgage