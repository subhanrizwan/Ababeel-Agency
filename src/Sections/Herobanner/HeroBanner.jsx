import { Button } from "@mui/material";
import BannerImg from "../../../assets/images/BannerImage/bannerimg.webp";
import Lefttop from "../../../assets/images/design/union5.svg";
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutwardIcon';
import AppleIcon from '@mui/icons-material/Apple';
// import LocalPhoneIcon from  
import Avatar from "@mui/material/Avatar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import avatarImg from "../../../assets/images/avatar.png"; // Use correct path

function HeroBanner() {
  return (
    <>
  <section className="hero-section bg-bannerbg rounded-xl">
  <div className="container mx-auto px-4">
    <div
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(66, 48, 125) 0%, rgb(105, 65, 198) 100%)",
        color: "#fff",
      }}
      className="rounded-xl flex flex-col lg:flex-row overflow-hidden"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col p-20 pl-10 pr-10 sm:p-10 md:p-16 lg:p-20 relative text-white w-full lg:w-1/2">
        {/* Background Image Top Left */}
        <img
          src={Lefttop}
          alt="Decoration"
          className="absolute -top-12 -left-12 w-24 h-24 md:w-32 md:h-32 z-0"
        />
{/* 
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 relative z-10">
          Empowering next-gen architects and engineers towards career success
        </div>

        <div className="text-base sm:text-lg mb-6 relative z-10">
          Online certification courses that set you up for success. Gain
          industry-relevant skills with cohort-based learning.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10">
          <Button className="w-full sm:w-40 h-12 !text-sm !bg-white !text-black font-semibold" variant="contained">
            Explore Courses
          </Button>
          <Button className="w-full sm:w-40 h-12 !text-sm !bg-[#9B7CFF] text-white font-semibold" variant="contained">
            Request a Call Back
          </Button>
        </div> */}
  {/* <div> */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Empowering next-gen architects and engineers for career success
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Join thousands of professionals who have transformed their careers with our industry-leading programs
              </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10">
          <Button className="w-full sm:w-40 h-12 !text-sm !bg-white !text-black font-semibold" variant="contained">
            Explore Courses
          </Button>
          <Button className="w-full sm:w-40 h-12 !text-sm !bg-[#9B7CFF] text-white font-semibold" variant="contained">
            Request a Call Back
          </Button>
        </div>
        <div className="text-xs text-gray-200 mb-4 relative z-10">
          <small>Learn from experts working at</small>
        </div>

        <div className="grid grid-cols-3 gap-4 relative z-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-white rounded" />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (HIDDEN ON SMALL SCREENS) */}
      <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative p-5">
        <div className="relative z-10">
          <img
            src={BannerImg}
            alt="Banner"
            className="w-full max-w-[700px] h-auto object-contain"
          />
        </div>

        <img
          src={Lefttop}
          alt="Decoration"
          className="absolute -bottom-64 -right-16 w-24 h-24 md:w-80 md:h-80 z-0"
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HeroBanner