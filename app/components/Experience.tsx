import React from "react";

const Experience = () => {
  return (
    <div className="mt-6">
      <h1 className="font-bricolage-grotesque text-white text-3xl mb-5 tracking-wide">
        Experience
      </h1>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium font-bricolage-grotesque">
            Admistay{" "}
            <span className="text-vague-keyword text-xs ">
              {" "}
              ( Full Stack Developer - Hybrid )
            </span>
          </h1>
          <span className="text-vague-keyword text-sm">
            {" "}
            Aug 2025 - Present
          </span>
        </div>
        <div>
          <ol className="list-disc pl-5 text-muted space-y-2 text-sm font-mono">
            <li>
              Designed and implemented a secure email-based login system with
              OTP verification, along with a “Continue with Google (Gmail)”
              authentication option to enable fast and seamless user onboarding.
            </li>
            <li>
              Redesigned and optimized the user profile dashboard to dynamically
              fetch and display personalized user data, improving usability and
              engagement
            </li>
            <li>
              Improved overall SEO performance by implementing server-side
              rendering (SSR) and optimized metadata handling using Next.js,
              resulting in better search visibility and page indexing
            </li>
          </ol>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <h1 className="font-bricolage-grotesque text-lg font-medium">
          LesOrc{" "}
          <span className="text-vague-keyword text-xs ">
            {" "}
            ( Full Stack Intern )
          </span>
        </h1>
        <span className="text-vague-keyword text-sm">
          {" "}
          March 2025 - May 2025
        </span>
      </div>
      <div>
        <ol className="list-disc pl-5 text-muted space-y-2 text-sm font-mono">
          <li>
            Designed and developed full-stack web applications using modern
            frameworks (React, Node.js, Express.js, Postgresql, prisma),
            delivering scalable, maintainable, and user-friendly solutions.
          </li>
          <li>
            Built RESTful APIs and integrated third-party services, ensuring
            smooth communication between front-end and back-end systems with
            robust security measures.
          </li>
          <li>
            Improved application performance and database efficiency by
            implementing indexing, caching strategies, and optimized data
            models.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
