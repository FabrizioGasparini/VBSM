"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Volleyball from "../public/images/loghi/lungo-bianco.png"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Squadre", href: "/squadre" },
  //{ name: "Calendario", href: "/calendario" },
  { name: "News", href: "/news" },
  { name: "Allenamenti", href: "/allenamenti" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Sponsor", href: "/sponsor" },
  { name: "Contatti", href: "/contatti" },
  { name: "Area Allenatori", href: "/allenatori" },
]

export function Navigation({background}: {background?: string}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`sticky pt-3 z-50 w-full ${background ? background : "bg-primary"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px- w-fit bg-card border border-border lg:rounded-full shadow-lg">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={Volleyball.src} alt="Volleyball San Martino" className="h-11 w-auto mr-10 lg:min-w-xs" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden w-8">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
