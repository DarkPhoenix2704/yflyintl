/* eslint-disable @next/next/no-img-element */
import { destinations } from "@app/data/destinations";
import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { MdFacebook } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-[#0e1b2c]  flex items-center flex-col">
      <div className="px-4 lg:px-16 flex gap-4 lg:gap-16 flex-col lg:flex-row justify-center w-full py-16 text-white">
        <img
          src="/logo_white.png"
          className="h-24 lg:h-16 mb-8"
          alt="Logo White"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Student Services</h1>
          <div className="flex flex-col gap-2 text-[#7f7f8f]">
            <p>Counselling</p>
            <p>Test Preparation</p>
            <p>University Delection</p>
            <p>Admission Process</p>
            <p>Scholarships</p>
            <p>Internships</p>
            <p>Education Load</p>
            <p>Visa Guidance</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Study Destinations</h1>
          <div className="flex flex-col gap-2 text-[#7f7f8f]">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/country/${destination.slug}`}
              >
                <p>{destination.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Company</h1>
          <div className="flex flex-col gap-2 text-[#7f7f8f]">
            <Link href="/about">
              <p>About Us</p>
            </Link>
            <Link href="/contact">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-11/12 py-2" />
      <div className="flex py-4 gap-2 flex-col items-center md:flex-row">
        <div className="flex flex-row gap-4">
          <MdFacebook className="text-3xl text-white" />
          <IoLogoInstagram className="text-3xl text-white" />
          <IoLogoTwitter className="text-3xl text-white" />
        </div>
        <p className="text-white">
          © 2023 YFly International. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
