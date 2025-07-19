// import { Star, ArrowUpRight } from "lucide-react"
import CallMadeIcon from '@mui/icons-material/CallMade';
import StarRateIcon from '@mui/icons-material/StarRate';
import Handsvg from '../../../assets/images/BannerImage/hand.svg'
export default function CareerPathSection() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 relative -top-20 z-10">
      <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 rounded-3xl p-12 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-300 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Discover your ideal <span className="text-cyan-300">Career Path as a Urban Designer</span>
          </h1>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start space-x-3">
              <StarRateIcon className="w-6 h-6 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-lg leading-relaxed">Make an informed career choice with data driven salary insights</p>
            </div>

            <div className="flex items-start space-x-3">
              <StarRateIcon className="w-6 h-6 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-lg leading-relaxed">Gain a competitive edge with a personalised report</p>
            </div>

            <div className="flex items-start space-x-3">
              <StarRateIcon className="w-6 h-6 text-cyan-300 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-lg leading-relaxed">Discover the most sought-after jobs and skills in your industry</p>
            </div>
          </div>

          {/* CTA Button and Hand Illustration */}
          <div className="flex items-center justify-start w-full">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="md:text-lg text-xs">Discover Your Career Path</span>
              <CallMadeIcon className="w-5 h-5" />
            </button>

            {/* Hand Illustration */}
            <div className="ml-0 relative">
                <img src={Handsvg} style={{width:120, height:100}} alt="" />
              {/* <svg width="120" height="100" viewBox="0 0 120 100" className="transform rotate-12">
                <path
                  d="M45 85 C35 80, 30 70, 35 60 C40 50, 50 45, 60 50 L65 45 C70 40, 80 42, 82 48 L85 45 C90 40, 95 42, 95 48 L95 52 C100 50, 105 52, 105 58 L105 65 C105 75, 95 85, 85 85 L45 85 Z"
                  fill="#E8A87C"
                  stroke="#D4956B"
                  strokeWidth="1"
                />
                <path
                  d="M60 50 C55 45, 50 40, 45 45 C40 50, 42 60, 50 65 L60 60 Z"
                  fill="#E8A87C"
                  stroke="#D4956B"
                  strokeWidth="1"
                />
                <line x1="70" y1="45" x2="70" y2="75" stroke="#D4956B" strokeWidth="0.5" />
                <line x1="80" y1="45" x2="80" y2="75" stroke="#D4956B" strokeWidth="0.5" />
                <line x1="90" y1="48" x2="90" y2="75" stroke="#D4956B" strokeWidth="0.5" />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
