"use client";
import { cn } from "@/lib/utils"
import { BookCheck, NotepadText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase/client"
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";
import { CountingNumber } from "./animate-ui/primitives/texts/counting-number";

export function WaitListForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    async function submit(e: any) {
        e.preventDefault()
        setLoading(true)

        try {

            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })

            const data = await res.json()
            if (data.error) {
                toast.error(data.error)
            }
            if (data.message) {
                toast.success(data.message)
            }
            setEmail("")

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome to waitlist</CardTitle>
                    <CardDescription>
                        Book the first slots to get early access to our features
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Field>
                            <Field>
                                {loading ? (
                                    <Button disabled>
                                        <Spinner></Spinner>
                                    </Button>
                                ) : (
                                    <Button type="submit">
                                        <NotepadText></NotepadText>
                                        Book Now
                                    </Button>
                                )}
                            </Field>
                            <FieldDescription className="text-center">
                                <CountingNumber number={700}></CountingNumber> users already booked!!
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
