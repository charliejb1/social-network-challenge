const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');
const thoughtSchema = require('./thoughts');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },

    email: {
      type: String,
      unique: true,
      required: true,
      
    },

    thoughts: [thoughtSchema],

    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

const User = model('student', usersSchema);

module.exports = User;
