import {NextResponse} from "next/server";

// eslint-disable-next-line no-unused-vars
export function middleware(request: Request) {
    return NextResponse.next();
}