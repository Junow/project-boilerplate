import mongoose from 'mongoose';
import { IContent, IEmoji, IComment } from './index';

export interface IWorksMusic {
    owner: mongoose.Types.ObjectId;
    title: string;
    content: IContent[];
    emoji: IEmoji[];
    comments: IComment[];
    comments_allow: boolean;
    ccl: string;
    field: string;
    public: boolean;
    tags: string[];
    views: number;
}
