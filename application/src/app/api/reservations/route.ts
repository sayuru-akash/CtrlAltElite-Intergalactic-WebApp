import { NextRequest, NextResponse } from "next/server";
import mongoose, { ConnectOptions } from "mongoose";

const reservationSchema = new mongoose.Schema({
  destination_id: String,
  mode_id: String,
  user_id: String,
  departure_date: String,
  passengers: Number,
  price: Number,
  status: String,
});

let Reservation: any;
try {
  Reservation = mongoose.model("reservations");
} catch {
  Reservation = mongoose.model("reservations", reservationSchema);
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

    const reservations = await Reservation.find({ user_id: id });
    return NextResponse.json(reservations);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting reservations from the database",
    });
  }
}