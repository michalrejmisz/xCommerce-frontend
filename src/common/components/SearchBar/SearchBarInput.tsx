import { forwardRef } from "react";
import { clsx } from "clsx";

interface SearchBarInputProps {
    searchText: string;
    className?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    handleSearchText: (text: string) => void;
}

const SearchBarInput: React.ForwardRefRenderFunction<
    HTMLInputElement,
    SearchBarInputProps
> = ({ searchText, handleSearchText, onFocus, onBlur, className }, ref) => {
    return (
        <div
            className={clsx(
                "ml-[5px] flex-grow pr-[15px] xl:w-full xl:pl-[15px]",
                // "ml-[5px] flex-grow pr-[15px] lg:max-w-[740px] xl:w-full xl:pl-[15px]",
                className,
            )}
        >
            <input
                ref={ref ? ref : null}
                onFocus={onFocus}
                onBlur={onBlur}
                value={searchText}
                onChange={(e) => handleSearchText(e.target.value)}
                type="text"
                placeholder="Czego szukasz?"
                className="border-none py-[5px] placeholder-gray-200 focus:border-transparent focus:outline-none xl:w-full"
                // className="border-none py-[5px] placeholder-gray-200 focus:border-transparent focus:outline-none lg:max-w-[740px] xl:w-full"
            />
        </div>
    );
};

export default forwardRef(SearchBarInput);
