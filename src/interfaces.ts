export interface UserInformation {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string;
    address: AddressInformation;
    company: CompanyInformation;
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

export interface AddressInformation {
    city: string;
    street: string;
    suite: number;
    zipcode: string;
}

export interface CompanyInformation {
    bs: string; 
    catchPhrase: string;
    name: string;
}

export interface Values {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    bs: string;
    catchPhrase: string;
}