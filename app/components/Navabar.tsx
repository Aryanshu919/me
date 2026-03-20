"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navabar = () => {
  const [isSelected, setIsSelected] = useState("home");
  return (
    <header className="pt-4">
      <nav className="flex flex-row gap-4 text-sm font-semibold tracking-[0.05em] font-mono">
        <Link className={`hover:text-vague-hint text-vague-${isSelected === "home" ? "keyword": "muted"}`} href="/" onClick={() => setIsSelected("home")}>
          home
        </Link>
       <Link className={`hover:text-vague-hint text-vague-${isSelected === "blog" ? "keyword": "muted"}`} href="/blog" onClick={() => setIsSelected("blog")}>
          blog
        </Link>
<Link className={`hover:text-vague-hint text-vague-${isSelected === "projects" ? "keyword": "muted"}`} href="/projects" onClick={() => setIsSelected("projects")}>
          projects
        </Link>
      </nav>
    </header>
  );
};

export default Navabar;
