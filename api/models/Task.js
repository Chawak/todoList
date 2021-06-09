'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transform = (doc, ret) => {
  delete ret.__v;
  delete ret.updatedAt;
};

const schema = new Schema(
  {
    name: { type: String },
    urgentLevel: { type: Number },
    dueDate:{ type:Date },
    taskStatus: {type:String}
  },
  {
    timestamps: true,
    collection: 'tasks',
    toObject: { transform: transform },
    toJSON: { transform: transform },
  },
);

const Task = mongoose.model('Task', schema);

module.exports = Task;
