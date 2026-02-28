import { Link } from "wouter";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-bold mb-4">Chiguru KIDS</h3>
            <p className="text-sm leading-relaxed">
              Nurturing young minds with care, creativity, and compassion. Building the foundation for lifelong learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:opacity-80 transition-opacity">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:opacity-80 transition-opacity">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="hover:opacity-80 transition-opacity">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="hover:opacity-80 transition-opacity">Gallery</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+91-9999999999</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>info@chigurukids.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground opacity-30 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; 2024 Chiguru KIDS Preschool. All rights reserved.</p>
          {/* <p className="mt-2">Designed with ❤️ for early childhood education</p> */}
        </div>
      </div>
    </footer>
  );
}
