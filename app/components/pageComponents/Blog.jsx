"use client";

import { useEffect } from "react";
import { comfortaa } from "../../utils/fonts";
import Articles from "../sections/Articles";

// px-4 md:px-8 lg:px-14

const BlogPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fafafa";
  }, []);

  return (
    <>
      {/* Top */}
      <section
        data-aos="fade-up"
        className="mb-10 mt-24 px-4 md:mt-28 md:px-8 lg:px-14"
      >
        <h1
          className={`${comfortaa.variable} mb-0.5 font-comfortaa text-2xl font-bold text-black `}
        >
          Blog
        </h1>
        <p className="text-xs text-grey md:text-base">
          Stay up to date with our music-centric articles.
        </p>
      </section>

      {/* Articles section */}
      <Articles />

      {/* To create space between the "absolute" button and the footer section */}
      <div className="mb-4 mt-10 h-1"> </div>
    </>
  );
};

export default BlogPage;
