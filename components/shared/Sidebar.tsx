"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

export const Sidebar = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/favicon.png" alt="Logo" width={40} height={40} />
          <p>
            <span className="text-fuchsia-600 font-bold">Pix</span>
            <span className="text-fuchsia-800">Enhance</span>
          </p>
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = pathname === link.route;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "gradient-bg text-white" : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={isActive ? "brightness-200" : ""}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = pathname === link.route;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive ? "gradient-bg text-white" : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={isActive ? "brightness-200" : ""}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button gradient-bg bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};
