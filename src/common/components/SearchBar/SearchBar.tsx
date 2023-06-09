import {IconSearch, IconTriangleFilled, IconTriangleInvertedFilled} from "@tabler/icons-react";
import { UnstyledButton } from "@mantine/core";

// Temporary search bar name with logo and panel on top
const SearchBarInput = () => {
    return(
        <div className="flex-grow flex-shrink lg:max-w-[740px]">{/*<div className="flex-grow flex-shrink w-full">*/}
            <input type="text" placeholder="Czego szukasz?" className="w-full border-none focus:border-transparent focus:outline-none py-[5px] xl:pl-[15px] ml-[5px] pr-[15px]"/>
        </div>

    )
}

const CategoryDropDown = () => {
    return(
            <UnstyledButton className="hidden xl:flex items-center justify-center pt-[8px] pr-[9px] pb-[10px] pl-[12px] hover:bg-gray-50 hover:rounded-full">
                    <span>Wszędzie</span>
                    {/*<span className="w-1.5 h-1.5 ml-1">*/}
                        {/*Add conditional depending on hidden list or not*/}
                        {/*<IconTriangleFilled/>*/}
                        <IconTriangleInvertedFilled className="ml-1 w-2 h-2"/>
                    {/*</span>*/}
                {/*</div>*/}
            </UnstyledButton>
    )
}

const SearchButton = () => {
    return(
        <UnstyledButton className="hidden xl:flex justify-center items-center bg-gray-600 rounded-full border-none hover:bg-black w-16 h-full">
            <IconSearch className="w-6 h-6 stroke-white"/>
        </UnstyledButton>
    )
}

export default function SearchBar(){
    return(
        <>
            {/*<div className="flex bg-white p-5">*/}
                <div className="flex items-center xl:pr-[8px] xl:pl-[32px] lg:h-full lg:pr-[13px] lg:pl-[24px] xxl:max-w-[775px] xl:max-w-[400px]">
                    <div className="flex flex-row justify-between items-center rounded-full border border-gray-200 bg-white w-full h-[40px] focus:shadow-md">
                        <SearchBarInput/>
                        <div role="separator" className="hidden xl:block w-px h-6 bg-gray-400 mx-1"/>
                        <CategoryDropDown/>
                        <SearchButton/>
                    </div>
                </div>
            {/*</div>*/}
        </>
    );
}