"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Projects", link: "https://yashkhalkar.vercel.app/#projects" },
    { name: "Portfolio", link: "https://yashkhalkar.vercel.app" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/search")}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              aria-label="Search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <NavbarButton
              variant="secondary"
              onClick={() => window.location.href = "https://yashkhalkar.vercel.app/#contact"}
            >
              Contact Me
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-600 dark:text-neutral-300 block"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "https://yashkhalkar.vercel.app/#contact";
                }}
                variant="primary"
                className="w-full"
              >
                Contact Me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
