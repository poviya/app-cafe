import { Membership } from "./membership";
import { StateCity } from "./stateCity";
import { User } from "./user";

export interface Suscription {

    _id?: string;
    User? : User;
    Join?: User;
    type?: string;
    expiredAt?: string;
    updateAt?: string;
    createdAt?: string;
}

