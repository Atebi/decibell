import Image from "next/image";
import { _, comfortaa } from "../utils/fonts";
import Button from "../components/Button";
import Musicians from "../components/sections/Musicians";
import Carousel from "../components/sections/Carousel";
import Testimonial from "../components/sections/Testimonial";
import { dancing_Script } from "../utils/fonts";
import hero from "../../public/hero.webp";

const LandingPage = () => {
  return (
    <>
      <main className="relative grid min-h-screen place-items-center bg-whiteShade px-4">
        <div className="t0p-0 hero absolute right-0 z-10 h-full w-full">
          <Image
            src={hero}
            fill={true}
            alt="hero image"
            priority={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            placeholder="blur"
            quality={100}
            // className="bnw"
            // width={0}
            // height={0}
            // style={{ width: "100%", minHeight: "100%", height: "auto" }}
            // sizes="100vw"
          />
        </div>
        <div className="z-30 grid w-full max-w-xl place-items-center gap-4 bg-whiteShade/80 py-6">
          <h1
            className={`${comfortaa.variable} w-72 text-center font-comfortaa text-2xl font-bold text-black [letter-spacing:2px] md:w-[408px] md:text-4xl`}
          >
            Instant{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              collaboration
            </span>{" "}
            between{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              musicians
            </span>
            .
          </h1>
          <Button text="Create account" />
        </div>
      </main>

      {/*Intro to musicians */}
      <section className="mt-12 md:mt-20 xl:mt-24">
        <p
          className={`${dancing_Script.className} text-center text-2xl font-bold text-black md:text-4xl`}
        >
          For the{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            love of music
          </span>
        </p>
        <p className={`text-center text-base text-grey`}>
          Find, chat and collaborate with...
        </p>
      </section>

      {/* Musicians */}
      <Musicians comfortaa={comfortaa.variable} />

      {/* Features */}
      <section className="mt-16 flex flex-wrap items-center justify-center gap-6 px-5 text-center md:mt-20 md:gap-20 md:px-10 md:text-left xl:mt-32">
        {/** */}
        <div className="h-fit bg-gradient-primary">
          <Image
            src="/chat.webp"
            // fill={true}
            alt=""
            // priority={true}
            // style={{ objectFit: "fill" }}
            // sizes="(max-width: 768px) 320px"

            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 40vw, (max-width: 1440px) 33vw"
            quality={100}
          />
        </div>
        <div className="w-72">
          <h2
            className={`${comfortaa.variable} mb-4 font-comfortaa text-2xl font-bold text-black md:text-3xl`}
          >
            Chats, uploads, filters and more...
          </h2>
          <p className="mb-3.5 text-base text-blackish">
            You can filter musicians by genre or proximity in your search, you
            can also upload 1-minute videos of your work. Decibell also has
            video chat capabilities and ability to send voice notes.
          </p>
          <Button />
        </div>
        {/** */}
      </section>

      {/* How it works (CAROUSEL) */}
      <Carousel comfortaa={comfortaa.variable} />

      {/* Intro to Testimonial */}
      <div className="mx-auto mb-3 mt-20 block max-w-xs px-5 text-center text-sm font-medium text-blackish md:mx-0 md:max-w-xl md:px-8 md:text-left lg:mt-24 lg:px-14 xl:max-w-xl xl:text-base">
        <p>
          Whether you are part of the{" "}
          <span className="text-grey">creative process</span>, a potential
          artist manager, lover of music,{" "}
          <span className="text-grey">investor</span>, or marketer looking for
          models, Decibell is{" "}
          <span className="text-grey">the place to look</span>. but don’t take
          our word for it...
        </p>

        <h2
          className={`${comfortaa} mt-8 font-comfortaa text-lg font-bold text-darkBlue md:text-3xl`}
        >
          See what people are saying
        </h2>
      </div>

      {/* Testimonial */}
      <Testimonial comfortaa={comfortaa.variable} />

      {/* CTA */}
      <button className="mx-auto mt-14 block animate-pulse cursor-default rounded-3xl bg-gradient-primary px-3 py-2 text-xl font-semibold text-black hover:scale-105 hover:animate-none active:scale-110 active:animate-none">
        Join Decibell now!
      </button>
    </>
  );
};

export default LandingPage;
