import { NextRequest, NextResponse } from "next/server";
import mongoose, { ConnectOptions } from "mongoose";

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

const checkoutSchema = new mongoose.Schema({
  destination_id: String,
  mode_id: String,
  user_id: String,
  departure_date: String,
  passengers: Number,
});

let Checkout: any;
try {
  Checkout = mongoose.model("checkouts");
} catch {
  Checkout = mongoose.model("checkouts", checkoutSchema);
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

    const newReservation = await new Reservation(data);
    newReservation.status = "placed";
    const savedReservation = await newReservation.save();

    await Checkout.deleteMany({ user_id: newReservation.user_id });
    return NextResponse.json({
      message: "Booking confirmed",
      id: savedReservation._id,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error posting booking to the database",
      error: err,
    });
  }
}
