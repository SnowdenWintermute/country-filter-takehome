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
  const [error, setError] = useState<boolean>(false);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  async function fetchCountries() {
    try {
      // const countriesResponse = await fetch(
      //   "https://restcountries.com/v3.1/region/europe"
      // );
      const countriesResponse = await fetch("/api/countries");
      const countriesJson: Country[] = await countriesResponse.json();
      console.log(countriesJson);
      setCountries(countriesJson);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main className="bg-gray-500 h-screen w-screen text-zinc-300">
      <BgGlobes />
      <div className="w-screen max-h-screen flex flex-col items-center absolute z-10 ">
        <SearchHeader
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
        {loading && (
          <div className="w-[1000px] max-w-screen p-0 mb-10 rounded-3xl text-center">
            loading...
          </div>
        )}
        {error && (
          <div className="w-[1000px] max-w-screen p-0 mb-10 rounded-3xl text-center">
            error fetching data
          </div>
        )}
        {!loading && countries && (
          <CountryFilteredList
            countries={countries}
            searchInputValue={searchInputValue}
          />
        )}
      </div>
    </main>
  );
}
