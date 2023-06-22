import Icon from "@/common/components/UI/icons/Icon";
import Link from "next/link";

const ContactSection = () => {
    return(
        <div className="flex flex-col grow max-md:mb-[25px]">
            <h3 className="font-bold mb-[15px] max-md:text-[18px] max-md:leading-[24px]">Kontakt</h3>
            <div className="flex flex-col space-y-[15px]">
                <div className="inline-flex space-x-[6px]">
                    <Icon name="PhoneCallIcon" size={24}/>
                    <div>
                        <Link href="tel:343770000">
                            <h2 className="text-[22px] leading-[28px] hover:underline">34 377 00 00</h2>
                        </Link>
                        <div className="flex flex-row text-[12px] leading-[16px] space-x-[6px]">
                            <div className="flex flex-col text-gray-250">
                                <span>pon. - pt.</span>
                                <span>sob. - niedz.</span>
                            </div>
                            <div className="flex flex-col">
                                <span>8:00 - 21:00</span>
                                <span>8:00 - 19:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="mailto:x-kom@x-kom.pl" className="group/mail inline-flex space-x-[6px]">
                    <Icon name="MailIcon" size={24}/>
                    <span className="group-hover/mail:underline">x-kom@x-kom.pl</span>
                </Link>
                <Link href="mailto:x-kom@x-kom.pl" className="group/whatsapp inline-flex space-x-[6px]">
                    <Icon name="WhatsAppIcon" size={24}/>
                    <span className="group-hover/whatsapp:underline">WhatsApp</span>
                </Link>
                <Link href="mailto:x-kom@x-kom.pl" className="group/localization inline-flex space-x-[6px]">
                    <Icon name="LocalizationIcon" size={24}/>
                    <span className="group-hover/localization:underline">Salony x-kom</span>
                </Link>
            </div>
        </div>
    )
}

export default ContactSection;