import {
  Document, Schema, Model, model,
} from 'mongoose';
import { IProfile } from '../interfaces/profile';

interface IProfileModel extends IProfile, Document{}

const { ObjectId } = Schema.Types;

const profileSchema = new Schema({
  owner: { type: ObjectId, required: true },
  follower: { type: [ObjectId], required: true },
  following: { type: [ObjectId], required: true },
  inst_simple: { type: String, required: false },
  inst_detail: { type: String, required: false },
  active_fields: { type: [String], required: false },
  website_url: { type: String, required: false },
});

const Profile:Model<IProfileModel> = model<IProfileModel>('Profile', profileSchema);

export default Profile;
