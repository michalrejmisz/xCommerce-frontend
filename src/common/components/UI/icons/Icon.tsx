import React from "react";
import * as iconsSvg from "@/common/components/UI/icons/IconsSvg";
import clsx from 'clsx';

type iconSvgType = keyof typeof iconsSvg;

interface IconProps {
    name: iconSvgType;
    hoverColor?: string
    color?: string;
    size?: number;
    stroke?: number;
    className?: string;
}


export default function Icon({name, size=24, stroke=1, color="#000000", hoverColor=null, className}: IconProps){
    const iconSvg = iconsSvg[name]

    if (!iconSvg) {
        throw new Error(`Icon '${name}' not found`);
    }


    return(
        // <div className={`text-[${color}] hover:text-[${hoverColor !== null ? color : hoverColor}]`} >
        // <div className={`text-[${color}] hover:text-[${hoverColor == null ? color : hoverColor}]`}>
        // <div className={clsx(
        // )}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 // fill={color}
                 style={{fill: "currentColor"}}
                 width={size}
                 height={size}
                 // width="100%"
                 // height="100%"
                 strokeWidth={stroke}
                 viewBox={`0 0 ${size} ${size}`}
                 dangerouslySetInnerHTML={{ __html: iconSvg }}
                 className={`${className}`}
            />
        // </div>
    )
}
