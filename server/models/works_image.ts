import {
  Document, Schema, Model, model,
} from 'mongoose';
import { IWorksImage } from '../interfaces/worksImage';
import { IContent, IEmoji, IComment } from '../interfaces/index';

interface IWorksImageModel extends IWorksImage, Document{

}
const contentObj: IContent = { type: '', content: '' };
const emojiObj: IEmoji = { emoji: '', count: 0, who: [''] };
const commentObj: IComment = { author: '', content: '', child_comment: {} };
const { ObjectId } = Schema.Types;

const worksImageSchema = new Schema({
  owner: { type: ObjectId, required: true },
  title: { type: String, required: true },
  content: { type: [contentObj], required: true },
  emoji: { type: [emojiObj], required: true },
  comments: { type: [commentObj], required: false },
  comments_allow: { type: Boolean, required: true },
  ccl: { type: String, required: true },
  field: { type: String, required: true },
  public: { type: Boolean, required: true },
  tags: { type: [String], required: true },
  views: { type: Number, required: true },
});

const WorksImage:Model<IWorksImageModel> = model<IWorksImageModel>('WorkImage', worksImageSchema);

export default WorksImage;
