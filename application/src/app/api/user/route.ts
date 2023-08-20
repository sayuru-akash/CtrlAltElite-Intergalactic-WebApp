import { NextRequest, NextResponse } from "next/server";
import mongoose, { ConnectOptions } from "mongoose";

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
