"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/favicon.png" alt="Logo" width={40} height={40} />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="" />

          <Sheet>
            <SheetTrigger>
              <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <p className="-translate-y-2 mb-2">
                  <Image src="/favicon.png" alt="Logo" width={40} height={40} />
                </p>
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.route;
                    return (
                      <li
                        key={link.route}
                        className={` ${
                          isActive ? "text-fuchsia-600" : "text-dark-700"
                        } p-18 whitespace-nowrap flex`}
                      >
                        <Link href={link.route} className="sidebar-link">
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button gradient-bg bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};
