const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormater');

const reactionSchema = new Schema(
    {

        username: {
            type: String,
            required: true,
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        
    }
);

module.exports = reactionSchema;