// import Header from "../Header/Header"
import Header from "@/common/components/Header/Header"
import Footer from "@/common/components/Footer/Footer"
import React from "react";
// import {} from "@/common/components/Banner/Banner"

export default function Layout({ children }){
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

