"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Filter, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export function Combobox1({
    items,
    icon: Icon,
    placeholder,

}: {
    items: { value: string; label: string }[]
    placeholder: string
    icon: React.ElementType
}) {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="gap-3.5 text-stone-500 cursor-pointer"
                >
                    {Icon && <Icon className="opacity-70" />}
                    {value ? items.find((item) => item.value === value)?.label : placeholder}
                    <Filter className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {items.map(item => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {item.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
