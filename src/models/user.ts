import mongoose from "mongoose";

export interface IUser {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
