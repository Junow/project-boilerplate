import {
  Document, Schema, Model, model,
} from 'mongoose';

import { IWallpaper } from '../interfaces/wallpaper';

interface IWallpaperModel extends IWallpaper, Document{}

const { ObjectId } = Schema.Types;

const wallpaperSchema = new Schema({
  owner: { type: ObjectId, required: true },
  creator: { type: ObjectId, required: true },
  public: { type: String, required: true },
  url: { type: String, required: true },
  downloads: { type: String, required: true },
});

const Wallpaper:Model<IWallpaperModel> = model<IWallpaperModel>('Wallpaper', wallpaperSchema);

export default Wallpaper;
