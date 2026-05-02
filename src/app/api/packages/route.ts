import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { PackageModel } from "@/models/Package";

export async function GET() {
  try {
    await connectToDatabase();
    const packages = await PackageModel.find({}).lean();
    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const newPackage = new PackageModel({
      ...body,
      id: body.id || new Date().getTime().toString(),
    });

    await newPackage.save();
    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create package" },
      { status: 500 }
    );
  }
}
