import { Post, User } from ".";

export interface  PostBookmark {
    _id?: string;
    Post?: Post;
    User?: User;
    like?: true;
    updateAt?: string;
    createdAt?: string;
}