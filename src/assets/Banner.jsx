import { useState, useEffect } from "react"

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const countDownDate = new Date("Feb 15, 2025 00:00:00").getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-[#345c51] via-[#3d6d63] to-[#458576] p-3 text-white text-center">
      <div className="flex justify-center items-center space-x-2 text-sm sm:text-base md:text-lg">
        <div>WAFORGE 2025 in:</div>
        <div className="flex space-x-1 font-bold">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
        <a
          href="./hackathon"
          className="bg-white text-[#345c51] px-2 py-1 rounded-md hover:bg-opacity-90 transition-colors duration-300 inline-block ml-2"
        >
          SIGN UP NOW
        </a>
      </div>
    </div>
  )
}

export default Banner

