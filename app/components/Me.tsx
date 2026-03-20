import Link from "next/link";
import React from "react";

const Me = () => {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="font-josefin-sans text-white text-4xl mb-5 tracking-wide">
        Aryan Kumar
      </h1>
      <p className="text-muted font-sans text-base/6  font-medium ">
        From India. Junior Developer Advocate at Prisma. Creator of Better T
        Stack, powering 10k+ project scaffolds per month. I love open source,
        TypeScript, and everything AI.
      </p>
      <div className="flex flex-wrap gap-3 text-sm font-medium  font-sans mt-4 ">
        <Link href="/github" target="_blank" className="text-vague-keyword hover:text-vague-hint">
          Github
        </Link>
        <Link href="/email" target="_blank"  className="text-vague-keyword hover:text-vague-hint">
          Email
        </Link>
        <Link href="/Linkedin" target="_blank" className="text-vague-keyword hover:text-vague-hint">
          Linkedin
        </Link>
         <Link href="https://x.com/iamaryanrajputt" target="_blank" className="text-vague-keyword hover:text-vague-hint">
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default Me;
