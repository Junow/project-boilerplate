import mongoose from 'mongoose';

export interface IMusic{
    owner: mongoose.Types.ObjectId;
    creator: mongoose.Types.ObjectId;
    cover_img_url: string;
    sound_url: string;
    public: boolean;
    genre: string[];
    mood: string[];
    ref: mongoose.Types.ObjectId[];
}
