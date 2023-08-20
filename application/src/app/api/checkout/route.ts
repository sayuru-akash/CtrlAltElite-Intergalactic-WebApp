import { NextRequest, NextResponse } from "next/server";
import mongoose, { ConnectOptions } from "mongoose";

const checkoutSchema = new mongoose.Schema({
  destination_id: String,
  mode_id: String,
  user_id: String,
  departure_date: String,
  passengers: Number
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

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();

    const url = new URL(req.nextUrl);

    const checkoutId = url.searchParams.get("id");

    if (checkoutId != "" && checkoutId != null) {
      const checkoutData = await Checkout.findById(checkoutId);
      return NextResponse.json(checkoutData);
    } else {
      const destination_id = url.searchParams.get("destination_id");
      const mode_id = url.searchParams.get("mode_id");
      const user_id = url.searchParams.get("user_id");
      const departure_date = url.searchParams.get("departure_date");
      const passengers = url.searchParams.get("passengers");

      // find whether a checkout exists for the user
      const checkout = await Checkout.find({ user_id: user_id });
      let id = "";

      if (checkout.length > 0) {
        const updatedcheckout = await Checkout.findOneAndUpdate(
          { user_id: user_id },
          {
            destination_id: destination_id,
            mode_id: mode_id,
            departure_date: departure_date,
            passengers: passengers,
          }
        );
        updatedcheckout.save();
        id = updatedcheckout._id;
      } else {
        const newcheckout = await Checkout.create({
          destination_id: destination_id,
          mode_id: mode_id,
          user_id: user_id,
          departure_date: departure_date,
          passengers: passengers,
        });
        newcheckout.save();

        id = newcheckout._id;
      }
      return NextResponse.json({
        status: "success",
        id: id,
        redirect_url: "/checkout?id=" + id,
      });
    }
  } catch (err) {
    return NextResponse.json({
      message: "Error posting reservation to the database",
      error: err,
    });
  }
}
