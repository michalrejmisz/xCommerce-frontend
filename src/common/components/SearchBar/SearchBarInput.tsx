import { forwardRef } from "react";

interface SearchBarInputProps {
  searchText: string;
  onFocus?: () => void;
  onBlur?: () => void;
  handleSearchText: (text: string) => void;
}

const SearchBarInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SearchBarInputProps
> = ({ searchText, handleSearchText, onFocus, onBlur }, ref) => {
  return (
    <div className="flex-grow flex-shrink lg:max-w-[740px] xl:pl-[15px] ml-[5px] pr-[15px]">
      <input
        ref={ref ? ref : null}
        onFocus={onFocus}
        onBlur={onBlur}
        value={searchText}
        onChange={(e) => handleSearchText(e.target.value)}
        type="text"
        placeholder="Czego szukasz?"
        className="w-full border-none focus:border-transparent focus:outline-none py-[5px] placeholder-gray-200"
      />
    </div>
  );
};

export default forwardRef(SearchBarInput);
