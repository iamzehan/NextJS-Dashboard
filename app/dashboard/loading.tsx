import Icon from "@/app/components/Icons";
export default function Loading() {
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
