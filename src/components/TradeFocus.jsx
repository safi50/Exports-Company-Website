import React, { useState, useEffect } from 'react'
import styles from '../style'

const productCategories = [
  {
    id: 1,
    title: "Textile & Apparel",
    items: [
      { name: "Yarn & fabrics", icon: "◆" },
      { name: "Home textiles", icon: "◆" },
      { name: "Basic garments & uniforms", icon: "◆" },
      { name: "Made-to-order solutions", icon: "◆" }
    ],
    gradient: "pink__gradient"
  },
  {
    id: 2,
    title: "Medical & Surgical",
    items: [
      { name: "Surgical instruments", icon: "◆" },
      { name: "Dental & medical tools", icon: "◆" },
      { name: "Healthcare supplies", icon: "◆" }
    ],
    gradient: "blue__gradient"
  },
  {
    id: 3,
    title: "Sports Goods",
    items: [
      { name: "Footballs & sports balls", icon: "◆" },
      { name: "Training equipment", icon: "◆" },
      { name: "Customized products", icon: "◆" }
    ],
    gradient: "white__gradient"
  },
  {
    id: 4,
    title: "Agricultural & Food",
    items: [
      { name: "Basmati rice", icon: "◆" },
      { name: "Non-basmati rice", icon: "◆" },
      { name: "Agricultural commodities", icon: "◆" }
    ],
    gradient: "pink__gradient"
  },
  {
    id: 5,
    title: "Industrial Machinery",
    items: [
      { name: "Flour mill machinery", icon: "◆" },
      { name: "Manufacturing machines", icon: "◆" },
      { name: "New & used equipment", icon: "◆" },
      { name: "Custom machinery sourcing", icon: "◆" }
    ],
    gradient: "blue__gradient"
  }
]

const TradeFocus = () => {
  const [currentIndex, setCurrentIndex] = useState(productCategories.length)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Create infinite loop by tripling the array
  const infiniteCards = [...productCategories, ...productCategories, ...productCategories]

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  // Reset position when reaching cloned cards
  useEffect(() => {
    if (!isTransitioning) return
    
    const timeout = setTimeout(() => {
      if (currentIndex >= productCategories.length * 2) {
        setIsTransitioning(false)
        setCurrentIndex(productCategories.length)
      } else if (currentIndex < productCategories.length) {
        setIsTransitioning(false)
        setCurrentIndex(productCategories.length * 2 - 1)
      }
    }, 500) // Match transition duration

    return () => clearTimeout(timeout)
  }, [currentIndex, isTransitioning])

  useEffect(() => {
    if (!isTransitioning && currentIndex !== productCategories.length * 2 && currentIndex !== productCategories.length - 1) {
      // Re-enable transitions after reset
      const timeout = setTimeout(() => setIsTransitioning(true), 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTransitioning])

  return (
    <section id='product' className='flex flex-col items-center w-full py-16 sm:py-20'>
      {/* Header */}
      <div className='text-center mb-12 px-6'>
        <h2 className={`${styles.heading2} mb-4`}>
          Our Trade Focus
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
          We specialize in connecting international buyers with reliable suppliers across diverse industries, 
          ensuring quality products and seamless trade solutions.
        </p>
      </div>

      {/* Carousel Container */}
      <div className='relative w-full max-w-[1400px] px-4 py-16'>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className='absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black-gradient border border-[#3F3E45] flex items-center justify-center text-white hover:border-cyan-400 active:border-cyan-400 transition-all duration-300 touch-manipulation'
          aria-label="Previous"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className='mx-4 sm:mx-16'>
          <div 
            className='overflow-visible touch-pan-y'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`flex gap-4 sm:gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ 
                transform: isMobile
                  ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` 
                  : `translateX(-${currentIndex * 33.33}%)`
              }}
            >
            {infiniteCards.map((category, index) => {
              // Calculate distance from center card
              const distance = Math.abs(index - currentIndex)
              const isCenter = distance === 0
              
              // Desktop scaling and opacity
              const desktopOpacity = isCenter ? 1 : distance === 1 ? 0.7 : 0.4
              const desktopScale = isCenter ? 1.08 : 0.95
              
              // Mobile - simpler approach
              const mobileOpacity = isCenter ? 1 : 0.3
              const mobileScale = 1

              return (
                <div
                  key={`${category.id}-${index}`}
                  className='flex-shrink-0 w-full sm:w-[calc(33.33%-16px)] sm:min-w-[260px] transition-all duration-500'
                  style={{ 
                    opacity: isMobile ? mobileOpacity : desktopOpacity,
                    transform: isMobile ? `scale(${mobileScale})` : `scale(${desktopScale})`
                  }}
                >
                  <div className={`relative h-[400px] bg-black-gradient rounded-[20px] p-6 border transition-all duration-300 overflow-hidden group ${
                    isCenter ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-[#3F3E45] hover:border-[#ffffff33]'
                  }`}>
                    {/* Background Gradient */}
                    <div className={`absolute z-[0] w-[70%] h-[70%] -top-10 -right-10 rounded-full ${category.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}/>
                    
                    <div className='relative z-[5] h-full flex flex-col'>
                      {/* Title */}
                      <div className='mb-6'>
                        <h3 className='font-poppins font-bold text-white text-[28px] leading-[36px]'>
                          {category.title}
                        </h3>
                      </div>

                      {/* Items Grid */}
                      <div className='flex-1 space-y-4'>
                        {category.items.map((item, idx) => (
                          <div 
                            key={idx}
                            className='flex items-start group/item'
                          >
                            <div className='flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mr-3 group-hover/item:from-cyan-500/30 group-hover/item:to-blue-500/30 transition-all duration-300'>
                              <span className='text-gradient text-[12px] font-bold'>{item.icon}</span>
                            </div>
                            <span className='font-poppins font-normal text-dimWhite text-[15px] leading-[22px] flex-1 group-hover/item:text-white transition-colors duration-300'>
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Badge */}
                      <div className='mt-4 pt-4 border-t border-[#3F3E45]'>
                        <span className='text-gradient font-poppins text-[12px] font-semibold uppercase tracking-wider'>
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className='absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black-gradient border border-[#3F3E45] flex items-center justify-center text-white hover:border-cyan-400 active:border-cyan-400 transition-all duration-300 touch-manipulation'
          aria-label="Next"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className='flex gap-2 mt-10'>
        {productCategories.map((_, index) => {
          const activeIndex = ((currentIndex % productCategories.length) + productCategories.length) % productCategories.length
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(productCategories.length + index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8' 
                  : 'bg-[#3F3E45] hover:bg-[#5F5E65] w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TradeFocus
