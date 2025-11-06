"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Home, Users, GraduationCap, Menu, X, ChevronDown, Image } from "lucide-react";

export const metadata = {
  title: "Az-Zahrah Islamic School",
  description: "School Website",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teachersDropdownOpen, setTeachersDropdownOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);

  // helper to check active menu
  const isActive = (path) => pathname === path;

  return (
    <html lang="en">
      <body className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FAF5FF 0%, #F0FDF4 50%, #EFF6FF 100%)' }}>
        {/* HEADER */}
        <header className="sticky top-0 z-50 clay-shadow" style={{ 
          background: 'linear-gradient(135deg, rgba(250, 245, 255, 0.95) 0%, rgba(240, 253, 244, 0.95) 100%)',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">

              {/* Logo */}
              <Link href="/Homepage" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-14 h-14 clay-shadow rounded-3xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <GraduationCap className="w-7 h-7 text-purple-700" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-purple-900">Az-Zahrah</h1>
                  <p className="text-xs text-purple-600">Islamic Elementary School</p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-2">
                {/* Home */}
                <Link
                  href="/Homepage"
                  className={`px-6 py-3 rounded-2xl transition-all duration-300 ${
                    isActive("/Homepage") ? "clay-inset text-purple-900" : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                </Link>

                {/* Teachers */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setTeachersDropdownOpen(true)}
                    onMouseLeave={() => setTeachersDropdownOpen(false)}
                    className={`px-6 py-3 rounded-2xl flex items-center gap-2 ${
                      isActive("/Teachers") ? "clay-inset text-purple-900" : "text-purple-700 hover:text-purple-900"
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Teachers</span>
                    <ChevronDown className={`w-4 h-4 ${teachersDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {teachersDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 clay-shadow rounded-2xl p-2 dropdown-enter">
                      <Link href="/Teachers" className="block px-4 py-3 rounded-xl hover:clay-inset text-purple-700 hover:text-purple-900">
                        Our Teachers
                      </Link>
                      <Link href="/Teachers?section=departments" className="block px-4 py-3 rounded-xl hover:clay-inset text-purple-700 hover:text-purple-900">
                        Departments
                      </Link>
                    </div>
                  )}
                </div>

                {/* Students */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setStudentsDropdownOpen(true)}
                    onMouseLeave={() => setStudentsDropdownOpen(false)}
                    className={`px-6 py-3 rounded-2xl flex items-center gap-2 ${
                      isActive("/Students") ? "clay-inset text-purple-900" : "text-purple-700 hover:text-purple-900"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Students</span>
                    <ChevronDown className={`w-4 h-4 ${studentsDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {studentsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 clay-shadow rounded-2xl p-2 dropdown-enter">
                      <Link href="/Students" className="block px-4 py-3 rounded-xl hover:clay-inset">
                        Student Life
                      </Link>
                      <Link href="/Students?section=activities" className="block px-4 py-3 rounded-xl hover:clay-inset">
                        Activities
                      </Link>
                      <Link href="/Students?section=achievements" className="block px-4 py-3 rounded-xl hover:clay-inset">
                        Achievements
                      </Link>
                    </div>
                  )}
                </div>

                {/* Gallery */}
                <Link
                  href="/Gallery"
                  className={`px-6 py-3 rounded-2xl transition-all duration-300 ${
                    isActive("/Gallery") ? "clay-inset text-purple-900" : "text-purple-700 hover:text-purple-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    <span>Gallery</span>
                  </div>
                </Link>
              </nav>

              {/* Mobile button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-3 clay-shadow-hover text-purple-700">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="min-h-[calc(100vh-200px)]">{children}</main>

        {/* Footer */}
        <footer className="mt-20 py-12 clay-shadow">
          <div className="text-center text-purple-600 text-sm">
            © 2025 Az-Zahrah Islamic Elementary School. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
