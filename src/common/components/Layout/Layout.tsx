import Header from "../Header/Header"
import Icon from "@/common/components/UI/icons/Icon"
import {} from "@/common/components/Banner/Banner"

export default function Layout({ children }){
    return (
        <>
            <div>
                <Header/>
                <main>{children}</main>
                <footer>&copy; Website</footer>
            </div>
        </>
    );
}

