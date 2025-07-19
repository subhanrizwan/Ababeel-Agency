import React from "react";
import { Button } from "@mui/material";

const CtaFooter = () => {
  return (
    <section className="cta-footer bg-ctabg p-7 ">
      {/* rounded shadow relative top-11 z-30 */}
      {/*  sm:w-2/5 sm:flex-col sm:items-center sm:mb-5*/}
      <div className="w-[100%] flex justify-between md:justify-center flex-wrap md:flex-nowrap bg-ctabg text-white">
        <div className="left-section w-full md:w-4/6 text-center md:text-left mb-5 md:pl-10 md:p-5">
          <h6 className="font-bold text-1xl text-gray-400 mb-5">Ready to skyrocket your career?</h6>
          <h1 className="text-4xl mb-5">Your next chapter in AEC begins with Novatr!</h1>
          <h6  className="font-bold text-1xl text-gray-400">As you would have gathered, we are here to help you take the industry by storm with advanced, tech-first skills.</h6>
        </div>
        <div className="right-section w-full md:w-1/3 flex justify-center items-center md:justify-center mb-5">
          <Button
            className="h-10 w-40 md:text-xs md:w-48 md:h-12 !bg-secondary"
            variant="contained"
          >
            <span className="text-xs lg:text-xs md:text-base">Explore Courses</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
