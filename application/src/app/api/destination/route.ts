import { NextRequest, NextResponse } from "next/server";
import mongoose, { ConnectOptions } from "mongoose";

const destinationSchema = new mongoose.Schema({
  destination_name: String,
  destination_tagline: String,
  departure_name: String,
  destination_cover_img: String,
  description: String,
  culture: String,
  weather: String,
});

let Destination: any;
try {
  Destination = mongoose.model("destinations");
} catch {
  Destination = mongoose.model("destinations", destinationSchema);
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
    const destination = await Destination.findById(id);
    return NextResponse.json(destination);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting destinations from the database",
    });
  }
}