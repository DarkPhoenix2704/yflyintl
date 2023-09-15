/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HiArrowRight, HiSupport } from "react-icons/hi";
import { HiHomeModern, HiOutlineAcademicCap } from "react-icons/hi2";
import { MdFlight } from "react-icons/md";

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#2860ad] text-center py-16 flex flex-col w-full items-center text-lg gap-4">
        <div className="flex flex-row text-sm justify-center">
          <Link href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link href={`/services`}>
            <span className="font-semibold text-white">&nbsp;Services</span>
          </Link>
        </div>
        <h1 className="text-4xl font-semibold text-[#d5deeb]">
          Study in the University of your choice
        </h1>
        <p className="text-white text-sm lg:w-5/12">
          We value your career aspirations and can connect you with top global
          universities. Thousands of our students are already pursuing their
          programs in eminent institutions, and we welcome you to do the same!
        </p>
        <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] px-6 py-2">
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
            <p className="font-bold text-xl ">Supporting you all the way</p>
            <p className="text-lg text-[#67747a]">
              From the day you consult us till the day you land{" "}
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
          <div
            id="counselling"
            className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2"
          >
            <h1 className="text-[#2860ad] text-2xl font-semibold">
              Counselling
            </h1>
            <p className="text-lg">
              Our expert counselors provide personalized guidance to help you
              make informed decisions about your study abroad journey. From
              career aspiraKons to academic interests, we&apos;re here to
              support your dreams and aspiraKons
            </p>

            <h2 className="text-xl py-2 font-semibold text-[#2860ad]">
              Our Offerings
            </h2>
            <ul className="list-disc list-inside">
              <li>Career Oriented Heighlights</li>
              <li>University Selection</li>
              <li>Application Submission</li>
              <li>Visa Counselling</li>
            </ul>
            <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
              <Link href="https://registration.yflyinternational.com/">
                Enquire Now
              </Link>
            </button>
          </div>
          <div className="hidden lg:flex flex-col w-full justify-center items-center lg:w-1/2">
            <img
              src="/services/counselling.png"
              alt="counselling"
              className="w-[400px]"
            />
          </div>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div
        id="test-preparation"
        className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16"
      >
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/test-preparation.png"
            alt="test-preparation"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            Test Preparation
          </h1>
          <p className="text-lg">
            Effortlessly reach your highest potential test score with our
            certified, adept and dedicated tutors who will efficiently prepare
            you for your desired tests.
          </p>
          <h2 className="text-xl mt-4 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Interactive Classroom and free Demo Session</li>
            <li>Study material that’s simple yet highly effective</li>
            <li>Score oriented tutorials & mock tests</li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="/services/test-preparation">Enquire Now</Link>
          </button>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div
          id="course-selection"
          className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2"
        >
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            Course, Country & University selection
          </h1>
          <p className="text-lg">
            We help you choose the ideal course, university & country that
            perfectly match your career, academic and budget preferences.
          </p>

          <h2 className="text-xl py-2 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Make precise academic and career decisions</li>
            <li>Make precise academic and career decisions</li>
            <li>Course options across 700+ universities in 31 countries</li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
          </button>
        </div>
        <div className="hidden lg:flex flex-col w-full justify-center items-center lg:w-1/2">
          <img
            src="/services/course-selection.png"
            alt="course-selection"
            className="w-[400px]"
          />
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div
        id="application-process"
        className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16"
      >
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/application-process.png"
            alt="application-process"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            Application & Admission
          </h1>
          <p className="text-lg">
            Choose the right intake, apply timely and smartly in courses and
            universities that are your right fit and receive admits/offers in no
            time.
          </p>
          <h2 className="text-xl mt-4 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Flawless applications - assured admits</li>
            <li>High quality SOPs, LORs and Resumes</li>
            <li>
              Real time application tracking & follow through with universities
            </li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
          </button>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div
          id="course-selection"
          className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2"
        >
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            Scholarships
          </h1>
          <p className="text-lg">
            Our global universities have plenty of scholarships on offer and we
            will help you identify and apply for the ones you deserve the most.
          </p>

          <h2 className="text-xl py-2 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Alerts on latest and high value scholarships</li>
            <li>Guidance on ‘how’ to apply for scholarships</li>
            <li>Assistance for scholarship essays</li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
          </button>
        </div>
        <div className="hidden lg:flex flex-col w-full justify-center items-center lg:w-1/2">
          <img
            src="/services/scholarships.png"
            alt="scholarships"
            className="w-[400px]"
          />
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div
        id="internships"
        className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16"
      >
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/internships.png"
            alt="internships"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">Internships</h1>
          <p className="text-lg">
            We know how important internships are to your profile and thus our
            course recommendations are full of options with inbuilt internships.
          </p>
          <h2 className="text-xl mt-4 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Apply for programs offering guaranteed internships</li>
            <li>Guidance on paid/unpaid internships</li>
            <li>Know your placement periods and stipends</li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
          </button>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div
          id="education-loan"
          className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2"
        >
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            Education Loan
          </h1>
          <p className="text-lg">
            Availing an education loan to study in your dream university has
            never been easier!
          </p>

          <h2 className="text-xl py-2 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Study Loans through 17+ leading Banks & NBFCs</li>
            <li>Financial structuring to suit your university</li>
            <li>Hassle free documentation</li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
          </button>
        </div>
        <div className="hidden lg:flex flex-col w-full justify-center items-center lg:w-1/2">
          <img
            src="/services/education-loan.png"
            alt="education-loan"
            className="w-[400px]"
          />
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div
        id="visa-guidance"
        className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16"
      >
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/visa-guidance.png"
            alt="visa-guidance"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            Visa Processing
          </h1>
          <p className="text-lg">
            Our skilled visa experts will help you prepare and present your visa
            documents to Embassies and High Commissions to ensure a successful
            visa outcomes in minimal time.
          </p>
          <h2 className="text-xl mt-4 font-semibold text-[#2860ad]">
            Our Offerings
          </h2>
          <ul className="list-disc list-inside">
            <li>Impeccable guidance on visa documentation</li>
            <li>Excellent visa success ratio across all countries</li>
            <li>Mock visa interviews</li>
          </ul>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link href="https://registration.yflyinternational.com/">
              Enquire Now
            </Link>
          </button>
        </div>
      </div>
      <div className="flex gap-3 flex-col w-10/12 relative bg-gradient-to-r from-[#e6e5e1] to-[#eeeeec] justify-center py-16 lg:mx-32 rounded-lg px-8 font-semibold ">
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
          src="/girl1.png"
          width="300px"
          alt="Plane"
          className="hidden md:block absolute top-[-57px] right-[50px]"
        />
      </div>
    </div>
  );
};
export default Services;
