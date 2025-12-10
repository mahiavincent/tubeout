"use client";
import { AppSidebar } from "@/components/app-sidebar"
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Globe, Mail, Search, Users2 } from 'lucide-react'
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { toast } from "sonner"
import { EmptyDemo } from "./components/Empty";
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number"
import Header from "@/components/Header"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select"
import { SelectIcon, SelectValue } from "@radix-ui/react-select"
import { Combobox } from "./components/Combobox"

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
]


export default function Page() {
    useEffect(() => {
        toast.success('Welcome to TubeOut', { position: 'top-center' })
    }, [])
    return (
        <div className="[--header-height:calc(--spacing(14))] overflow-y-scroll scrollbar-hide">
            <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col gap-4 p-4 relative">
                            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                                <div className="rounded-xl">
                                    <Card className="bg-[var(--card-bg)] transition-all hover:shadow-lg">
                                        <CardHeader>
                                            <Search size={30} className="border-1 rounded-sm border-stone-300 p-1" color="gray" ></Search>
                                            <CardTitle className="text-3xl text-center">
                                                <CountingNumber number={12}></CountingNumber>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base text-sm">Searches Today</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="rounded-xl">
                                    <Card className="bg-[var(--card-bg)] transition-all hover:shadow-lg">
                                        <CardHeader>
                                            <Users2 size={30} className="border-1 rounded-sm border-stone-300 p-1" color="gray"></Users2>
                                            <CardTitle className="text-3xl text-center">
                                                <CountingNumber number={1248}></CountingNumber>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base text-sm">Channels Found</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="rounded-xl">
                                    <Card className="bg-[var(--card-bg)] transition-all hover:shadow-lg">
                                        <CardHeader>
                                            <Mail size={30} className="border-1 rounded-sm border-stone-300 p-1" color="gray"></Mail>
                                            <CardTitle className="text-3xl text-center">
                                                <CountingNumber number={856}></CountingNumber>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base text-sm">Emails Extracted</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="rounded-xl">
                                    <Card className="bg-[var(--card-bg)] transition-all hover:shadow-lg">
                                        <CardHeader>
                                            <Activity size={30} className="border-1 rounded-sm border-stone-300 p-1" color="gray"></Activity>
                                            <CardTitle className="text-3xl text-center">
                                                <CountingNumber decimalPlaces={1} number={68.5}></CountingNumber>%
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base text-sm">Success Rate</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div className="border-1 border-stone-200 dark:border-stone-200/10 flex-1 rounded-xl md:h-[20%] p-3 overflow-y-auto">
                                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Find Creators</h4>
                                <div className="flex gap-3 flex-col-reverse mt-2 w-auto md:flex-row">
                                    <div className="flex items-center border-1 border-stone-200 dark:border-stone-200/20 rounded-lg px-3 w-[100%]">
                                        <Search color="gray" size={21} onClick={() => toast.info('Welcome to TubeOut', { position: 'top-center' })}></Search>
                                        <Input className="text-sm dark:bg-neutral shadow-none w-[100%] focus-visible:outline-none focus-visible:ring-0 focus:ring-0 border-0" type="text" placeholder="Search keywords (e.g., 'tech review', 'fitness coach')"></Input>
                                    </div>
                                    <div className="flex items-center gap-2.5 justify-end w-[100%]">
                                        <Combobox
                                            items={frameworks}
                                            icon={Users2}
                                            placeholder="Followers"
                                        ></Combobox>
                                        <Combobox
                                            items={frameworks}
                                            icon={Globe}
                                            placeholder="Country"
                                        ></Combobox>
                                    </div>
                                </div>
                                <EmptyDemo ></EmptyDemo>
                            </div>
                        </div>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}
