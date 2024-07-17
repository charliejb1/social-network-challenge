const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      default: true,
      maxlength: 280,
      minlength: 1,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    reactions: [reactionSchema],
    
  },
  {
    toJSON: {
      getters: true,
    },
  id: true,
  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })

const thought = model('thought', thoughtSchema);

module.exports = thought;
