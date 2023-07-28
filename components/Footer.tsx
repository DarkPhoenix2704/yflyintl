/* eslint-disable @next/next/no-img-element */
import { destinations } from "@app/data/destinations";
import { services } from "@app/data/services";
import Link from "next/link";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-[#0e1b2c] mt-4 flex items-center flex-col">
      <div className="px-4 lg:px-16 flex gap-4 lg:gap-16 flex-col lg:flex-row justify-center w-full py-16 text-white">
        <div className="flex flex-col gap-4">
          <img
            src="/logo_white.png"
            className="h-24 lg:h-16 mb-8 lg:mb-4"
            alt="Logo White"
          />
          <Link
            href="mailto:info@yflyinternational.com"
            className="flex flex-row text-[#7f7f8f] hover:text-white items-center gap-2"
          >
            <HiOutlineMail className="text-2xl" />
            info@yflyinternational.com{" "}
          </Link>
          <Link
            href="mailto:info@yflyinternational.com"
            className="flex flex-row text-[#7f7f8f] hover:text-white items-center gap-2"
          >
            <HiPhone className="text-2xl" />
            +91 9645 90 3691
          </Link>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Student Services</h1>
          <div className="flex flex-col gap-2 mt-2 text-[#7f7f8f]">
            {services.map((service) => (
              <Link key={service.name} href={service.path}>
                <p className="hover:text-white cursor-pointer">
                  {service.name}
                </p>
              </Link>
            ))}

            <Link
              href="/university"
              className="hover:text-white cursor-pointer"
            >
              University
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Study Destinations</h1>
          <div className="flex flex-col gap-2 mt-2 text-[#7f7f8f]">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/country/${destination.slug}`}
              >
                <p className="hover:text-white">{destination.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Company</h1>
          <div className="flex flex-col gap-2 mt-2 text-[#7f7f8f]">
            <Link href="/about">
              <p className="hover:text-white">About Us</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-white">Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Our Address</h1>
          <div className="flex flex-col gap-2 mt-2 text-[#7f7f8f]">
            PVM Heights, <br />
            One Way Junction,
            <br />
            Muvattupuzha
            <br />
            Kerala
          </div>
        </div>
      </div>
      <hr className="w-11/12 py-2" />
      <div className="flex py-4 gap-2 flex-col items-center md:flex-row">
        <div className="flex flex-row gap-4">
          <Link href="https://www.facebook.com/yfly.international">
            <MdFacebook className="text-2xl text-white" />
          </Link>
          <Link href="https://www.instagram.com/yfly_international/">
            <IoLogoInstagram className="text-2xl text-white" />
          </Link>
          <Link href="/">
            <IoLogoTwitter className="text-2xl text-white" />
          </Link>
          <Link href="https://www.linkedin.com/company/yfly-international">
            <IoLogoLinkedin className="text-2xl text-white" />
          </Link>
          <Link href="https://web.whatsapp.com/send/?phone=919947788222&text=Hello%2C+YFLY+&type=phone_number&app_absent=0">
            <IoLogoWhatsapp className="text-2xl text-white" />
          </Link>
        </div>
        <p className="text-white">
          © 2023 YFly International. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
