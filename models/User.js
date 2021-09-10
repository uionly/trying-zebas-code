const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        recipe: {
            type: ObjectId,
            ref: "Recipe",
            required: true
        }
    },
    { timestamps: true }
);

module.exports = User = mongoose.model("users", UserSchema);
