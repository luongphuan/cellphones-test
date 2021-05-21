
export interface MenuItem {
    name: string,
    icon: string,
    link: string,
    children?: SubMenuItem[]
};

export interface SubMenuItem {
    name: string,
    link: string,
    children?: SubMenuItem2[]
};

export interface SubMenuItem2 {
    name: string,
    link: string,
};