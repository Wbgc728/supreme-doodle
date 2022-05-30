const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./thought');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // match: 
        },
        
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'user',
            }
        ],

    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    },

);

// Create a virtual property `friendCount` that gets the amount of friends per user

userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    });

    // Initialize our User model
const User = model('user', userSchema);

module.exports = User;
