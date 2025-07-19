import { Link } from "react-router";
import { TextField, Button } from "@mui/material";
import { NavLink } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import CtaFooter from "../ctaSection";
import FooterBottom from "./footerBottom";
import Footerlogo from "../../../assets/images/footer logo/footer-logo.webp";
function Footer() {
  return (
    <>
      <CtaFooter />
      <div className="container">
        <footer className="flex sm:flex-wrap flex-wrap text-black mx-auto md:w-screen sm:w-screen md:justify-center  border-gray-700 pb-3">
          <div className="step1 md:w-[50%] sm:h-68 pl-20 pt-0 text-black">
            <div className="resturant-title pr-12">
              {/* <h1 className="text-4xl md:text-2xl pb-3">Logo</h1> */}
              <div className="footer-logo relative bottom-7 mb-10">
                <img style={{ width: "400px" }} src={Footerlogo} alt="" />
              </div>
              <h1 className="text-5xl font-bold text-primary">
                Dare to Disrupt
              </h1>
                <div className="pt-10">
                          <NavLink className="-m-1.5 p-1.5">
                            <img
                              alt=""
                              src="/assets/images/logo/logo_new.svg"
                              className="h-8 w-auto"
                            />  
                          </NavLink>
                        </div>  
              <p className="text-1xl md:text-md">
                Join thousands of people who are taking AEC by storm with
                Novatr.{" "}
              </p>
            </div>
            <div className="social-icons md:w-72 md:flex flex space-x-10 md:space-x-5 pt-5 mb-10">
              <Link>
                <FaLinkedin className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <FaGithub className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <FaTwitter className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <MdMarkEmailUnread className="text-3xl md:text-2xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-around  ">
            <div className="newsletter p-6 mt-6 mb-12">
              <h1 className="text-3xl font-semibold text-primary mb-4">
                Join our newsletter
              </h1>
              <h6 className="text-lg text-gray-600 mb-6">
                We'll send you a nice letter once per month. No spam.
              </h6>

              <div className="subscribe flex flex-col sm:flex-row items-center gap-4">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-full sm:w-[300px]"
                />
                <Button
                  className="h-10 w-full sm:w-36 !bg-secondary"
                  variant="contained"
                >
                  <span className="text-sm font-semibold text-white">
                    Subscribe
                  </span>
                </Button>
              </div>
            </div>

<div className="flex">
   <div className="step3 menus md:w-[50%] sm:w-[40%] w-[80%] md:h-92 p-5 text-black">
              <h2 className="text-1xl text-gray-400">COMPANY</h2>
              <ul className="pt-5 text-1xl">
                <li className="pb-2 font-semibold duration-500">
                  <Link>About Us</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>BIM Professional Course for Architects V2.0</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Master Computational Design Course</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>BIM Professional Course For Civil Engineers</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Advanced Interior Design with AI</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>BIM Professional Course for MEP Engineers</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Become a Mentor</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Hiring Partners</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Careers at Novatr</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Media Room</Link>
                </li>
              </ul>
            </div>
            <div className="step4 menus md:w-[50%] sm:w-[40%] w-[80%] md:h-92 p-5 text-black">
              <h2 className="text-1xl text-gray-400">RESOURCES</h2>
              <ul className="pt-5 text-1xl">
                <li className="pb-2 font-semibold duration-500">
                  <Link>Blog</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Events & Webinars</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Our Impact</Link>
                </li>
                <li className="pb-2 hover:translate-x-4 duration-500">
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
</div>
           
          </div>

          {/* <div className="step2 menus md:w-[20%] sm:w-[40%] w-[80%] md:h-92 p-5 text-black">
            <h2 className="text-2xl">Support</h2>
            <ul className="pt-5 text-1xl">
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Address</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Email</Link>
              </li>
              <li className="pb-2 hover:translate-x-4 duration-500">
                <Link>Phone</Link>
              </li>
            </ul>
          </div> */}
        </footer>
        <FooterBottom />
      </div>
    </>
  );
}

export default Footer;
