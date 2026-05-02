import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { PackageModel } from "@/models/Package";
import { packages } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    // Clear existing packages
    await PackageModel.deleteMany({});

    // Insert all packages from data.ts
    const result = await PackageModel.insertMany(packages);

    return NextResponse.json(
      {
        message: `Successfully seeded ${result.length} packages to MongoDB`,
        count: result.length,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to seed database", details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      message:
        "To seed the database with initial packages, send a POST request to this endpoint",
    },
    { status: 200 }
  );
}
