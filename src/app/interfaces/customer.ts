
export interface Customer {
    _id?: string;
    name?: string;
    lastname?: string;
    contactName?: string;
    contactPerson?: string;
    idenfication?: string;
    phonePrefix?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    entity?: string;
    type?: string;
    days?: number;
    taxExempt?: boolean;
    note?: string;
    // CONTROL
    active?: boolean;
    edit?: boolean;
    delete?: boolean;
    updatedAt?: Date;
    createdAt?: Date;
}