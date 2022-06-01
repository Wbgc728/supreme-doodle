const { Schema, Types, now } = require('mongoose');

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
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => new Date().toLocaleString()
      // * Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);


// const Reaction = model('reaction', reactionSchema);


module.exports = reactionSchema;
