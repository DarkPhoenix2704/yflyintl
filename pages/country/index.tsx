/* eslint-disable @next/next/no-img-element */
import { destinations } from "@app/data/destinations";
import { Listbox } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

const selectOptions = destinations.map((destination) => ({
  id: destination.slug,
  name: destination.name,
}));

const CountryPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof selectOptions)[0] | null
  >(null);
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#2860ad] py-16 gap-4 w-full flex flex-col items-center">
        <div className="flex flex-row text-sm justify-center">
          <Link scroll={false} href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link scroll={false} href={`/country`}>
            <span className="font-semibold text-white">
              &nbsp;Study Destinations
            </span>
          </Link>
        </div>
        <h1 className="text-4xl text-center font-semibold text-white">
          Select Your Study Destination
        </h1>
        <Listbox
          value={selectedCountry}
          onChange={(country) => {
            setSelectedCountry(country);
            window.location.hash = country?.id ?? "";
          }}
        >
          <Listbox.Button className="text-md bg-white text-left flex justify-between font-semibold w-[325px] rounded-md  px-4 py-2 text-[#2860ad]">
            {selectedCountry?.name ?? "Select a Country"}
            <HiChevronDown className="inline-block ml-2 text-[#2860ad] text-xl" />
          </Listbox.Button>
          <Listbox.Options className="w-[325px] absolute rounded-md mt-[68px] bg-white py-1">
            {selectOptions.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option}
                className="py-2 px-4 hover:bg-[#d5deeb] hover:text-[#2860ad] cursor-pointer"
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center py-8  bg-[#dbe8ff] w-full justify-center">
          <h1 className="text-4xl font-semibold text-center">
            Explore Our Study Destinations
          </h1>
          <div className=" w-11/12 flex flex-col mt-4">
            {destinations.map((destination) => (
              <div
                className="w-full flex flex-col even:lg:flex-row-reverse py-1 lg:py-8 odd:lg:flex-row"
                key={destination.slug}
                id={destination.slug}
              >
                <div className="flex flex-col lg:w-1/2">
                  <h1 className="text-2xl font-semibold mt-8">
                    {destination.name}
                  </h1>
                  <img
                    src={destination.grids}
                    alt="Country Image"
                    className="rounded-xl lg:hidden w-full  mt-2"
                  />
                  <p className="text-lg mt-1 text-justify">
                    {destination.description}
                  </p>
                  <h1 className="text-2xl font-semibold mt-4">
                    Why Study in {destination.name}?
                  </h1>
                  <ul className="list-disc ml-4 mt-2 text-lg">
                    {destination.facts.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                  <button className="">
                    <Link
                      scroll={false}
                      href={`/country/${destination.slug}`}
                      className="text-[#2860ad] flex items-center gap-2 font-semibold mt-4"
                    >
                      Explore More
                      <HiChevronRight className="text-xl" />
                    </Link>
                  </button>
                </div>
                <div className="lg:flex flex-col hidden items-center lg:w-1/2">
                  <img
                    src={destination.grids}
                    alt="Country Image"
                    className="rounded-xl w-[70%]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
