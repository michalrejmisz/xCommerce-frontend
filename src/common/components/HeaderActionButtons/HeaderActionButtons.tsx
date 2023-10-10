import { UnstyledButton } from "@mantine/core";
import {
    IconHeadset,
    IconHeart,
    IconShoppingCart,
    IconUser,
} from "@tabler/icons-react";
import Icon from "../UI/icons/Icon";
import React from "react";
import clsx from "clsx";

const mockupData = [
    {
        title: "Pomoc i Kontakt",
        icon: <Icon name="HeadsetIcon" size={32} />,
        withSeparator: true,
    },
    {
        title: "Twoje Konto",
        icon: <Icon name="UserIcon" size={32} />,
        withSeparator: false,
    },
    {
        title: "Twoje Listy",
        icon: <Icon name="HeartFullIcon" size={32} />,
        withSeparator: false,
    },
    {
        title: "Koszyk",
        icon: <Icon name="ShoppingCartIcon" size={32} />,
        withSeparator: false,
    },
];

interface ActionButtonProps {
    title: String;
    icon: React.ReactNode;
    withSeparator?: boolean;
    showTitle?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    title,
    icon,
    withSeparator = false,
    showTitle = true,
}) => {
    return (
        <>
            <div className="hover-button flex h-[48px] min-w-[64px] items-center md:h-[64px] md:min-w-[88px]">
                <UnstyledButton className="flex h-full w-full flex-col items-center justify-center">
                    <div
                        className={clsx({
                            "transition duration-300": true,
                            "translate-y-0": showTitle,
                            "translate-y-[6px]": !showTitle,
                        })}
                    >
                        {icon}
                    </div>
                    <div
                        className={clsx({
                            "text-[11px] leading-[12px]": true,
                            "transition duration-300": true,
                            "scale-1 opacity-full translate-y-0": showTitle,
                            "-translate-y-full scale-0 opacity-0": !showTitle,
                        })}
                    >
                        {title}
                    </div>
                </UnstyledButton>
            </div>
            {withSeparator && (
                <span className="md:ml-[8px] md:mr-[12px] md:flex md:h-[44px] md:border-r-[1px] md:border-gray-200" />
            )}
        </>
    );
};

interface HeaderActionButtonsProps {
    showTitles: boolean;
    className?: string;
}

const HeaderActionButtons: React.FC<HeaderActionButtonsProps> = ({
    showTitles = true,
    className,
}) => {
    return (
        <div
            className={clsx(
                "flex h-full flex-row items-center self-end",
                className,
            )}
        >
            {mockupData.map((button, index) => (
                <ActionButton
                    key={index}
                    title={button.title}
                    icon={button.icon}
                    withSeparator={button.withSeparator}
                    showTitle={showTitles}
                />
            ))}
        </div>
    );
};

export default HeaderActionButtons;
