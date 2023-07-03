import { UnstyledButton } from "@mantine/core";

interface Props {
    className?: string;
}


export default function Logo({className} : Props){
    return(
        <UnstyledButton className={`${className}`}>
            <img src="logo.svg" className="h-[40px] w-[227px] max-w-none"/>
            {/*<img src="logo.svg" className="h-[40px] w-[227.5px] max-w-none"/>*/}
        </UnstyledButton>
    );
}