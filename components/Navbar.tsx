/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>("destinations");
  const [show, setShow] = useState<boolean>(false);
  const handleWindowResize = useCallback(() => {
    if (window.innerWidth > 767) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
  return (
    <>
      <div className="flex bg-white px-8 py-4 text-[#040c61] flex-row items-center justify-between">
        <Link href="/">
          <img
            src="/logo_blue.png"
            className="cursor-pointer h-10 md:h-16"
            alt="YFly Logo"
          />
        </Link>
        <div className="md:flex flex-row space-x-6 items-center hidden">
          <a
            href="#"
            className="text-lg flex items-end font-semibold"
            onMouseEnter={() => {
              setHovered("destinations");
            }}
            onMouseLeave={() => {
              setHovered(null);
            }}
          >
            Study Destinations
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="#" className="text-lg font-semibold">
            Services
          </a>
          <a href="#" className="text-lg font-semibold">
            Contact Us
          </a>
          <button className="bg-gradient-to-r from-[#fdaf4d] to-[#ff6a56] text-white font-semibold rounded-md px-6 py-2">
            Enquire Now
          </button>
        </div>
        {show ? (
          <IoMdClose
            className="md:hidden text-3xl"
            onClick={() => setShow(!show)}
          />
        ) : (
          <HiBars3
            className="md:hidden text-3xl"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      {show && (
        <div className="w-full h-[100vh] gap-16 flex flex-col  justify-center items-center absolute z-[3] bg-[#226cf5]">
          <Link href="/">
            <Image
              src="/logo_white.png"
              width={250}
              height={100}
              alt="YFly Logo"
            />
          </Link>
          <div className="flex flex-col text-white space-y-4 items-center ">
            <a
              href="#"
              className="text-lg flex items-end font-semibold"
              onMouseEnter={() => {
                setHovered("destinations");
              }}
              onMouseLeave={() => {
                setHovered(null);
              }}
            >
              Study Destinations
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-lg font-semibold">
              Services
            </a>
            <a href="#" className="text-lg font-semibold">
              Contact Us
            </a>
            <button className="bg-gradient-to-r from-[#fdaf4d] to-[#ff6a56] text-white font-semibold rounded-md px-6 py-2">
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
