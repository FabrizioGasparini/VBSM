import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const session = (await cookies()).get("session");

    if (session?.value === "authenticated") {
        return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false });
}
