/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#2860ad] text-center py-16 flex flex-col w-full items-center text-lg gap-4">
        <div className="flex flex-row text-sm justify-center">
          <Link scroll={false} href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link scroll={false} href={`/services`}>
            <span className="font-semibold text-white">&nbsp;Services •</span>
          </Link>
          <Link scroll={false} href={`/services/test-preparation`}>
            <span className="font-semibold text-white">
              &nbsp;Test Preparation
            </span>
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
          <Link
            scroll={false}
            href="https://registration.yflyinternational.com/"
          >
            Get Started
          </Link>
        </button>
      </div>

      <div className="bg-[#f8fafc] w-11/12 flex flex-col items-center justify-center">
        <h1 className="text-4xl  py-4 font-semibold">Test Preparation</h1>
        <div className="w-full flex flex-col lg:flex-row">
          <div
            id="ielts"
            className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2"
          >
            <h1 className="text-[#2860ad] text-2xl font-semibold">IELTS</h1>
            <p className="text-lg">
              Our IELTS preparation course is designed to help you excel in the
              IELTS exam, a globally recognized assessment of English
              proficiency. Whether you&apos;re aiming for academic or
              professional goals, our experienced instructors will provide
              comprehensive training, mock tests, and personalized feedback to
              ensure you reach your desired band score
            </p>

            <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
              <Link
                scroll={false}
                href="https://registration.yflyinternational.com/"
              >
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
        id="german"
        className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16"
      >
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/test-preparation.png"
            alt="german"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">German</h1>
          <p className="text-lg">
            Learn the German language with us! Our courses cater to all levels,
            from beginners to advanced learners. Our certified instructors offer
            a dynamic and engaging learning experience, covering vocabulary,
            grammar, and conversation skills. Gain fluency in one of the most
            widely spoken languages in Europe and open up a world of study and
            career possibiliKes.
          </p>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link
              scroll={false}
              href="https://registration.yflyinternational.com/"
            >
              Enquire Now
            </Link>
          </button>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div
          id="toefl"
          className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2"
        >
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            TOEFL (Test of English as a Foreign Language){" "}
          </h1>
          <p className="text-lg">
            Our expert instructors will guide you through intensive training,
            practice exams, and test-taking strategies, ensuring you&apos;re
            well-prepared to excel in the TOEFL exam. Take the first step toward
            achieving your international dreams with our TOEFL course.
          </p>

          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link
              scroll={false}
              href="https://registration.yflyinternational.com/"
            >
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
      <div id="gre" className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16">
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/application-process.png"
            alt="application-process"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">
            GRE (Graduate Record Examination)
          </h1>
          <p className="text-lg">
            Dreaming of pursuing a graduate degree in the United States? Let our
            GRE preparation course be your stepping stone to success. Our
            experienced tutors will help you master the GRE&apos;s verbal and
            quantitative sections, providing comprehensive study materials and
            realistic practice tests. Whether your goal is a master&apos;s or a
            Ph.D., our GRE course will empower you to achieve your academic
            aspirations in the United States.
          </p>

          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link
              scroll={false}
              href="https://registration.yflyinternational.com/"
            >
              Enquire Now
            </Link>
          </button>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div id="gmat" className="flex flex-col w-full gap-4 lg:py-16 lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">GMAT</h1>
          <p className="text-lg">
            Ready to join the ranks of business leaders worldwide? Our GMAT
            preparation course is your key to unlocking the doors to prestigious
            MBA programs. Our seasoned instructors will guide you through the
            GMAT&apos;s quantitative, verbal, and analytical writing sections.
            With our personalized approach and rigorous practice tests,
            you&apos;ll build the skills and confidence needed to excel in the
            GMAT exam and secure your place in a top business school.
          </p>

          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link
              scroll={false}
              href="https://registration.yflyinternational.com/"
            >
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
      <div id="pte" className="flex flex-col lg:flex-row py-6 w-11/12 lg:py-16">
        <div className="hidden lg:flex flex-col w-full justify-center items-left lg:w-1/2">
          <img
            src="/services/internships.png"
            alt="internships"
            className="w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="text-[#2860ad] text-2xl font-semibold">PTE</h1>
          <p className="text-lg">
            The Pearson Test of English is trusted by universities, colleges,
            and employers worldwide to assess your English language proficiency.
            Our PTE course offers comprehensive training, practice tests, and
            expert guidance to help you achieve your desired scores. Whether
            you&apos;re pursuing higher education or career opportunities,
            mastering the PTE exam is a crucial step toward realizing your
            international ambitions
          </p>
          <button className="bg-[#d5deeb] text-[#2860ad] font-semibold rounded-xl hover:bg-[#E0E1FF] w-48 mt-4 px-6 py-2">
            <Link
              scroll={false}
              href="https://registration.yflyinternational.com/"
            >
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
  );
};
export default Services;
