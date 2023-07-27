import Link from "next/link";
import { HiSupport } from "react-icons/hi";
import { HiHomeModern, HiOutlineAcademicCap } from "react-icons/hi2";
import { MdFlight } from "react-icons/md";

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#6c48f0] text-center py-16 flex flex-col w-full items-center text-lg gap-4">
        <div className="flex flex-row text-sm justify-center">
          <Link href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link href={`/services`}>
            <span className="font-semibold text-white">&nbsp;Services</span>
          </Link>
        </div>
        <h1 className="text-4xl font-semibold text-[#f4f0ff]">
          Study in the University of your choice
        </h1>
        <p className="text-white text-sm lg:w-5/12">
          We value your career aspirations and can connect you with top global
          universities. Thousands of our students are already pursuing their
          programs in eminent institutions, and we welcome you to do the same!
        </p>
        <button className="bg-[#f4f0ff] text-[#5327b3] font-semibold rounded-xl hover:bg-[#f4e0ff] px-6 py-2">
          <Link href="https://registration.yflyinternational.com/">
            Get Started
          </Link>
        </button>
      </div>
      <div className="py-8">
        <h1 className="text-4xl text-center font-semibold">
          Why YFly International?
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row items-center justify-center mt-8 gap-4">
          <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#727cfe] ">
            <div className="bg-[#727cfe] flex items-center justify-center rounded-full w-16 h-16">
              <HiOutlineAcademicCap className="text-white text-4xl" />
            </div>
            <p className="font-bold text-xl ">Pre-Departure Briefing</p>
            <p className="text-lg text-[#67747a]">
              Equipping You for a Successful Study Abroad Journey.
            </p>
          </div>
          <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#ff5959] ">
            <div className="bg-[#ff5959] flex items-center justify-center rounded-full w-16 h-16">
              <HiHomeModern className="text-white text-4xl" />
            </div>
            <p className="font-bold text-xl ">Pre-Departure Briefing</p>
            <p className="text-lg text-[#67747a]">
              Equipping You for a Successful Study Abroad Journey.
            </p>
          </div>
          <div className="flex flex-col p-4 w-[320px] gap-2 rounded-xl border-2 bg-white border-white transition-all ease-in hover:border-[#71ce88] ">
            <div className="bg-[#71ce88] flex items-center justify-center rounded-full w-16 h-16">
              <HiSupport className="text-white text-4xl" />
            </div>
            <p className="font-bold text-xl ">Pre-Departure Briefing</p>
            <p className="text-lg text-[#67747a]">
              Equipping You for a Successful Study Abroad Journey.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] w-11/12 flex flex-col items-center justify-center">
        <h1 className="text-4xl  py-4 font-semibold">Our Services</h1>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex flex-col  w-1/2">
            <h1 className="text-[#6c48f0] text-2xl font-semibold">
              Counselling
            </h1>
            <p className="text-lg">
              Our counselling sessions will immensely benefit you in making the
              best academic decision suiting your career choices.
            </p>
            <h2 className="text-xl mt-4 font-semibold text-[#6c48f0]">
              Our Offerings
            </h2>
            <ul className="list-disc list-inside">
              <li>Career Oriented Heighlights</li>
              <li>University Selection</li>
              <li>Application Submission</li>
              <li>Visa Counselling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
