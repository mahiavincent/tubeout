'use client';

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    NavbarLogo,
    NavbarButton
} from "@/components/ui/resizable-navbar";

import { useState } from "react";

export default function TopNav() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { name: "Home", link: "/" },
        { name: "Features", link: "#features" },
        { name: "Pricing", link: "#pricing" },
        { name: "Faq", link: "#faq" },
    ];

    return (
        <Navbar className="top-0">
            {/* Desktop Nav */}
            <NavBody>
                <NavbarLogo />

                <NavItems
                    items={items}
                    onItemClick={() => console.log("clicked")}
                />

                <div className="flex items-center gap-2">
                    <NavbarButton variant="secondary" href="/waitlist">
                        Login
                    </NavbarButton>

                    <NavbarButton variant="dark" href="/waitlist">
                        Sign Up
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Nav */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {items.map((item, i) => (
                        <a
                            href={item.link}
                            className="text-lg font-medium"
                            key={i}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    <NavbarButton href="/waitlist" variant="secondary" className="w-full">
                        Login
                    </NavbarButton>

                    <NavbarButton href="/waitlist" variant="dark" className="w-full mt-2">
                        Sign Up
                    </NavbarButton>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
