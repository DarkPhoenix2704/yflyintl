/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="YFLY International | Study Abroad"
        description="Let's Elevate Your Higher Education Journey Together, Unlock New Heights with Our Expert Consultations!"
      />
      <div className="flex flex-col">
        <div className="flex flex-col-reverse md:flex-row mt-8 justify-center items-center">
          <div className="flex flex-col md:w-1/2 md:mx-16 mx-4 gap-2">
            <img
              src="/hero.png"
              alt="Hero Image"
              className="block text-center my-4 md:hidden"
            />
            <p className="text-lg text-[#8a8dad] mt-4">
              Making International Education Accessible to All
            </p>
            <h1 className="md:leading-[1.2] leading-[1.2] text-5xl md:text-6xl  font-bold text-[#040c61]">
              30+ Countries
              <br />
              3000+ Universities
              <br />
              1,00,000+ Courses
            </h1>

            <p className="text-lg text-[#8a8dad] mt-4">
              Let&apos;s Elevate Your Higher Education Journey Together, Unlock
              New Heights with Our Expert Consultations!
            </p>
            <button className="bg-[#0561b2] w-48 py-4 text-white font-bold text-lg rounded-xl px-6  mt-4">
              <Link
                scroll={false}
                href="https://registration.yflyinternational.com/"
              >
                Join Us
              </Link>
            </button>
          </div>
          <div className="md:flex flex-col hidden md:w-1/2">
            <img src="/hero.png" alt="Hero Image" className="w-3/4" />
          </div>
        </div>
        <div className="flex flex-col bg-gradient-radial items-center justify-center">
          <h1 className="font-bold text-3xl py-4 text-center">Our Services</h1>
          <div className="flex flex-row py-8 items-center justify-center gap-8 flex-wrap">
            <Link scroll={false} href="/services/#application-process">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-red-500">
                <img
                  src="/services/card/admission.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">
                    University Admissions
                  </h1>
                  <p className="text-md text-[#697479]">
                    Expert Guidance and Support for Your Academic Journey..
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#visa-guidance">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-[#71ce88]">
                <img
                  src="/services/card/visa-consultancy.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">
                    Seamless Visa Consultancy
                  </h1>
                  <p className="text-md text-[#697479]">
                    Simplifying the Visa Process for Your Study Abroad Journey.
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#student-accomodation">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-red-500">
                <img
                  src="/services/card/home.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">Finding Your Home</h1>
                  <p className="text-md text-[#697479]">
                    Hassle-free Accommodation Solutions
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#flight-booking">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-[#727cfe]">
                <img
                  src="/services/card/flight.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">Flight Booking</h1>
                  <p className="text-md text-[#697479]">
                    Get Great Deals for both International Flights
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#flight-booking">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-[#71ce88]">
                <img
                  src="/services/card/briefing.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">
                    Pre-Departure Briefing
                  </h1>
                  <p className="text-md text-[#697479]">
                    Equipping You for a Successful Study Abroad Journey.
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#lor-preparation">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-red-500">
                <img
                  src="/services/card/sop.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">
                    SOP / LOR Preparation
                  </h1>
                  <p className="text-md text-[#697479]">
                    Assistance for SOP/LOR Preparation
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#education-loan">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-[#71ce88]">
                <img
                  src="/services/card/loans.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">Edu Loans</h1>
                  <p className="text-md text-[#697479]">
                    Secure education loans at the best interest rates...
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#forex-transaction">
              <div className="flex border-2 p-2 rounded-lg max-w-[400px] mx-1 hover:border-[#727cfe]">
                <img
                  src="/services/card/forex.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">Forex Transactions</h1>
                  <p className="text-md text-[#697479]">
                    Obtain the best exchange rates...
                  </p>
                </div>
              </div>
            </Link>
            <Link scroll={false} href="/services/#internships">
              <div className="flex border-2 p-2 rounded-lg lg:w-[400px] max-w-[400px] mx-1 hover:border-[#71ce88]">
                <img
                  src="/services/card/internships.png"
                  alt="Service 1"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-2 gap-1 justify-center">
                  <h1 className="font-semibold text-xl">Internships</h1>
                  <p className="text-md text-[#697479]">
                    We connect you with internships in your...
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-4 mt-8 bg-[#f9fafc] justify-center py-8 font-semibold items-center">
          <h1 className="font-bold text-3xl py-4 text-center">Trainings</h1>
          <div className="flex flex-col md:justify-center md:flex-row flex-wrap px-2 py-6 gap-8">
            <Link scroll={false} href="/services/test-preparation#ielts">
              <img
                src="/tests/ielts.png"
                alt="IELTS"
                className="w-full md:w-auto md:h-24 hover:scale-105 transition-all"
              />
            </Link>
            <Link scroll={false} href="/services/test-preparation#german">
              <img
                src="/tests/german.png"
                alt="German"
                className="w-full md:w-auto md:h-24 hover:scale-105 transition-all"
              />
            </Link>
            <Link scroll={false} href="/services/test-preparation#gmat">
              <img
                src="/tests/gmat.png"
                alt="GMAT"
                className="w-full md:w-auto md:h-24 hover:scale-105 transition-all"
              />
            </Link>
            <Link scroll={false} href="/services/test-preparation#pte">
              <img
                src="/tests/pte.png"
                alt="PTE"
                className="w-full md:w-auto md:h-24 hover:scale-105 transition-all"
              />
            </Link>
            <Link scroll={false} href="/services/test-preparation#toefl">
              <img
                src="/tests/toefl.png"
                alt="TOEFL"
                className="w-full md:w-auto md:h-24 hover:scale-105 transition-all"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8 bg-[#f9fafc] justify-center py-16 font-semibold items-center">
          <h1 className="font-bold text-3xl py-4 text-center">
            FEATURED UNIVERSITIES
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap px-2 gap-8 justify-center">
            <img
              src="/princeton_logo.png"
              alt="Logo 1"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
            <img
              src="/yle_logo.png"
              alt="Logo 2"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
            <img
              src="/harvard_logo.png"
              alt="Logo 3"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
            <img
              src="/toronto_logo.png"
              alt="Logo 4"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 bg-[#f9fafc] justify-center py-8 font-semibold items-center">
          <h1 className="font-bold text-3xl py-4 text-center">TOP B Schools</h1>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center px-2 py-4 gap-8">
            <img
              src="/college-logo/stanford.jpg"
              alt="Logo 1"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
            <img
              src="/college-logo/harvard.jpg"
              alt="Logo 2"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
            <img
              src="/college-logo/mit.jpg"
              alt="Logo 3"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
            <img
              src="/college-logo/london.jpg"
              alt="Logo 4"
              className="w-full md:w-auto md:h-32 hover:scale-105 transition-all"
            />
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
            <Link
              scroll={false}
              href="https://registration.yflyinternational.com/"
            >
              Get Started
            </Link>
            <HiArrowRight className="text-2xl" />
          </button>
          <img
            src="/girl1.png"
            width="300px"
            alt="Plane"
            className="hidden md:block absolute top-[-57px] right-[50px]"
          />
        </div>
      </div>
    </>
  );
}
