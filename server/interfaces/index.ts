import mongoose, { Document } from 'mongoose';

// export interface interfaceProfile extends Document{
//     owner: mongoose.Types.ObjectId,
//     follower: mongoose.Types.ObjectId[];
//     following: mongoose.Types.ObjectId[];
//     inst_simple: string;
//     inst_detail: string;
//     active_fields: string[];
//     website_url: string;
// }

export interface interfaceWallpaper extends Document{
    owner: string
    creator: string
    public: boolean
    url: string
    downloads: number;
}

// export interface interfaceImage extends Document{
//     owner: string;
//     creator: string;
//     public: string;
//     ref: string[];
//     url: string;
// }

// export interface interfaceMusic extends Document{
//     owner: string;
//     creator: string;
//     cover_img_url: string;
//     sound_url: string;
//     public: boolean;
//     genre: string[];
//     mood: string[];
//     ref: string[];
// }

// export interface interfaceContent{
//     type: string;
//     content: string;
// }
// export interface interfaceEmoji{
//     emoji:string;
//     count: number;
//     who: string[];
// }
// export interface interfaceComment{
//     author: string;
//     content: string;
//     child_comment: object;
// }


export interface IContent{
    type: string;
    content: string;
}



export interface IEmoji{
    emoji:string;
    count: number;
    who: string[];
}


export interface IComment{
    author: string;
    content: string;
    child_comment: object;
}

// export interface interfaceWorksImage extends Document{
//     owner: string;
//     title: string;
//     content: interfaceContent[];
//     emoji: interfaceEmoji[];
//     comments: interfaceComment[];
//     comments_allow: boolean;
//     ccl: string;
//     field: string;
//     public: boolean;
//     tags: string[];
//     views: number;
// }

// export interface interfaceWorksMusic extends Document{
//     owner: string;
//     title: string;
//     content: interfaceContent[];
//     emoji: interfaceEmoji[];
//     comments: interfaceComment[];
//     field: string;
//     ccl: string;
//     comments_allow: boolean;
//     public: boolean;
//     tags: string[];
//     views: number;
}
