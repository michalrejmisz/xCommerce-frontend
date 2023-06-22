export interface Image {
    id: string;
    img?: string;
    link?: string;
}

export interface ProductProps {
    id: string;
    title: string;
    link: string;
    img?: Image;
    price: string;
    lowestPrice?: string;
}

export interface FooterNavigationItem {
    name: string;
    link: string;
}

export interface FooterNavigationSection {
    title: string;
    list: FooterNavigationItem[];
}
