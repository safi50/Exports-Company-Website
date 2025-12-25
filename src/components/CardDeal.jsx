import React from 'react'
import styles, { layout } from '../style'

const sourcingRegions = [
  { name: 'South Asia', gradient: 'pink__gradient' },
  { name: 'Middle East', gradient: 'blue__gradient' },
  { name: 'Europe', gradient: 'white__gradient' }
]

const targetMarkets = [
  { name: 'Europe', gradient: 'blue__gradient' },
  { name: 'Middle East', gradient: 'pink__gradient' },
  { name: 'Asia', gradient: 'white__gradient' },
  { name: 'Africa', gradient: 'blue__gradient' }
]

const CardDeal = () => {
  return (
    <section className={`${layout.section} py-16`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Markets & Sourcing <br className='sm:block hidden'/>Regions
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We support trade activities across multiple regions based on demand and supplier availability. 
          Our regional focus is flexible and demand-driven rather than limited to specific countries.
        </p>
      </div>

      <div className='flex-1 flex flex-col md:ml-10 ml-0 md:mt-0 mt-10 gap-8 relative'>
        {/* Globe Visualization */}
        <div className='absolute -right-10 top-0 w-[300px] h-[300px] hidden lg:block'>
          <div className='relative w-full h-full'>
            {/* Main Globe */}
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 animate-pulse'></div>
            
            {/* Rotating rings */}
            <div className='absolute inset-[20px] rounded-full border border-cyan-500/20'></div>
            <div className='absolute inset-[40px] rounded-full border border-blue-500/20'></div>
            <div className='absolute inset-[60px] rounded-full border border-cyan-500/20'></div>
            
            {/* Center glow */}
            <div className='absolute inset-[80px] rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-xl'></div>
            
            {/* Connection points */}
            <div className='absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-cyan-400 animate-ping'></div>
            <div className='absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-blue-500 animate-ping' style={{ animationDelay: '1s' }}></div>
            <div className='absolute bottom-[30%] left-[40%] w-3 h-3 rounded-full bg-cyan-400 animate-ping' style={{ animationDelay: '2s' }}></div>
            <div className='absolute top-[60%] right-[40%] w-3 h-3 rounded-full bg-blue-500 animate-ping' style={{ animationDelay: '0.5s' }}></div>
            
            {/* Meridian lines */}
            <div className='absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent'></div>
            <div className='absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent'></div>
          </div>
        </div>

        {/* Sourcing Regions */}
        <div className='relative'>
          <div className='flex items-center mb-4'>
            <div className='w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mr-3'></div>
            <h3 className='font-poppins font-semibold text-white text-[20px]'>
              Key Sourcing Regions
            </h3>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {sourcingRegions.map((region, index) => (
              <div
                key={index}
                className='relative group'
              >
                <div className='relative bg-black-gradient rounded-[16px] p-5 min-h-[70px] border border-[#3F3E45] hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'>
                  {/* Background Gradient */}
                  <div className={`absolute z-[0] w-[80%] h-[80%] -top-5 -right-5 rounded-full ${region.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}/>
                  
                  <div className='relative z-[5] flex items-center justify-between h-full'>
                    <span className='font-poppins font-semibold text-white text-[16px] whitespace-nowrap'>
                      {region.name}
                    </span>
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300 flex-shrink-0 ml-3'>
                      <span className='text-gradient text-[18px]'>🌍</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Markets */}
        <div className='relative'>
          <div className='flex items-center mb-4'>
            <div className='w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mr-3'></div>
            <h3 className='font-poppins font-semibold text-white text-[20px]'>
              Key Target Markets
            </h3>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {targetMarkets.map((market, index) => (
              <div
                key={index}
                className='relative group'
              >
                <div className='relative bg-black-gradient rounded-[16px] p-5 min-h-[70px] border border-[#3F3E45] hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'>
                  {/* Background Gradient */}
                  <div className={`absolute z-[0] w-[80%] h-[80%] -top-5 -right-5 rounded-full ${market.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}/>
                  
                  <div className='relative z-[5] flex items-center justify-between h-full'>
                    <span className='font-poppins font-semibold text-white text-[16px] whitespace-nowrap'>
                      {market.name}
                    </span>
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300 flex-shrink-0 ml-3'>
                      <span className='text-gradient text-[18px]'>📍</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Connector */}
        <div className='relative mt-4'>
          <div className='flex items-center justify-center gap-4'>
            <div className='flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'></div>
            <div className='px-4 py-2 rounded-full bg-black-gradient border border-cyan-500/50'>
              <span className='font-poppins text-dimWhite text-[14px]'>
                Connecting Suppliers with Global Markets
              </span>
            </div>
            <div className='flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDeal
