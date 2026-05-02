import { cookies } from "next/headers";
import crypto from "crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function setAdminToken(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getAdminToken() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_token")?.value;
}

export async function clearAdminToken() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
}

export async function verifyPassword(password: string) {
  return password === ADMIN_PASSWORD;
}

export async function isAdminAuthenticated() {
  const token = await getAdminToken();
  return !!token;
}
