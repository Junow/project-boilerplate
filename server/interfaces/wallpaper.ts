import mongoose from 'mongoose';

export interface IWallpaper{
    owner: mongoose.Types.ObjectId;
    creator: mongoose.Types.ObjectId;
    public: boolean;
    url: string;
    downloads: number;
}
