import { Money } from "./money";
import { PostMedia } from "./postMedia";

export interface Course {
    _id?: string;

    PostMedia?: PostMedia[];

    slug?: string;
    code?: string;
    title?: string;
    description?: string;
    tags?: [string];
    content?: object;
    purposes?: string;
    benefits?: string;
    whoIsItFor?: string;
    startDate?: string;
    duration?: string;
    schedule?: string;
    modality?: string;
    certifiedHours?: string;
    Money?: Money;
    price?: string;
    comment?: boolean;
    // CONTROL
    status?: string;
    active?: boolean;
    edit?: boolean;
    delete?: boolean;
    updatedAt?: Date;
    createdAt?: Date;
}