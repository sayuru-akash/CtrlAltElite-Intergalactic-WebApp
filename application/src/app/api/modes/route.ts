import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/app/db";

export const dynamic = 'force-dynamic'

const modeSchema = new mongoose.Schema({
    destination_id: String,
    name: String,
    image: String,
    travel_time: String,
    includes: String,
    price: Number,
    max_capacity: Number,
});

let Mode: any;
try {
  Mode = mongoose.model("modes");
} catch {
  Mode = mongoose.model("modes", modeSchema);
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const url = new URL(req.nextUrl);
    const id = url.searchParams.get("id");
    const mode = await Mode.find({destination_id: id});
    return NextResponse.json(mode);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting modes from the database",
    });
  }
}