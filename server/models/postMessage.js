import mongoose from 'mongoose';
//Mongoose schema
//A Mongoose schema is a json object which defines the structure of the document, default values, validators, etc.,
// whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
