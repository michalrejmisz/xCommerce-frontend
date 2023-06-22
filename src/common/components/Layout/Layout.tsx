// import Header from "../Header/Header"
import Header from "@/common/components/Header/Header"
import Footer from "@/common/components/Footer/Footer"
// import {} from "@/common/components/Banner/Banner"

export default function Layout({ children }){
    return (
        <>
            <div>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    );
}

