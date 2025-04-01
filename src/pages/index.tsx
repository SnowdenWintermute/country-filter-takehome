import { Country } from "@/types";
import { useEffect, useState } from "react";
import BgGlobes from "@/components/BgGlobes";
import CountryFilteredList from "@/components/CountryFilteredList";
import SearchHeader from "@/components/SearchHeader";

export interface Currency {
  name: string;
  symbol: string;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  async function fetchCountries() {
    const countriesResponse = await fetch(
      "https://restcountries.com/v3.1/region/europe"
    );
    const countriesJson: Country[] = await countriesResponse.json();
    setCountries(countriesJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading || countries === undefined) return "loading";

  return (
    <main className="bg-gray-500 h-screen w-screen">
      <BgGlobes />
      <div className="w-screen max-h-screen flex flex-col items-center absolute z-10 ">
        <SearchHeader
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
        <CountryFilteredList
          countries={countries}
          searchInputValue={searchInputValue}
        />
      </div>
    </main>
  );
}
