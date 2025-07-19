// import React from 'react'

// function FooterBottom() {
//   return (
// <div className="footer-bottom text-xs w-screen text-center bg-primary p-5">
//           <p className="mt-1 text-gray-500">
//             Copyright © 2025 All rights reserved by Subhan Ahmed
//           </p>
//         </div>  )
// }

// export default FooterBottom
import React from 'react';

function FooterBottom() {
  return (
    <div className="footer-bottom w-screen p-5 text-xs bg-gray-200">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left side */}
        <div className="flex space-x-3 items-center">
          <a href="#" className="text-gray-500 font-semibold hover:underline">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-500 font-semibold hover:underline">Terms of Use</a>
        </div>

        {/* Center */}
        <div className="text-center text-gray-400">
          ©2023 Oneistox India Pvt. Ltd.
        </div>

        {/* Right side */}
        <div className="text-right text-gray-400">
          All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
