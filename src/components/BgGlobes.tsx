import React from "react";

export default function BgGlobes() {
  return (
    <div
      id="bg-images"
      className="absolute w-full max-w-full top-0 left-0 z-0 flex justify-between max-md:justify-center"
    >
      <img src="/globe.png" className="max-md:hidden" />
      <img src="/globe.png" />
    </div>
  );
}
