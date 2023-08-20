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

    if (id != "" && id != null) {
      const destination = await Destination.findById(id);
      return NextResponse.json(destination);
    }
    const destinations = await Destination.find();
    return NextResponse.json(destinations);
  } catch (err) {
    return NextResponse.json({
      message: "Error getting destinations from the database",
    });
  }
}

// export async function POST(req: NextRequest, res: NextResponse) {
//   try {
//     await connectToDatabase();
//     const newDestination = new Destination(req.body);
//     const savedDestination = await newDestination.save();
//     return NextResponse.json(savedDestination);
//   } catch (err) {
//     return NextResponse.json({
//       message: "Error adding destination to the database",
//     });
//   }
// }