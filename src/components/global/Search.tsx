import { Search } from "lucide-react";

interface SearchComponentProps {
  placeholder: string;
}

function SearchComponent({ placeholder }: SearchComponentProps) {
  return (
    <div className="relative flex w-full items-center">
      <Search className="absolute z-0 ml-2" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="z-10 w-full rounded-md px-9 py-2 outline outline-gray-200 focus-visible:outline-gray-500"
      />
    </div>
  );
}

export default SearchComponent;
