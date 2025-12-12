import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        if (!email) {
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 400 }
            )
        }

        const { error } = await supabase
            .from("waitlist")
            .insert({ email });

        if (error) {
            if (error.code === "23505") {
                return NextResponse.json(
                    { error: "Email already subscribed" },
                    { status: 200 }
                )
            }

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: "Successfully added to waitlist" },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        )
    }
}