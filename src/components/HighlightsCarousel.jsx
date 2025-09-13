import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HighlightsCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Handle touch swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current

    // Swipe threshold
    if (distance > 50) {
      nextSlide() // Swiped left
    } else if (distance < -50) {
      prevSlide() // Swiped right
    }

    // Reset refs
    touchStartX.current = null
    touchEndX.current = null
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <motion.div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full px-2 sm:px-4 lg:px-6"
          >
            <img
              src={img}
              alt={`Highlight ${index + 1}`}
              className="w-full max-h-[480px] object-contain rounded-xl mx-auto"
            />
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md left-2 top-1/2"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md right-2 top-1/2"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default HighlightsCarousel
