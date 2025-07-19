'use client'
import { NavLink , Link } from 'react-router';
import { useState } from 'react'
import { Dialog, DialogContent } from "@mui/material";
import { HiBars3, HiXMark } from "react-icons/hi2";
import PersonIcon from '@mui/icons-material/Person';
const navigation = [
  { name: 'Hire From Us', path: '/' },
  { name: 'Events', path: '/' },
  { name: 'Our Impact', path: '/' },
  { name: 'Career Counselling', path: '/' },
  // { name: 'Blog', path: '/blog' },
  // { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="border-b">
      <header className="inset-x-0 top-0 z-50 ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <NavLink className="-m-1.5 p-1.5">
              <img
                alt=""
                src="/assets/images/logo/logo_new.svg"
                className="h-8 w-auto"
              />  
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
               key={item.name}
               to ={item.path} 
               className={(
                `hover:text-primary text-semibold`
               )}
              //  className={({ isActive }) =>
              //   `menu relative hover:text-primary font-semibold ${
              //     isActive ? "text-primary font-medium" : "text-black"
              //   } duration-250 md:py-2 cursor-pointer `
              // }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <NavLink href="#" className="text-sm/6 font-semibold text-primary">
            <PersonIcon fontSize='medium'/> {" "}
              Log in 
              {/* <span aria-hidden="true">&rarr;</span> */}
            </NavLink>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                src="/assets/Chigai_kuginuki.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <HiXMark aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({isActive})=> 
                          `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibol text-primary 
                        ${isActive ? "text-primary font-medium" : "text-primary"}`
                        }>
                        {item.name}
                      </NavLink>
                    ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </header>
    </div>
  )
}

