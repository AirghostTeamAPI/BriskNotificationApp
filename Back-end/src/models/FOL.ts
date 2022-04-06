import { model, Schema } from "mongoose";

const FOLSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  equipment: {
    type: String,
    required: true
  },
  applicability: {
    type: String
  },
  issue_description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  issue_date: {
    type: Date,
    required: true,
  },
  revision_number: {
    type: Number,
  },
  revision_date: {
    type: Date,
  },
  remarks: {
    type: String,
  },
  keywords: {
    type: String,
    required: true,
  },
});

const FOL = model("FOL", FOLSchema);

export default FOL;
