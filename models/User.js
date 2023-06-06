const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: false },
    isAdmin: { type: Boolean, required: false },
    isAgent: { type: Boolean, required: false },
    skills: { type: Array, required: false },
    profile: { type: String, required: true, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToN3g0SIPyPAnFTvUiA1ctBjgLxpKOCQwvt-_B9NOZ&s" },
   
},{timestamps: true});

module.exports =mongoose.model("User", UserSchema);