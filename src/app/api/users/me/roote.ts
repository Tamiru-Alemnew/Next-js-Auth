import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import getUserByToken from "@/helpers/getUserByToken";

export async function GET(request: NextRequest) {
    try {
        const userId = await getUserByToken(request);
        const user = await User.findById(userId).select("-password");
        return NextResponse.json({
            message: "User found",
            user,
        })
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: error.status });
    }
}