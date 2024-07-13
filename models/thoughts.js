const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
    },
    thoughtDescription: {
      type: String,
      default: true,
    },
    // startDate: {
    //   type: Date,
    //   default: Date.now(),
    // },
    // endDate: {
    //   type: Date,
    //   // Sets a default value of 12 weeks from now
    //   default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    // },
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'student',
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thought = model('thought', thoughtSchema);

module.exports = thought;
