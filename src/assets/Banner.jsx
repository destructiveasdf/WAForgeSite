const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#345c51] via-[#3d6d63] to-[#458576] p-3 text-white text-center">
      <p className="text-sm sm:text-base md:text-lg font-semibold">
        WAFORGE 2025 REGISTRATIONS ARE OPEN{' '}
        <a 
        href="./hackathon"
        className="bg-white text-[#345c51] px-2 py-1 rounded-md hover:bg-opacity-90 transition-colors duration-300 inline-block ml-2"
        >
          SIGN UP NOW
        </a>
      </p>
    </div>
  )
}

export default Banner