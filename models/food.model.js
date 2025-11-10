import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
