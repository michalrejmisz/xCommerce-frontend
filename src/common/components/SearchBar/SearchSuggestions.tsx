import {IconPlayerSkipBack, IconX} from "@tabler/icons-react";
import Icon from "@/common/components/UI/icons/Icon";

const SearchSuggestions = () => {
    const DUMB_SEARCH = ["klawka", "kawka", "xd", "test"]
    return(
        <div className="w-full flex-grow">
            <div className="flex flex-row h-full pt-[4px] mb-[16px]">
                <div className="flex flex-col basis-1/2 border-r border-gray-225 ">
                    <div className="flex flex-row justify-between px-[12px]">
                        <div className="text-[13px] leading-[16px] font-bold text-gray-250 pt-[4px] pb-[8px]">
                            Ostatnio wyszukiwane
                        </div> 
                        <div className="text-[13px] leading-[16px] text-gray-250 pt-[4px] pb-[8px]">
                            Wyczyść wszystko
                        </div>
                    </div>
                    {DUMB_SEARCH.map((searchResult, index) => (
                        <div key={index} className="flex flex-row items-center justify-between h-[48px] pr-[25px] hover:bg-gray-50">
                            <div className="flex flex-row">
                                <Icon name="TimeBackIcon" className="mx-[16px] fill-red-100 stroke-gray-150" fill="none" />
                                <span className="flex text-[14px] leading-[20px]">
                                    {searchResult}
                                </span>
                            </div>
                            <IconX size={15} stroke={1}/>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col basis-1/2 px-[12px]">
                    <div className="text-[13px] leading-[16px] font-bold text-gray-250 pt-[4px] pb-[8px]">
                        Ostatnio oglądadne
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSuggestions;