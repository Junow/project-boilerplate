import {
  Document, Schema, Model, model,
} from 'mongoose';
import { IWorksMusic } from '../interfaces/worksMusic';
import { IContent, IEmoji, IComment } from '../interfaces/index';

interface IWorksMusicModel extends IWorksMusic, Document{
}

const contentObj: IContent = { type: '', content: '' };
const emojiObj: IEmoji = { emoji: '', count: 0, who: [''] };
const commentObj: IComment = { author: '', content: '', child_comment: {} };
const { ObjectId } = Schema.Types;

const worksMusicSchema = new Schema({
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

const WorksMusic:Model<IWorksMusicModel> = model<IWorksMusicModel>('WorkMusic', worksMusicSchema);

export default WorksMusic;
