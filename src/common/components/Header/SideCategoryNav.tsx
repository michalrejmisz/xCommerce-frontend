import Icon from "@/common/components/UI/icons/Icon";

const SideCategoryNav: React.FC = () => {
    return(
        <div className="fixed top-0 left-0 h-full w-[360px] max-w-[calc(-64px + 100vw)] bg-white z-[1200]">
            <div className="flex flex-row bg-gray-50 border-b border-gray-test px-[16px] py-[8px] items-center">
                <Icon name="CloseIcon" className="justify-center align-middle"/>
                <h3 className="text-[18px] leading-[32px] font-bold pl-[8px]">Menu</h3>
            </div>
            <div className="h-full">
                <div className="border-b border-gray-test">
                    <div className="flex flex-col justify-end h-[48px] w-full pb-[12px]">
                        <div className="h-fit ml-[16px] text-[13px] leading-[16px] font-bold text-gray-250">
                            Kategorie
                        </div>
                    </div>

                    <ul>
                        <li className="flex flex-row items-center justify-between h-[48px] px-[15px]">
                            <Icon name="TvIcon" className="grow-0 mr-[14px]" />
                            <div className="flex grow justify-start">
                                Laptopy i komputery
                            </div>
                            <Icon name="ChevronRightIcon" className="grow-0"/>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-end h-[48px] w-full pb-[12px]">
                    <div className="h-fit ml-[16px] text-[13px] leading-[16px] font-bold text-gray-250">
                        Masz pytania?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCategoryNav;