/* eslint-disable @next/next/no-img-element */
import { destinations } from "@app/data/destinations";
import { university } from "@app/data/university";
import { Listbox } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const selectOptions = destinations.map((destination) => ({
  id: destination.slug,
  name: destination.name,
}));

const UniverityPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof selectOptions)[0] | null
  >(selectOptions[0]);

  const [search, setSearch] = useState<string | null>(null);

  const availableUniversities = useMemo(() => {
    if (!selectedCountry) return null;
    return university.filter(
      (val) =>
        val.country === selectedCountry.name &&
        val.name.toLowerCase().includes(search?.toLowerCase() ?? "")
    );
  }, [selectedCountry, search]);

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#2860ad] py-16 gap-4 w-full flex flex-col items-center">
        <div className="flex flex-row text-sm justify-center">
          <Link scroll={false} href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link scroll={false} href={`/country`}>
            <span className="font-semibold text-white">&nbsp;Universities</span>
          </Link>
        </div>
        <h1 className="text-4xl text-center font-semibold text-white">
          Select Your Study Destination
        </h1>
        <p className="text-white text-center">
          Choose from our list of top universities in the world
        </p>
        <Listbox
          value={selectedCountry}
          onChange={(country) => {
            setSelectedCountry(country);
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
      {selectedCountry && (
        <div className="w-full">
          <div className="flex flex-col items-center py-8  w-full justify-center">
            <h1 className="text-4xl font-semibold text-center">
              Explore Universities in {selectedCountry?.name}
            </h1>
            <input
              type="text"
              className="w-11/12 md:w-10/12 h-12 mt-4 rounded-md px-4 bg-slate-100 shadow-sm"
              placeholder="Search for a university"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center mt-2 gap-4">
            {availableUniversities &&
              availableUniversities.map((val) => (
                <Link
                  scroll={false}
                  href={val.website}
                  key={val.id}
                  className="w-11/12 lg:w-10/12"
                >
                  <div className="flex flex-row  py-4 items-center gap-4 px-4 rounded-md bg-slate-50 hover:drop-shadow-md">
                    <img
                      src={val.image}
                      alt={val.name}
                      className="w-[40px] h-[40px]"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-lg font-semibold">{val.name}</h1>
                      <p className="text-sm text-clip">{val.website}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniverityPage;
