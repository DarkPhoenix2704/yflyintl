/* eslint-disable @next/next/no-img-element */
import { destinations } from "@app/data/destinations";
import { GetStaticPaths, GetStaticProps } from "next";
import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiChevronUp } from "react-icons/hi2";

const StudyDestination = ({
  slug,
  name,
  description,
  why,
  facts,
  insights,
  cost,
  courses,
  faqs,
}: (typeof destinations)[0]) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#0261b2] text-center py-16 flex flex-col w-full text-lg gap-4">
        <div className="flex flex-row text-sm justify-center">
          <Link href="/country">
            <p className="text-[#f4f0f8] font-medium">Study Destinations •</p>
          </Link>
          <Link href={`/country/${slug}`}>
            <span className="font-semibold text-white">&nbsp;{name}</span>
          </Link>
        </div>
        <h1 className="text-4xl font-semibold text-[#f4f0ff]">
          Study in {name}
        </h1>
      </div>
      <div className="flex flex-row gap-4 justify-center px-4 mt-[-32px]">
        <Image
          src={`/country/${slug}/00.jpg`}
          width={500}
          height={450}
          alt="Hero Image"
          className="rounded-xl "
        />
        <Image
          src={`/country/${slug}/01.jpg`}
          width={500}
          height={450}
          alt="Hero Image"
          className="rounded-xl hidden lg:block"
        />
      </div>
      <p className="text-center text-xl mt-8 md:w-[750px] px-4">
        {description}
      </p>
      <button className="bg-[#f4f0ff] text-[#5327b3] font-semibold rounded-xl hover:bg-[#f4e0ff] px-6 py-2 mt-4">
        <Link href="https://registration.yflyinternational.com/">
          Enquire Now
        </Link>
      </button>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-3xl font-semibold text-[#5327b3]">
            Why Study in {name}?
          </h1>
          <p className="text-lg mt-4 text-justify">{why}</p>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:px-8">
          <h1 className="text-3xl font-semibold text-[#5327b3]">
            Quick Facts about {name}
          </h1>
          <ul className="list-disc list-inside mt-4">
            {facts.map((fact) => (
              <li key={fact} className="text-justify text-lg">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col gap-4">
        <h1 className="text-center text-3xl font-semibold text-[#5327b3]">
          Cost of Studying in {name}
        </h1>
        <table className="table-auto">
          <thead>
            <tr className="bg-[#f4e0ff]">
              <th className="border px-4 py-2">Expense</th>
              <th className="border px-4 py-2">Cost in {cost.currency}</th>
            </tr>
          </thead>
          <tbody>
            {cost.fees.map((fee) => (
              <tr className="last:bg-[#f4e0ff]" key={fee.name}>
                <td className="border px-4 py-2">{fee.name}</td>
                <td className="border px-4 text-center py-2">{fee.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="w-11/12 my-8" />
      <div className="w-11/12 flex flex-col gap-4">
        <h1 className="text-center text-3xl font-semibold text-[#5327b3]">
          Career & Industry Insights
        </h1>
        <p className="text-justify text-lg">{insights}</p>
      </div>
      <div className="w-11/12 flex my-8 flex-col lg:flex-row gap-4">
        <div className="flex flex-col lg:w-1/2">
          <Image
            src="/discuss.jpg"
            width={500}
            height={350}
            alt=""
            className="rounded-md hidden lg:block w-full mr-4"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-3xl text-center lg:text-left font-semibold text-[#5327b3]">
            Popular Courses
          </h1>
          <Image
            src="/discuss.jpg"
            width={500}
            height={350}
            alt=""
            className="rounded-md mt-2  lg:hidden w-full mr-4"
          />
          <ul className="list-disc list-inside mt-4">
            {courses.map((course) => (
              <li key={course} className="text-justify px-4 py-2 text-lg">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4 lg:py-16 px-4 lg:w-11/12">
        <h1 className="text-center text-4xl font-bold text-[#5327b3]">FAQs</h1>
        <div className="flex gap-2 mt-4 flex-col">
          {faqs.map((faq) => (
            <Disclosure key={faq.question}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-semibold text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    {faq.question}
                    <HiChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform  opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform opacity-0"
                  >
                    <Disclosure.Panel
                      className="px-2 pt-2 pb-2 text-md text-gray-500"
                      static
                    >
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
      <div className="flex w-11/12 gap-3 flex-col relative bg-gradient-to-r from-[#e6e5e1] to-[#eeeeec] justify-center py-16 lg:mx-32 rounded-lg px-8 font-semibold ">
        <h1 className=" text-2xl md:text-6xl text-[#040c61] font-semibold">
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
  );
};

export default StudyDestination;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = destinations.map((destination) => ({
    params: { slug: destination.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const destination = destinations.find(
    (destination) => destination.slug === params?.slug
  );
  if (!destination) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      slug: destination?.slug,
      name: destination?.name,
      description: destination?.description,
      why: destination?.why,
      facts: destination?.facts,
      insights: destination?.insights,
      cost: destination?.cost,
      courses: destination?.courses,
      faqs: destination?.faqs,
    },
  };
};
