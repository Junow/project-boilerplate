import mongoose from 'mongoose';

export interface IProfile{
    owner: mongoose.Types.ObjectId;
    follower: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
    inst_simple: string;
    inst_detail: string;
    active_fields: string[];
    website_url: string;
}
