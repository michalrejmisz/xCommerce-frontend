// import Header from "../Header/Header"
import React, {ReactNode} from "react";
import Header from "@/common/components/Header/Header"
import Footer from "@/common/components/Footer/Footer"
// import {} from "@/common/components/Banner/Banner"

const Layout = ({ children } : { children: ReactNode }) => {
    return (
        <>
            <div>
                <Header/>
                <main className="mt-[150px]">
                    {children}
                    {/*<div className="fixed top-0 left-0 h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black/70 z-[900]" />*/}
                </main>
                <Footer/>
            </div>  
        </>
    );
}

export default Layout;

