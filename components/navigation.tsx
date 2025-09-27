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
  //{ name: "Sponsor", href: "/sponsor" },
  { name: "Contatti", href: "/contatti" },
  //{ name: "Area Allenatori", href: "/allenatori" },
]

export function Navigation({ background }: { background?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`sticky pt-3 z-50 w-full ${background ? background : "bg-primary"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-fit lg:bg-card bg-transparent lg:border border-border lg:rounded-full lg:shadow-lg">
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
          <>
            <style>{`body { overflow: hidden !important; }`}</style>
            <div className="lg:hidden fixed inset-0 z-50 flex justify-end bg-background/80">
              <div className="flex-1" onClick={() => setIsOpen(false)} />
              <div className="w-60 bg-card border-l border-border h-full flex flex-col py-8 px-6 shadow-2xl rounded-l-3xl animate-slide-in-right">
                <div className="flex justify-end mb-8">
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-foreground hover:text-primary">
                    <X className="h-7 w-7" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-0">
                  {navigationItems.map((item, idx) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-5 py-3 rounded-xl text-lg font-semibold text-card-foreground hover:text-primary hover:bg-muted transition-colors duration-200 text-right"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {idx < navigationItems.length - 1 && (
                        <hr className="border-t border-border my-1" />
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
