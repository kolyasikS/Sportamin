import { NextResponse } from "next/server";
import {func} from "joi";

export default async function stackMiddlewares(
    req, res,
    functions = []
) {
    for (let i = 0; i < functions.length; i++) {
        await functions[i](req, res);
    }
}