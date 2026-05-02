import { NextRequest, NextResponse } from "next/server";
import { clearAdminToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    await clearAdminToken();
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Logout failed" },
      { status: 500 }
    );
  }
}
