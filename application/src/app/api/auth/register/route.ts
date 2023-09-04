import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connectToDatabase from "@/app/db";

export const dynamic = 'force-dynamic'

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

let User: any;
try {
  User = mongoose.model("users");
} catch {
  User = mongoose.model("users", userSchema);
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const data = await req.json();
    //check if user exists
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
      });
    }
    //hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    const user = await User.create(data);
    return NextResponse.json({ id: user._id });
  } catch (err) {
    return NextResponse.json({
      message: "Error adding user to the database",
    });
  }
}
