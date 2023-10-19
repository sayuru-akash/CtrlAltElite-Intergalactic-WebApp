import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/app/db";

export const dynamic = 'force-dynamic'

const reservationSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  uin: String,
  residency: String,
  destination_id: String,
  mode_id: String,
  user_id: String,
  departure_date: String,
  passengers: Number,
  total: Number,
  status: String,
});

let Reservation: any;
try {
  Reservation = mongoose.model("reservations");
} catch {
  Reservation = mongoose.model("reservations", reservationSchema);
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const url = new URL(req.nextUrl);
    const id = url.searchParams.get("id");

    const reservations = await Reservation.find({ user_id: id });
    return NextResponse.json(reservations);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting reservations from the database",
    });
  }
}
