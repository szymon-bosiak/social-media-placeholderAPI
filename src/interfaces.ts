export interface UserInformation {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string;
    address:string;
    company: string;
}

export interface PostInformation {
    id: number;
    body: string;
    title: string;
    userId: number;
}

export interface PhotoInformation {
    id: number;
    thumbnailUrl: string;
    title: string;
    albumId: number;
}

//export type ProductsShowcase = ProductsInformations[];