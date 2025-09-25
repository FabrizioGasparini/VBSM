// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // recupera il token dai cookie
    const token = req.cookies.get("token")?.value;

    if (req.nextUrl.pathname.startsWith("/nextapi")) {
        return;
    }

    // se l'utente prova ad accedere alla pagina di login `/login` con token → redirect alla home
    if (req.nextUrl.pathname == "/login") {
        if (token) return NextResponse.redirect(new URL("/", req.url));
        else return NextResponse.next();
    }

    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    return NextResponse.next();
}

// tutti i percorsi che devono essere protetti tranne /api/*
export const config = {
    matcher: ["/", "/((?!api|nextapi|_next/static|_next/image|favicon.ico).*)"],
};
