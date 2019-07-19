import { Address } from './address.model';

export interface User {
    id: string;
    last_name: string;
    first_name: string;
    email: string;
    password: string;
    imagePath: string;
    Address: Address;
}