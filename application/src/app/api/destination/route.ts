import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/app/db";

export const dynamic = 'force-dynamic'

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