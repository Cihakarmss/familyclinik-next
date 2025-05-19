import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <Image src="/familyclinic.jpeg" alt="Logo" width={80} height={80} />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Updates</a>
        <a href="/login">More Info</a>
        <a href="/register">Contact</a>
        <button>Book Appointment</button>
        <button><Image src="/phone-call.png" alt="Logo" width={15} height={15} /></button>
        <button><Image src="/search.png" alt="Logo" width={15} height={15} /></button>
      </div>
    </nav>
  );
}

export default Nav;
