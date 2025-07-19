import { ArrowForward } from "@mui/icons-material"
import { Public, SportsEsports, Work, Lightbulb } from "@mui/icons-material" // MUI Icons
import First from "../../../assets/images/Mentor-partner/project.webp";
import Profile1 from "../../../assets/images/Mentor-partner/profile1.webp";
import Profile2 from "../../../assets/images/Mentor-partner/profile2.webp";
import Logo1 from  '../../../assets/images/bannerlogo/aecom_hero.svg'
// import Logo2 from  '../../../assets/images/bannerlogo/aecom_hero.svg'
const heroLogos = [
  { src: "/assets/images/bannerlogo/aecom_hero.svg" },
  {  src: "/assets/images/bannerlogo/benoy_hero.svg" },
  { src: "/assets/images/bannerlogo/external.svg" },
  { src: "/assets/images/bannerlogo/heather.svg" },
  {  src: "/assets/images/bannerlogo/populous_hero.svg" },
  {src: "/assets/images/bannerlogo/rsp.svg" },
];

export default function TrainingPlacementSection() {
  const companyLogos = [
    "/assets/images/bannerlogo/aecom_hero.svg",
  "/assets/images/bannerlogo/benoy_hero.svg",
  "/assets/images/bannerlogo/external.svg",
  "/assets/images/bannerlogo/heather.svg",
  "/assets/images/bannerlogo/populous_hero.svg",
  "/assets/images/bannerlogo/rsp.svg"
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Practical Training Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-sm font-medium text-gray-600 mb-2">Practical Training________</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Get Ahead with <span className="text-purple-600">Real-World Projects</span>
              </h2>
              <p className="text-gray-600">
                How do you learn to build a building? By building a building! Our courses include live projects that
                significantly enhance your portfolio.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={First}
                alt="Isometric 3D buildings illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* International Exposure */}
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4 flex-shrink-0">
                <Public className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">International Exposure</h3>
                <p className="text-gray-600 text-sm">
                  Our live projects are curated in partnership with leading AEC firms based in the US, Hong Kong and
                  Portugal.
                </p>
              </div>
            </div>
            {/* Gamified Experience */}
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4 flex-shrink-0">
                <SportsEsports className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Gamified Experience</h3>
                <p className="text-gray-600 text-sm">
                  Take instructions from a client, pitch innovative solutions, and see your project unfold - all in a
                  virtual simulation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-700 text-white p-4 rounded-lg text-center">
            <button className="inline-flex items-center justify-center font-semibold">
              Learn more about the gamified experience in Novatr's live projects. Click to learn more
              <ArrowForward className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Placement Assistance Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4 flex-shrink-0">
              <Work className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Placement Assistance_________</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">Land the Job You Dreamed Of</h2>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            Scouting relevant opportunities, networking with companies, and landing interviews - you'll ace it all with
            our personalized career guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-6 text-white relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-white/20 text-xs font-bold px-3 py-1 rounded-bl-lg">
                +100% Salary Hike
              </span>
              <div className="flex items-center mb-4">
                <img
                  src={Profile1}
                  alt="Maannav Jaisingh"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Maannav Jaisingh</h4>
                  <p className="text-sm text-gray-100">Former Student, Novatr</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                {
                  "The course was an excellent blend of theoretical concepts and practical application. I'm extremely grateful for them leading to enhance their career prospects and stay at the forefront of the rapidly evolving AEC industry."
                }
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-6 text-white relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-white/20 text-xs font-bold px-3 py-1 rounded-bl-lg">
                +100% Salary Hike
              </span>
              <div className="flex items-center mb-4">
                <img
                  src={Profile2}
                  alt="Ravi Kumar"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Ravi Kumar</h4>
                  <p className="text-sm text-gray-100">Former Student, Novatr</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                {
                  "After completing the BIM course, I was very grateful for the Novatr team's guidance, interview training, and assistance in finding the right employment opportunities. They were extremely supportive throughout the process."
                }
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-8">
            Our BIM graduates landed placements at top MNCs with an average pay hike of 80%!{" "}
            <button className="inline-flex items-center text-purple-600 font-semibold">
              Click to learn more
              <ArrowForward className="ml-1 w-4 h-4" />
            </button>
          </p>

          <div className="mb-8">
            <p className="text-sm font-medium text-gray-600 mb-4">Our Learners are placed at</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo || "/placeholder.svg"}
                  alt={`Company Logo ${index + 1}`}
                  className="max-w-[100px] h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Innovative Learning Section (Partial) */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4 flex-shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Innovative Learning</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">An Unforgettable Experience</h2>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            Traditional teaching methods have no place in the modern world. That's why we infuse digital tools with
            new-age pedagogies to enhance your learning.
          </p>
          {/* Placeholder for images, as they are partially visible in the screenshot */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-primary p-5 rounded">
           {heroLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-2  backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <img
                src={logo.src}
                width={80}
                height={40}
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
              />
            </div>
          ))}
          </div>
           {/* <div className="grid bg-primary rounded grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-items-start">
          {heroLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-2  backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <img
                src={logo.src}
                width={80}
                height={40}
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </section>
  )
}
