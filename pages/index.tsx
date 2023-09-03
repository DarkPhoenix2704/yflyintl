/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@app/components/Navbar";
import { Inter } from "next/font/google";
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import { GrVisa } from "react-icons/gr";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col-reverse md:flex-row mt-8 justify-center items-center">
          <div className="flex flex-col md:w-1/2 md:mx-16 mx-4 gap-2">
            <img
              src="/hero.png"
              alt="Hero Image"
              className="block text-center my-4 md:hidden"
            />
            <h1 className="text-5xl md:text-6xl leading-light font-bold text-[#040c61]">
              Give Wings to your Study Abroad Dreams
            </h1>

            <p className="text-lg text-[#8a8dad] mt-4">
              We are always availed to consult on taking your higher education
              to the next level.
            </p>
            <button className="bg-[#5c0dff] w-48 py-4 text-white font-bold text-lg rounded-xl px-6  mt-4">
              <Link href="https://registration.yflyinternational.com/">
                Join Us
              </Link>
            </button>
          </div>
          <div className="md:flex flex-col hidden md:w-1/2">
            <img src="/hero.png" alt="Hero Image" className="w-3/4" />
          </div>
        </div>
        <div className="flex flex-col mt-8 bg-[#f9fafc] justify-center py-16 font-semibold items-center">
          <h1 className="text-xl font-semibold">FEATURED UNIVERSITIES</h1>
          <div className="flex flex-col md:flex-row px-2 md:space-x-8">
            <img
              src="/princeton_logo.png"
              alt="Logo 1"
              className="w-full md:w-auto md:h-32"
            />
            <img
              src="/yle_logo.png"
              alt="Logo 2"
              className="w-full md:w-auto md:h-32"
            />
            <img
              src="/harvard_logo.png"
              alt="Logo 3"
              className="w-full md:w-auto md:h-32"
            />
            <img
              src="/toronto_logo.png"
              alt="Logo 4"
              className="w-full md:w-auto md:h-32"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 bg-[#f9fafc] justify-center py-8 font-semibold items-center">
          <h1 className="text-xl font-semibold">TOP B SCHOOLS</h1>
          <div className="flex flex-col md:flex-row px-2 py-4 md:space-x-8">
            <img
              src="/college-logo/stanford.jpg"
              alt="Logo 1"
              className="w-full md:w-auto md:h-32"
            />
            <img
              src="/college-logo/harvard.jpg"
              alt="Logo 2"
              className="w-full md:w-auto md:h-32"
            />
            <img
              src="/college-logo/mit.jpg"
              alt="Logo 3"
              className="w-full md:w-auto md:h-32"
            />
            <img
              src="/college-logo/london.jpg"
              alt="Logo 4"
              className="w-full md:w-auto md:h-32"
            />
          </div>
        </div>
        <div className="flex flex-col bg-gradient-radial items-center justify-center">
          <h1 className="font-bold text-3xl py-4 text-center">Our Services</h1>
          <div className="flex flex-row py-8 items-center justify-center gap-8 flex-wrap">
            <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#727cfe] ">
              <div className="bg-[#727cfe] flex items-center justify-center rounded-full w-16 h-16">
                <IoBookOutline className="text-white text-4xl" />
              </div>
              <p className="font-bold text-xl ">Training</p>
              <p className="text-lg text-[#67747a]">
                Comprehensive Training in IELTS, Spoken English, and German (A1,
                A2, B1, B2).
              </p>
            </div>
            <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#ff5959] ">
              <div className="bg-[#ff5959] flex items-center justify-center rounded-full w-16 h-16">
                <HiOutlineAcademicCap className="text-white text-4xl" />
              </div>
              <p className="font-bold text-xl ">University Admissions</p>
              <p className="text-lg text-[#67747a]">
                Expert Guidance and Support for Your Academic Journey..
              </p>
            </div>
            <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#71ce88] ">
              <div className="bg-[#71ce88] flex items-center justify-center rounded-full w-16 h-16">
                <GrVisa className="text-white text-4xl" />
              </div>
              <p className="font-bold text-xl ">Seamless Visa Consultancy</p>
              <p className="text-lg text-[#67747a]">
                Simplifying the Visa Process for Your Study Abroad Journey.
              </p>
            </div>
            <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#ff5959] ">
              <div className="bg-[#ff5959] flex items-center justify-center rounded-full w-16 h-16">
                <IoHomeOutline className="text-white text-4xl" />
              </div>
              <p className="font-bold text-xl ">Finding Your Home</p>
              <p className="text-lg text-[#67747a]">
                Hassle-free Accommodation Solutions
              </p>
            </div>
            <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#71ce88] ">
              <div className="bg-[#71ce88] flex items-center justify-center rounded-full w-16 h-16">
                <MdFlight className="text-white text-4xl" />
              </div>
              <p className="font-bold text-xl ">Pre-Departure Briefing</p>
              <p className="text-lg text-[#67747a]">
                Equipping You for a Successful Study Abroad Journey.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col relative bg-gradient-to-r from-[#e6e5e1] to-[#eeeeec] justify-center py-16 lg:mx-32 rounded-lg px-8 font-semibold ">
          <h1 className=" text-3xl md:text-6xl text-[#040c61] font-semibold">
            Are you ready to fly
          </h1>
          <p className=" text-[#040c61] text-xl md:text-2xl font-semibold">
            and pursue your dreams?
          </p>
          <button className="bg-white gap-2 items-center justify-center flex flex-row rounded-md w-48 px-4 py-3">
            <Link href="https://registration.yflyinternational.com/">
              Get Started
            </Link>
            <HiArrowRight className="text-2xl" />
          </button>
          <img
            src="/girl.png"
            width="300px"
            alt="Plane"
            className="hidden md:block absolute top-[-50px] right-[50px]"
          />
        </div>
      </div>
    </>
  );
}
