import React from 'react'

function Part4() {
  return (
    <div className="max-w-md mx-auto pt-10 ">
    <h2 className="text-2xl font-medium mb-4">Subscribe our newsletter</h2>

    <div className="flex items-center w-full rounded-full border border-gray-200 overflow-hidden bg-white">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-6 py-4 text-sm text-gray-600 bg-transparent outline-none placeholder-gray-400"
      />
      <button className="px-6 py-3 m-1 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-full text-sm font-medium hover:scale-95 transform transition">
        Subscribe
      </button>
    </div>
  </div>
  )
}

export default Part4