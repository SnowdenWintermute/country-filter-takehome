import { Country } from "@/types";
import React from "react";
import CountryCard from "./CountryCard";

interface Props {
  countries: Country[];
  searchInputValue: string;
}

export default function CountryFilteredList(props: Props) {
  const { countries, searchInputValue } = props;

  const filtered = countries.filter((item) =>
    item.name.official.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  return (
    <section
      className="w-[1000px] max-w-screen p-0 overflow-y-scroll mb-10 rounded-3xl"
      style={{
        flex: "1 1 1px;",
      }}
    >
      <ul className="p-[28px] w-full bg-slate-400 flex flex-wrap max-[948px]:justify-center ">
        {filtered.length === 0 && "No country by that name..."}
        {filtered.map((item, i) => {
          let justifySelfClass = "";
          if (i === countries.length - 1 && countries.length % 2 === 1) {
            justifySelfClass = "justify-self-start";
          }

          return (
            <li
              key={item.name.official}
              className={justifySelfClass}
              style={{
                flex: "1 1 1px;",
              }}
            >
              <CountryCard country={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
