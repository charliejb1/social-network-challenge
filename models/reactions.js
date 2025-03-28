const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: 'Unnamed reaction',
    },

    username: {
      type: String,
      required: true,

    },
 
  createdAt: {
  type: Date,
  default: Date.now,
},
  },
{
  toJSON: {
    getters: true,
    },
  id: true,
  }
);

module.exports = reactionSchema;
