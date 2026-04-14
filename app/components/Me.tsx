import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";

const Me = () => {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="font-bricolage-grotesque text-white text-4xl mb-5 tracking-wide">
        Aryan Kumar
      </h1>
      <p className="text-muted font-mono text-sm font-medium ">
        From India. Junior Developer Advocate at Prisma. Creator of Better T
        Stack, powering 10k+ project scaffolds per month. I love open source,
        TypeScript, and everything AI.
      </p>
      <div className="flex flex-wrap gap-3 text-sm font-medium  font-sans mt-4 ">
        <Link href="https://github.com/Aryanshu919" target="_blank" className="text-vague-keyword hover:text-vague-hint">
          Github
        </Link>
        <Link href="mailto:aryanshu919@gmail.com" target="_blank"  className="text-vague-keyword hover:text-vague-hint">
          Email
        </Link>
        <Link href="https://www.linkedin.com/in/aryan-kumar-87504821a/?skipRedirect=true" target="_blank" className="text-vague-keyword hover:text-vague-hint">
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
