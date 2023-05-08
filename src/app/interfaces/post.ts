import { PostCategory, PostSalesUnit, PostMedia, User, Money } from './index';

export interface  Post {

    _id?: string;
    User?: User;

    code?: string;
    title? : string;
    slug?: string;
    description?: string;
    plan?: number;
    planAt?: number;
    publishedAt?: string;

    published?: boolean;
    publishedCount?: number;

    totalClick?: number;

    PostSalesUnit?: PostSalesUnit;
    PostCategory?: PostCategory;

    comment?: boolean;
    weight?: string;
    weightAmount?: number;

    eventDate?: string;

    PostMedia?: PostMedia[];
    Bookmark?: User;
    likes?: number;
    updateAt?: string;
    createdAt?: string;
    
    status?: string;
    typeView?: string;
    price?: number;
    Money?: Money;
}
