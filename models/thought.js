const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // * Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });


// Initialize our thoughts model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
