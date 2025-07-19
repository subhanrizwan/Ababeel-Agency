import { ArrowForward } from "@mui/icons-material"
import First from "../../../assets/images/Mentor-partner/mentor.webp";
 import Second from "../../../assets/images/Mentor-partner/partner.webp";
export default function MentorPartnerSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Become a Mentor Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 flex-1 flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-600 mb-2">Become a Mentor</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Enable young professionals to make their greatest career leap.
              </h3>
              <button className="inline-flex items-center text-purple-600 font-semibold group">
                Learn More
                <ArrowForward className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            {/* Image section - hidden on small screens, block on medium and up */}
            <div className="relative w-full h-64 md:w-[300px] md:h-auto hidden md:block flex-shrink-0">
              <img
                src={First}
                alt="Smiling man"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Become a Hiring Partner Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 flex-1 flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-600 mb-2">Become a Hiring Partner</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Hire highly skilled AEC professionals at zero cost.
              </h3>
              <button className="inline-flex items-center text-purple-600 font-semibold group">
                Learn More
                <ArrowForward className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            {/* Image section - hidden on small screens, block on medium and up */}
            <div className="relative w-full h-64 md:w-[300px] md:h-auto hidden md:block flex-shrink-0">
              <img
                src={Second}
                alt="People looking at a tablet"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
