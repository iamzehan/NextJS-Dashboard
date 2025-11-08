"use client";
import Icon from "./Material-Icons";
export default function Loader() {
  return (
    <div
      className="
    flex w-full h-full items-center justify-center"
    >
      Loading...
      <Icon
        name="DataUsageTwoTone"
        className="animate-spin text-gray-500 text-2xl"
      />
    </div>
  );
}
