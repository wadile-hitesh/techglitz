import mongoose, {Schema, Document} from "mongoose";

export interface Url extends Document {
  url : string,
  createdAt : Date,
  expiresIn : Date
}

const urlSchema : Schema<Url> = new Schema({
  url : {
    type : String,
    required : true
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
  expiresIn : {
    type : Date,
    default : Date.now() + 24*60*60*1000
  }
})

const UrlModel = (mongoose.models.Url as mongoose.Model<Url>) || mongoose.model<Url>("Url", urlSchema);

export default UrlModel;