"use client";

import { useEffect } from "react";
import Image from "next/image";
import { comfortaa } from "../../utils/fonts";
import decibellHero from "../../../public/decibellHero.webp";

// px-4 md:px-8 lg:px-14

const Article = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fafafa";
  }, []);

  return (
    <>
      {/* Top section */}
      <section className="mx-auto mt-24 block max-w-xl px-7 md:mt-32 lg:mt-36 lg:max-w-3xl">
        <h1
          className={`${comfortaa.variable} mb-4 font-comfortaa text-2xl font-bold text-black `}
        >
          Decibell - The must use platform for artists.
        </h1>
        <div className="flex items-center gap-2 text-xs text-grey md:tracking-wider lg:text-sm">
          <div className="relative h-9 w-9 rounded-full bg-darkBlue">
            <Image
              src="/omar.webp"
              alt="author image"
              fill={true}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                // borderRadius: "9999px",
              }}
              sizes="100px"
              quality={100}
            />
          </div>
          <div className="flex gap-2">
            <h4>Malik Yousef</h4>
            <span>|</span>
            <h4>25th November, 2023</h4>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <div className="relative mx-auto my-10 block max-w-4xl px-5 md:px-8 lg:my-14">
        <Image
          src={decibellHero}
          alt="decibell hero image"
          placeholder="blur"
          priority={true}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          sizes="100vw , (max-width: 1024px) 896px"
          quality={100}
        />
      </div>

      {/* Article section */}
      <article className="mx-auto flex max-w-xl flex-col items-start gap-6 px-7 text-sm leading-7 tracking-wider text-black lg:max-w-3xl lg:text-base lg:leading-8">
        <p>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin.
        </p>

        <p>
          He lay on his armour-like back, and if he lifted his head a little he
          could see his brown belly, slightly domed and divided by arches into
          stiff sections.
        </p>

        <p>
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment.
        </p>

        <p>
          His many legs, pitifully thin compared with the size of the rest of
          him, waved about helplessly as he looked. "What's happened to me? " he
          thought. It wasn't a dream. <br /> His room, a proper human room
          although a little too small, lay peacefully between its four familiar
          walls. A collection of textile samples lay spread out on the table -
          Samsa was a travelling salesman - and above it there hung a picture
          that he had recently cut out of an illustrated magazine and housed in
          a nice, gilded frame.
        </p>

        <p>
          It showed a lady fitted out with a fur hat and fur boa who sat
          upright, raising a heavy fur muff that covered the whole of her lower
          arm towards the viewer.
        </p>

        <p>
          Gregor then turned to look out the window at the dull weather. Drops
          of rain could be heard hitting the pane, which made him feel quite
          sad.
        </p>

        <p>
          "How about if I sleep a little bit longer and forget all this
          nonsense", he thought, but that was something he was unable to do
          because he was used to sleeping on his right, and in his present state
          couldn't get into that position.
        </p>

        <p>
          However hard he threw himself onto his right, he always rolled back to
          where he was.
        </p>

        <p>
          He must have tried it a hundred times, shut his eyes so that he
          wouldn't have to look at the floundering legs, and only stopped when
          he began to feel a mild, dull pain there that he had never felt
          before.
        </p>
      </article>

      {/* Author and Comments section */}
      <section className="mx-auto mt-14 block max-w-xl px-7 lg:max-w-3xl">
        <div className="mt-6 flex gap-2 lg:gap-3">
          <div className="relative h-10 w-10 flex-shrink-0 rounded-full bg-darkBlue">
            <Image
              src="/omar.webp"
              alt="author image"
              fill={true}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                // borderRadius: "9999px",
              }}
              sizes="100px"
              quality={100}
            />
          </div>
          <div>
            <h3 className="text-xs tracking-wider text-grey/70">WRITTEN BY</h3>
            <h2 className="text-base font-bold text-blackish md:text-lg">
              Malik Yousef
            </h2>
            <p className="max-w-[296px] text-xs text-grey lg:text-sm">
              COO at Decibell. Author of the upcoming book on Music Business:
              Talent Discovery & Management.
            </p>
          </div>
        </div>
        <hr className="my-14 border-[1px] border-black/10" />

        <h4 className="text-xl font-bold text-lightGrey md:text-2xl">
          Join the conversation
        </h4>
        <div className="mt-7 flex gap-2 lg:gap-3">
          <div className="relative h-10 w-10 flex-shrink-0 rounded-full bg-darkBlue">
            <Image
              src="/johnDoe.webp"
              alt="User image"
              fill={true}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                // borderRadius: "9999px",
              }}
              sizes="100px"
              quality={100}
            />
          </div>
          <textarea
            name="comment"
            className="h-24 w-full border-2 border-blueLightGrey p-4 placeholder:text-lightGrey/70 focus:border-grey/60 focus:outline-none md:h-32"
            placeholder="Comment"
          ></textarea>
        </div>
      </section>
    </>
  );
};

export default Article;
