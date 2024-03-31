import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-500 text-white ">
        <div className="px-4 py-4 flex justify-between">
            <div className="italic font-sans">© 2024 TechGlitz</div>
            <div className="flex space-x-3">
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
    </div>
  );
}
