import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation(); // current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Activities", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    // exact match for home, startsWith for others
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-secondary transition-colors">
            <img
              className="chiguru-logo h-12"
              src="/img/logo-school.png"
              alt="Chiguru Kids Logo"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link key={link.name} href={link.href}>
                <a
                  className={`transition-all duration-300 pb-1
                    ${
                      active
                        ? "text-primary font-bold border-b-2 border-primary"
                        : "text-foreground font-medium hover:text-primary"
                    }`}
                >
                  {link.name}
                </a>
              </Link>
            );
          })}

          <Link href="/contact">
            <a className="btn-primary">Enroll Now</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link key={link.name} href={link.href}>
                  <a
                    className={`transition-colors
                      ${
                        active
                          ? "text-primary font-bold"
                          : "text-foreground font-medium hover:text-primary"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              );
            })}

            <Link href="/contact">
              <a
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}