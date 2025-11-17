export interface ItemInfo {
    type: "a"|"p"|"h3";
    text: string;
    href?: string;
}
export interface Education {
    content: ItemInfo[];  
}