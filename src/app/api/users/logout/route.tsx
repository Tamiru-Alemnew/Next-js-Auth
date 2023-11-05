import { NextResponse } from "next/server"
export default function GET() {
    try {
        
    } catch (error:any) {
        console.log(error)
        NextResponse.json({error : error})
    }
}

