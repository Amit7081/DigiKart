import React from 'react'

const Mid_banner = () => {
  return (
<div className="flex items-center justify-center w-full h-screen bg-gray-100 ">
  <div className="w-[1200px] h-[500px] relative border-4 border-white rounded-2xl shadow-xl overflow-hidden">
    
    {/* Scrollable Image Container */}
    <div className="w-full h-full overflow-auto scrollbar-hide">
      <img
        src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg"
        alt="Laptop"
        className="min-w-[1500px] min-h-[500px] object-contain"
      />
    </div>

    {/* Fixed Centered Content */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
      <h1 className="text-4xl font-bold text-[#0f2027] m-4">Next-gen electronics in your fingerprint</h1>
      <h3 className="text-xl font-semibold text-black">Discovers the latest tech innovation with unpredictable price</h3>
       <button
          className="mt-4 mb-4 bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-6 py-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl capitalize">
         Shop now
        </button>
    </div>
  </div>
</div>



  )
}

export default Mid_banner
