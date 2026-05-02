import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { PackageModel } from "@/models/Package";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const pkg = await PackageModel.findOne({ id }).lean();

    if (!pkg) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(pkg);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch package" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await request.json();

    const updatedPackage = await PackageModel.findOneAndUpdate(
      { id },
      { ...body, id },
      { new: true }
    );

    if (!updatedPackage) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPackage);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update package" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const deletedPackage = await PackageModel.findOneAndDelete({ id });

    if (!deletedPackage) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(deletedPackage);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete package" },
      { status: 500 }
    );
  }
}
