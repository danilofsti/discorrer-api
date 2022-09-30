import mongoose from 'mongoose';
const { Schema } = mongoose;

const RunSchema = new Schema({
  name : String,
  athlete: mongoose.Types.ObjectId,
  distance : Number,
  elapsed_time : Number,
  start_date_local : { type: Date, default: Date.now },
  is_imported: Boolean,
  calories : Number,
  mood: String,
  type: String,
  where: String,
  pre: [String],
  during: [String],
  post: [String],
  jornal:String
}, { collection: "runs" }
);

export default RunSchema;