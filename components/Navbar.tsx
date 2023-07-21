/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, Fragment } from "react";
import { HiBars3, HiChevronDown } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { services } from "@app/data/services";
import { destinations } from "@app/data/destinations";

export const Navbar = () => {
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
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md   text-lg font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span>Study Destinations</span>
                  <HiChevronDown
                    className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5  transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-gray-50 p-4">
                        {destinations.map((destination) => (
                          <Link
                            key={destination.slug}
                            href={destination.path}
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex gap-2 items-center">
                              <Image
                                src={destination.flag}
                                width={25}
                                height={25}
                                alt={destination.name}
                              />
                              <span className="text-sm font-medium text-gray-900">
                                {destination.name}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md   text-lg font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span>Services</span>
                  <HiChevronDown
                    className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5  transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-gray-50 p-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href="##"
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex gap-2 items-center">
                              <span className="text-sm font-medium text-gray-900">
                                {service.name}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Link href="#" className="text-lg font-medium">
            Contact
          </Link>
          <button className="bg-[#f4f0ff] text-[#5327b3] font-semibold rounded-xl hover:bg-[#f4e0ff] px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
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
        <div className="w-full h-[100vh] gap-16 flex flex-col  justify-center items-center sticky z-[3] bg-[#226cf5]">
          <Link href="/">
            <Image
              src="/logo_white.png"
              width={250}
              height={100}
              alt="YFly Logo"
            />
          </Link>
          <div className="flex flex-col text-white space-y-4 items-center ">
            <Link href="#" className="text-lg font-semibold">
              Home
            </Link>
            <Link href="#" className="text-lg font-semibold">
              About Us
            </Link>
            <Link href="#" className="text-lg font-semibold">
              Services
            </Link>
            <Link href="#" className="text-lg font-semibold">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-[#fdaf4d] to-[#ff6a56] text-white font-semibold rounded-md px-6 py-2">
              <Link href="https://registration.yflyinternational.com/">
                Enquire Now
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
