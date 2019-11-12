import {
  Document, Schema, Model, model,
} from 'mongoose';
import { IMusic } from '../interfaces/music';

const { ObjectId } = Schema.Types;

interface IMusicModel extends IMusic, Document{}

const musicSchema = new Schema({
  owner: { type: ObjectId, required: true },
  creator: { type: ObjectId, required: true },
  cover_img_url: { type: String, required: false },
  sound_url: { type: String, required: true },
  public: { type: Boolean, required: true },
  genre: { type: [String], required: true },
  mood: { type: [String], required: true },
  ref: { type: [ObjectId], required: true },
});

const Music:Model<IMusicModel> = model<IMusicModel>('Music', musicSchema);

export default Music;
