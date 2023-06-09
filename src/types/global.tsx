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