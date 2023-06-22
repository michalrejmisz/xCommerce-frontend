import Image from "next/image";
import FooterNav  from "@/common/components/Footer/FooterNav";
import FooterBoxSection from "@/common/components/Footer/FooterBoxSection";
import FooterPaymentDelivery from "@/common/components/Footer/FooterPaymentDelivery";

const NAVIGATION_MOCKUP = [
    {
        title: "Zamowienia",
        list: [
            {name: "Dostawa", link: "/dostawa" },
            {name: "Raty", link: "/dostawa" },
            {name: "Leasing", link: "/leasing" },
            {name: "Ubezpieczenia", link: "/leasing" },
            {name: "TaxFree", link: "/leasing" },
            {name: "Montaż", link: "/leasing" },
            {name: "Zwroty i reklamacje", link: "/leasing" },
            {name: "Najczesciej zadawane pytania", link: "/leasing" },
        ]
    },
    {
        title: "Promocje i inspiracje",
        list: [
            {name: "Wyprzedaz", link: "/dostawa" },
            {name: "Goracy strzal", link: "/dostawa" },
            {name: "un.Box", link: "/leasing" },
            {name: "Promocje", link: "/leasing" },
            {name: "Karty podarunkowe", link: "/leasing" },
            {name: "Poradniki", link: "/leasing" },
            {name: "Aktualnosci", link: "/leasing" },
        ]
    },
    {
        title: "x-Commerce",
        list: [
            {name: "O nas", link: "/dostawa" },
            {name: "Regulamin", link: "/dostawa" },
            {name: "Polityka prywatności", link: "/dostawa" },
            {name: "Polityka cookies", link: "/dostawa" },
            {name: "Biuro prasowe", link: "/dostawa" },
            {name: "Zamówienia publiczne", link: "/dostawa" },
            {name: "Zakupy dla firm", link: "/dostawa" },
            {name: "Wspołpraca marketingowa", link: "/dostawa" },
            {name: "Geex", link: "/dostawa" },
            {name: "Forum", link: "/dostawa" },
            {name: "Kariera", link: "/dostawa" },
            {name: "Kontakt", link: "/dostawa" },
            {name: "Realizowane projekty", link: "/dostawa" },
        ]
    },

]

const Footer = () => {
    return(
        <div className="container m-auto">
            <div className="xl:pb-[48px]">
                <FooterBoxSection />
                <FooterNav navigation={NAVIGATION_MOCKUP} />
            </div>
            <FooterPaymentDelivery />
            <div className="w-full text-center">
                <span  >© x-Commerce 2023</span>
            </div>
        </div>
    )
}


export default Footer;