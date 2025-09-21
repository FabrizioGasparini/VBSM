import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    let body;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ success: false, error: "Body non valido" }, { status: 400 });
    }

    const { username, password } = body;

    if (username === "admin" && password === "vbsm2025") {
        const token = jwt.sign({ username }, process.env.JWT_SECRET || "supersecret", { expiresIn: "1h" });

        const response = NextResponse.json({ success: true, token });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60,
            path: "/",
        });

        return response;
    }

    return NextResponse.json({ success: false, error: "Credenziali non valide" }, { status: 401 });
}
