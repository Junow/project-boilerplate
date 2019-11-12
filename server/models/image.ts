import {
  Document, Schema, Model, model,
} from 'mongoose';
import { IImage } from '../interfaces/image';

const { ObjectId } = Schema.Types;

interface IImageModel extends IImage, Document{}
const imageSchema = new Schema({
  owner: { type: ObjectId, required: true },
  creator: { type: ObjectId, required: true },
  public: { type: Boolean, required: true },
  url: { type: String, required: true },
  downloads: { type: Number, required: true },
});

const Image:Model<IImageModel> = model<IImageModel>('Image', imageSchema);

export default Image;
