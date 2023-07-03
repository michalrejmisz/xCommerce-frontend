import { UnstyledButton } from "@mantine/core";
import { IconHeadset, IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";
import React from "react";
import clsx from "clsx";

const mockupData = [
    {title: "Pomoc i Kontakt", icon: <IconHeadset stroke={1} size={32}/>, withSeparator: true},
    {title: "Twoje Konto", icon: <IconUser stroke={1} size={32}/>, withSeparator: false},
    {title: "Twoje Listy", icon: <IconHeart stroke={1} size={32}/>, withSeparator: false},
    {title: "Koszyk", icon: <IconShoppingCart stroke={1} size={32}/>, withSeparator: false},
]


interface ActionButtonProps {
    title: String;
    icon: React.ReactNode;
    withSeparator?: boolean;
    showTitle?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({title, icon, withSeparator=false, showTitle=true}) => {
    return(
        <>
            <div className="flex items-center min-w-[64px] md:min-w-[88px] h-[48px] md:h-[64px] hover-button">
                <UnstyledButton className="flex flex-col justify-center items-center w-full">
                    <div
                        className={clsx({
                            "transition duration-300" : true,
                            "translate-y-0" : showTitle,
                            "translate-y-[6px]" : !showTitle,
                        })}
                    >
                        {icon}
                    </div>
                    <div
                        className={clsx({
                            "text-[11px] leading-[12px]" : true,
                            "transition duration-300" : true,
                            "scale-1 translate-y-0 opacity-full" : showTitle,
                            "scale-0 -translate-y-full opacity-0" : !showTitle,
                        })}
                    >
                        {title}
                    </div>
                </UnstyledButton>
            </div>
            {withSeparator && <span className="md:flex md:ml-[8px] md:mr-[12px] md:h-[44px] md:border-r-[1px] md:border-gray-200"/>}
        </>
    );
}

interface HeaderActionButtonsProps {
    showTitles: boolean;
}

const HeaderActionButtons: React.FC<HeaderActionButtonsProps> = ({showTitles=true}) => {
    return(
        <div className="flex flex-row items-center">
            {mockupData.map((button, index) =>
                <ActionButton
                    key={index}
                    title={button.title}
                    icon={button.icon}
                    withSeparator={button.withSeparator}
                    showTitle={showTitles}
                />
            )}
        </div>
    );
}

export default HeaderActionButtons;