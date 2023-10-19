import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connectToDatabase from "@/app/db";

export const dynamic = "force-dynamic";

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
    const existingUser = await User.findOne({
      email: data.email,
    });
    if (!existingUser) {
      return NextResponse.json({
        message: "User mismatch",
      });
    }

    // compare passwords
    const passwordMatch = await bcrypt.compare(
      data.password,
      existingUser.password
    );
    if (!passwordMatch) {
      return NextResponse.json({
        message: "Password mismatch",
      });
    }

    const uid = existingUser._id;
    return NextResponse.json({ id: uid });
  } catch (err) {
    return NextResponse.json({
      message: "Error adding user to the database",
    });
  }
}
