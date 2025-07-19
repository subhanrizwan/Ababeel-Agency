import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
// import LaunchIcon
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

import Etechreview from '../../../../assets/images/testimonial/edtechreview.webp';
import CallMadeIcon from '@mui/icons-material/CallMade';

// Styled Components
const StyledSwiper = styled(Swiper)`

  width: 100%;
  height: 100%;
  padding-bottom:5rem;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
`;
const StyledSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  color: #000;
  border: 1px solid lightgray;
  border-radius: 2%;
  background: transparent;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  padding:3rem;
  &:hover {
    background-color: #db4444;
    color: white;
  }
    
`;

export default function Slder2() {
  return (
    <StyledSwiper
      slidesPerView={3}
      grid={{
        rows: 1,
      }}
      spaceBetween={40}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
            pagination={{
        clickable: true,
      
      }}
       breakpoints={{
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween:20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }}
      modules={[Grid, Pagination]}
    >
      {/* {[...Array(9)].map((_, idx) => (
        <StyledSlide key={idx}>Slide {idx + 1}</StyledSlide>
      ))} */}
       <StyledSlide>
      <div className="flex flex-col items-center gap-y-40">
        {/* <HeadphonesOutlinedIcon fontSize="large" /> */}
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            “Upskilling Startup Oneistox Raises $1.2M in Seed Round Led by Y Combinator
          </p>
         
        </div>

        {/* New Footer Row Below Quote */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Left - Image */}
          {/* <Avatar
            alt="Logo"
            src={Etechreview} // Example image
            sx={{ width: 40, height: 40 }}
          /> */}
          <img  alt="Logo"
            src={Etechreview}
            style={{width:'100px'}}
             />

          {/* Right - Icon */}
          <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
            <CallMadeIcon sx={{ color: '#9ca3af' }} />
          </div>
          {/* <LaunchIcson style={{ color: "#aaa", cursor: "pointer" }} /> */}
        </div>
      </div>
    </StyledSlide>
       <StyledSlide>
      <div className="flex flex-col items-center gap-y-40">
        {/* <HeadphonesOutlinedIcon fontSize="large" /> */}
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            “Upskilling Startup Oneistox Raises $1.2M in Seed Round Led by Y Combinator
          </p>
         
        </div>

        {/* New Footer Row Below Quote */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Left - Image */}
          {/* <Avatar
            alt="Logo"
            src={Etechreview} // Example image
            sx={{ width: 40, height: 40 }}
          /> */}
          <img  alt="Logo"
            src={Etechreview}
            style={{width:'100px'}}
             />

          {/* Right - Icon */}
          <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
            <CallMadeIcon sx={{ color: '#9ca3af' }} />
          </div>
        </div>
      </div>
    </StyledSlide>
       <StyledSlide>
      <div className="flex flex-col items-center gap-y-40">
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            “Upskilling Startup Oneistox Raises $1.2M in Seed Round Led by Y Combinator
          </p>
         
        </div>

        {/* New Footer Row Below Quote */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Left - Image */}
          {/* <Avatar
            alt="Logo"
            src={Etechreview} // Example image
            sx={{ width: 40, height: 40 }}
          /> */}
          <img  alt="Logo"
            src={Etechreview}
            style={{width:'100px'}}
             />

          {/* Right - Icon */}
          <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
            <CallMadeIcon sx={{ color: '#9ca3af' }} />
          </div>
        </div>
      </div>
    </StyledSlide>
       <StyledSlide>
      <div className="flex flex-col items-center gap-y-40">
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            “Upskilling Startup Oneistox Raises $1.2M in Seed Round Led by Y Combinator
          </p>
         
        </div>

        {/* New Footer Row Below Quote */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Left - Image */}
          <img  alt="Logo"
            src={Etechreview}
            style={{width:'100px'}}
             />

          {/* Right - Icon */}
          <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
            <CallMadeIcon sx={{ color: '#9ca3af' }} />
          </div>
        </div>
      </div>
    </StyledSlide>
       <StyledSlide>
      <div className="flex flex-col items-center gap-y-40">
        {/* <HeadphonesOutlinedIcon fontSize="large" /> */}
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            “Upskilling Startup Oneistox Raises $1.2M in Seed Round Led by Y Combinator
          </p>
         
        </div>

        {/* New Footer Row Below Quote */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
         
          <img  alt="Logo"
            src={Etechreview}
            style={{width:'100px'}}
             />

          {/* Right - Icon */}
          <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
            <CallMadeIcon sx={{ color: '#9ca3af' }} />
          </div>
        </div>
      </div>
    </StyledSlide>
       <StyledSlide>
      <div className="flex flex-col items-center gap-y-40">
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            “Upskilling Startup Oneistox Raises $1.2M in Seed Round Led by Y Combinator
          </p>
         
        </div>

        {/* New Footer Row Below Quote */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
          {/* Left - Image */}
          <img  alt="Logo"
            src={Etechreview}
            style={{width:'100px'}}
             />

          {/* Right - Icon */}
          <div className="circle w-12 h-12 flex justify-center items-center rounded-full bg-gray-200">
            <CallMadeIcon sx={{ color: '#9ca3af' }} />
          </div>
        </div>
      </div>
    </StyledSlide>
      {/* <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <PhoneAndroidOutlinedIcon fontSize="large" /> Phone
        </div>
      </StyledSlide>
      <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <DesktopMacOutlinedIcon fontSize="large" /> Phone
        </div>
      </StyledSlide>
      <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <SportsEsportsOutlinedIcon fontSize="large" /> Gaming
        </div>
      </StyledSlide>
      <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <WatchOutlinedIcon fontSize="large" /> Watch
        </div>
      </StyledSlide>
      <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <CameraAltOutlinedIcon fontSize="large" /> Camera
        </div>
      </StyledSlide>
      <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <CameraAltOutlinedIcon fontSize="large" /> Camera
        </div>
      </StyledSlide>
      <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
          <CameraAltOutlinedIcon fontSize="large" /> Camera
        </div>
      </StyledSlide> */}
    </StyledSwiper>
  );
}
