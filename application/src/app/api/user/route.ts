import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/app/db";

export const dynamic = 'force-dynamic'

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
});

let User: any;
try {
  User = mongoose.model("users");
} catch {
  User = mongoose.model("users", userSchema);
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();

    const url = new URL(req.nextUrl);
    const id = url.searchParams.get("id");

    if (id != "" && id != null) {
      const user = await User.findById(id);
      return NextResponse.json(user);
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({
        message: "User does not exist",
      });
    }
    console.log(user);

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting user from the database",
    });
  }
}
