import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-2 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 text-center">
                <p className="text-sm">
                    &copy; 2024 E-Shop. All rights reserved.
                </p>
                <div className="mt-4 space-x-6">
                    <a href="/about" className="text-gray-400 hover:text-gray-300">About Us</a>
                    <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
