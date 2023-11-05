import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export default async function getUserByToken(request: NextRequest) { 
   
    try {
        const token:any = request.cookies.get("token") || "";
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error:any) {
        throw new Error(error.message);
    }

}