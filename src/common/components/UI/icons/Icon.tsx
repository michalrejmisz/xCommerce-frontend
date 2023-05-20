import React from "react";
import * as iconsSvg from "@/common/components/UI/icons/IconsSvg";

type iconSvgType = keyof typeof iconsSvg;

interface IconProps {
    name: iconSvgType;
    color?: string;
    size?: number;
    stroke?: number;
}


export default function Icon({name, size=24, stroke=1, color="#000000"}: IconProps){
    const iconSvg = iconsSvg[name]

    if (!iconSvg) {
        throw new Error(`Icon '${name}' not found`);
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg"
             fill={color}
             width={size}
             height={size}
             strokeWidth={stroke}
             viewBox="0 0 24 24"
             dangerouslySetInnerHTML={{ __html: iconSvg }}
        />
    )
}
