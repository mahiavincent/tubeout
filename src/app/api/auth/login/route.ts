import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }
        return NextResponse.json(
            { message: "Login successfully." },
            { status: 201 }
        )
    } catch (error) {
        console.error(error)
    }
}