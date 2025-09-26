import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function isAuthenticated(req: Request) {
    try {
        const cookieHeader = req.headers.get("cookie") || "";
        const tokenMatch = cookieHeader.match(/(?:^|;\s*)token=([^;]+)/);
        const token = tokenMatch ? tokenMatch[1] : null;

        if (!token) return NextResponse.json({ authenticated: false, error: "Token mancante" }, { status: 401 });
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecret");

        return NextResponse.json({ authenticated: true, user: decoded });
    } catch (err) {
        return NextResponse.json({ authenticated: false, error: "Token non valido o scaduto" }, { status: 401 });
    }
}