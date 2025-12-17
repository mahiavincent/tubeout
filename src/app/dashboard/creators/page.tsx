"use client";
import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { SearchForm } from "@/components/search-form"
import { IconFilter, IconGlobe, IconSort09 } from "@tabler/icons-react"
import { Filter, Globe, Search } from "lucide-react"
import { Select } from "@radix-ui/react-select"
import { Combobox1 } from "./components/Combobox"
import { Input } from "@/components/ui/input";

export default function Page() {
  const items = [
    { value: 'All countries', label: 'all' }
  ]
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader headerTitle="Content Creators" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="mx-4.5 text-sm font-bold mb-0">Find content creators</div>
              <div className="flex items-center gap-2 mx-4.5">
                <div className="flex items-center border-1 border-neutral rounded-lg px-2 w-[100%]">
                  <Search size={18}></Search>
                  <Input type="text" className="border-none outline-0 text-[13px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-neutral-400 focus-visible:outline-none bg-background focus-visible:bg-transparent !bg-transparent" placeholder="Enter your business niche"></Input>
                </div>
                <Combobox1 items={items} placeholder="Any country" icon={Globe}></Combobox1>
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
