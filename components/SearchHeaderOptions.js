import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full mx-auto justify-center text-sm text-gray-700  lg:pl-52 lg:justify-start border-b-1">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || router.query.selected}
      />
      <SearchHeaderOption
        title="images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
