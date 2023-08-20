import { NextRequest, NextResponse } from "next/server";
import mongoose, { ConnectOptions } from "mongoose";

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

const uri: string =
  process.env.MONGODB_URI || "mongodb://localhost:27017/intergalactic-db";
let dbConnection: any;

async function connectToDatabase() {
  if (!dbConnection) {
    dbConnection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const data = await req.json();
    //check if user exists
    const existingUser = await User.findOne({ email: data.email });
    if (!existingUser) {
      return NextResponse.json({
        message: "User does not exist",
      });
    }
    // check if password matches
    if (existingUser.password != data.password) {
      return NextResponse.json({
        message: "Password does not match",
      });
    } else {
      const uid = existingUser._id;
      return NextResponse.json({ id: uid });
    }
  } catch (err) {
    return NextResponse.json({
      message: "Error adding user to the database",
    });
  }
}
