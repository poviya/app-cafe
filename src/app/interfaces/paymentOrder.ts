import { Customer, Money, User } from "./";

export interface PaymentOrder {
    _id?: string;
    Customer?: Customer; 
    codeCollection?: string;
    production?: boolean;
    Money?: Money;
    amount?: number;
    status?: string;
    paymentType?: string;
    paymentDetails?: any;
    receipt?: any;
    createdAt: string;
}