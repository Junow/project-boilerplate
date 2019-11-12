import mongoose from 'mongoose';

export interface IImage{
    owner: mongoose.Types.ObjectId;
    creator: mongoose.Types.ObjectId;
    public: boolean;
    url: string;
    downloads: number;
}
