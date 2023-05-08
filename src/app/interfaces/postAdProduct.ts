import { Country, Money } from "./index";

export interface PostAdProduct {
    _id?: string;
    Country?: Country;
    Money?: Money;
    days?: number;
    price?: number;
    type?: number;
    descriptions?: string[];
}