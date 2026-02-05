"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      submenu: [
        { name: "Solar Design Services", href: "/services/solar-design-service" },
        { name: "Roofing Design Services", href: "/services/roofing-design-service" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
  ];

  const isDarkHeader = [
    "/privacy-policy",
    "/terms-of-service",
    "/refund-policy",
  ].includes(pathname);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${isDarkHeader ? styles.darkHeader : ""}`}
    >
      <div className={`container ${styles.navContainer}`}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/images/logo-v2.png"
            alt="World Cad Design LLP Logo"
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            link.submenu ? (
              <div key={link.name} className={styles.dropdown}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
                >
                  {link.name} ▾
                  {pathname.startsWith(link.href) && (
                    <div className={styles.activeIndicator} />
                  )}
                </Link>
                <div className={styles.dropdownMenu}>
                  {link.submenu.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      href={subItem.href} 
                      className={styles.dropdownItem}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.name}
              {pathname === link.href && (
                <div className={styles.activeIndicator} />
              )}
            </Link>
            )
          ))}
          <a
            href="tel:+919958060424"
            className="btn btn-outline"
            style={{
              marginRight: "0px",
              padding: "6px 12px",
              fontSize: "14px",
            }}
          >
            Call Us Now
          </a>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              fontSize: "14px",
              padding: "8px 16px",
              marginRight: "0px",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.activeMobile : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div>
                <a
                  href="tel:+919958060424"
                  className="btn btn-outline"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call Us Now
                </a>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "10px" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
