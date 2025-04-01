import { Country } from "@/types";
import React from "react";

interface Props {
  country: Country;
}

export default function CountryCard(props: Props) {
  const { country } = props;

  const { name, borders } = country;

  return (
    <div className="flex w-[438px] h-[144px] bg-slate-700 p-2 mr-1 ml-1 mb-2 rounded-2xl ">
      <div className="h-full mr-2">
        <img
          className={"rounded-full h-[80px] max-w-[80px] "}
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </div>
      <ul className="h-full overflow-y-auto w-full">
        <li>{name.official}</li>
        <li>Languages: {Object.values(country.languages).join(", ")}</li>
        <li>
          Currency:{" "}
          {Object.values(country.currencies)
            .map((currency) => `${currency.name} (${currency.symbol})`)
            .join(", ")}
        </li>
        {borders && <li>Borders: {borders.join(", ")}</li>}
      </ul>
    </div>
  );
}
