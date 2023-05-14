import React from "react";


export const padIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M9.743 18A5.5 5.5 0 1 1 5 9.022L19 9a5.98 5.98 0 0 1 1.97.585A5.5 5.5 0 1 1 14.258 18H9.743zm-4.45-8l-.203.018a4.5 4.5 0 1 0 3.882 7.345l.3-.363h5.456l.3.363a4.5 4.5 0 1 0 3.882-7.345L18.706 10H5.294zm9.207 7v1h-5v-1h5zm-9-7V9h13v1h-13zm-2 5a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4zM5 12.5a.5.5 0 1 1 1 0v4a.5.5 0 1 1-1 0v-4zm8-3a.5.5 0 1 1-1 0V8.472c.043-.77.471-1.468 1.176-1.874l2.183-1.03c.387-.225.63-.634.641-1.068v-2a.5.5 0 1 1 1 0v2.013c-.021.794-.452 1.52-1.176 1.939l-2.183 1.03c-.377.219-.618.611-.641 1.018v1zm7 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-2 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-7-4v-1h2v1h-2z"/>
  </svg>
`;

const iconComponents = {
    arrowDown: ArrowDownIcon,
    arrowUp: ArrowUpIcon,
    // add more icon components as needed
};


interface IconProps {
    name: string;
    size?: number;
    stroke?: number;
}


export default function Icon({name, size=24, stroke=1}: IconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} strokeWidth={stroke} viewBox="0 0 24 24">

        </svg>
    )
}
const PadIcon = () => (
    <div dangerouslySetInnerHTML={{ __html: padIcon }} />
);

export default PadIcon;