import React, { SetStateAction } from "react";

interface Props {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<SetStateAction<string>>;
}

export default function SearchHeader(props: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setSearchInputValue(e.target.value);
  }

  return (
    <section
      id="header"
      className="mb-[40px] flex flex-col pt-[22px] w-full max-w-[720px] "
    >
      <div className="bg-slate-700 p-2 text-5xl text-zinc-300 mb-[72px] text-center drop-shadow-lg">
        <h1>Countries Info Explorer</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <label className="w-full  ">
            <input
              type="text"
              className="h-[72px] rounded-3xl bg-slate-400 px-[37px] w-full placeholder-black border-2 text-2xl "
              placeholder="Search..."
              value={props.searchInputValue}
              onChange={handleChange}
            ></input>
          </label>

          <img
            src="/search.png"
            alt="search icon"
            className="absolute top-1/2 right-2 -translate-y-1/2 h-[58px]"
          />
          <img
            src="/filter.png"
            alt="filter icon"
            className="absolute top-1/2 -translate-y-1/2 h-[58px] max-lg:hidden"
            style={{ left: "calc(100% + 5px)" }}
          />
        </div>
      </form>
    </section>
  );
}
