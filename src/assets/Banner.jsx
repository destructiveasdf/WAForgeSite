const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#345c51] via-[#3d6d63] to-[#458576] p-3 text-white text-center md:mt-0 mt-14">
      <div className="flex justify-center items-center space-x-2 text-sm sm:text-base md:text-lg">
        <div>Apply to Catalyst Now!</div>
        <a
          href="./Catalyst"
          className="bg-white text-[#345c51] px-2 py-1 rounded-md hover:bg-opacity-90 transition-colors duration-300 inline-block ml-2"
        >
          Click here
        </a>
      </div>
    </div>
  )
}

export default Banner