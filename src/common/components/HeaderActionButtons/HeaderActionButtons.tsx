import { UnstyledButton } from "@mantine/core";
import { IconHeadset, IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";
import React from "react";

const mockupData = [
    {name: "Pomoc i Kontakt", icon: <IconHeadset stroke={1} size={32}/>, withSeparator: true},
    {name: "Twoje Konto", icon: <IconUser stroke={1} size={32}/>},
    {name: "Twoje Listy", icon: <IconHeart stroke={1} size={32}/>},
    {name: "Koszyk", icon: <IconShoppingCart stroke={1} size={32}/>},
]


interface ActionButtonProps {
    name: String;
    icon: React.ReactNode;
    withSeparator?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({name, icon, withSeparator=false}) => {
    return(
        <>
            <div className="flex items-center min-w-[64px] md:min-w-[88px] h-[48px] md:h-[64px] hover-button">
                <UnstyledButton className="flex flex-col justify-center items-center w-full">
                    <div>{icon}</div>
                    <div className="text-[11px] leading-[12px]">{name}</div>
                </UnstyledButton>
            </div>
                {withSeparator && <span className="md:flex md:ml-[8px] md:mr-[12px] md:h-[44px] md:border-r-[1px] md:border-gray-border"/>}
        </>
    );
}


export default function HeaderActionButtons(){
    return(
        <div className="flex flex-row items-center">
            {mockupData.map((button, index) =>
                <ActionButton
                    key={index}
                    name={button.name}
                    icon={button.icon}
                    withSeparator={button.withSeparator ?? false}
                />
            )}
        </div>
    );
}