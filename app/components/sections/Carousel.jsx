import Image from "next/image";
import Button from "../Button";

const Carousel = ({ comfortaa }) => {
  // const [isActive, setIsActive] = useState(false);
  // const colour = isActive ? "bg-gradient-primary" : "bg-transparent";
  return (
    <section
      data-aos="fade-up"
      className="mt-20 w-full overflow-hidden text-center md:mt-32 lg:mt-32"
    >
      <h2
        className={`${comfortaa} mb-6 font-comfortaa text-2xl font-bold text-black underline md:text-3xl lg:mb-7`}
      >
        How it works
      </h2>

      {/* Carousel */}
      <div
      // id="carousel"
      // className="flex w-full snap-x snap-mandatory items-center overflow-x-auto"
      >
        <ul
          // id="carousel"
          className="carousel mx-auto flex w-full max-w-5xl snap-x snap-mandatory items-center overflow-x-auto scroll-smooth"
        >
          {/* item-1 */}
          <input
            className="slide"
            type="radio"
            name="radio-buttons"
            id="item-1"
          />
          <li
            // id="item-1"
            className="mr-12 w-full flex-shrink-0 origin-center scale-100 transform snap-center snap-always rounded-lg transition-transform delay-[3000ms] duration-[3000ms] ease-in-out"
          >
            <div className="relative bg-whiteShade">
              <Image
                src="/register.webp"
                // fill={true}
                alt=""
                // priority={true}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw , (max-width: 1024px) 1024px"
                quality={100}
              />
            </div>
            <div className="bg-whiteShade px-5 py-5 md:absolute md:right-1/2 md:top-1/2 md:-mr-64 md:-mt-28 md:h-56 md:w-[512px] md:bg-whiteShade/80 md:px-8 md:py-3">
              <h3
                className={`${comfortaa} mb-2 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                1
              </h3>
              <h3
                className={`${comfortaa} mb-1 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                Register
              </h3>
              <p className="mb-3 text-sm text-blackish lg:text-base">
                Register and set up your bio as either a singer, songwriter or
                producer. You can also register as all 3 😉
              </p>
              <Button text="Register" />
            </div>

            {/* carousel controls for item-1 */}
            <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
              <label
                htmlFor="item-4"
                // href="#item-4"
                className="collapse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`<`}</label>
              <label
                htmlFor="item-2"
                // href="#item-2"
                className="animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`>`}</label>
            </div>
          </li>

          {/* item-2 */}
          <input
            className="slide"
            type="radio"
            name="radio-buttons"
            id="item-2"
          />
          <li
            // id="item-2"
            className="mr-12 w-full flex-shrink-0 origin-center scale-100 transform snap-center snap-always rounded-lg transition-transform delay-[10000ms] duration-[10000ms] ease-in-out"
          >
            <div className="relative bg-whiteShade">
              <Image
                src="/upload.webp"
                alt=""
                // priority={true}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw , (max-width: 1024px) 1024px"
                quality={100}
              />
            </div>
            <div className="bg-whiteShade px-5 py-5 md:absolute md:right-1/2 md:top-1/2 md:-mr-64 md:-mt-28 md:h-56 md:w-[512px] md:bg-whiteShade/80 md:px-8 md:py-3">
              <h3
                className={`${comfortaa} mb-2 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                2
              </h3>
              <h3
                className={`${comfortaa} mb-1 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                Upload
              </h3>
              <p className="mb-3 text-sm text-blackish lg:text-base">
                Upload 1-minute videos of yourself singing, lyric videos or beat
                videos.
              </p>
              <Button text="Upload" />
            </div>

            {/* carousel controls for item-2 */}
            <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
              <label
                htmlFor="item-1"
                // href="#item-4"
                className="animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`<`}</label>
              <label
                htmlFor="item-3"
                // href="#item-2"
                className="animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`>`}</label>
            </div>
          </li>

          {/* item-3 */}
          <input
            className="slide"
            type="radio"
            name="radio-buttons"
            id="item-3"
          />
          <li
            // id="item-3"
            className="mr-12 w-full flex-shrink-0 origin-center scale-100 transform snap-center snap-always rounded-lg transition-transform duration-500"
          >
            <div className="relative bg-whiteShade">
              <Image
                src="/search.webp"
                alt=""
                // priority={true}

                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw , (max-width: 1024px) 1024px"
                quality={100}
              />
            </div>
            <div className="bg-whiteShade px-5 py-5 md:absolute md:right-1/2 md:top-1/2 md:-mr-64 md:-mt-28 md:h-56 md:w-[512px] md:bg-whiteShade/80 md:px-8 md:py-3">
              <h3
                className={`${comfortaa} mb-2 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                3
              </h3>
              <h3
                className={`${comfortaa} mb-1 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                Search & Filter
              </h3>
              <p className="mb-3 text-sm text-blackish lg:text-base">
                Search by name or look through auto feed based on proximity,
                filter by genre.
              </p>
              <Button text="Search now" />
            </div>

            {/* carousel controls for item-3 */}
            <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
              <label
                htmlFor="item-2"
                // href="#item-4"
                className="animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`<`}</label>
              <label
                htmlFor="item-4"
                // href="#item-2"
                className="animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`>`}</label>
            </div>
          </li>

          {/* item-4 */}
          <input
            className="slide"
            type="radio"
            name="radio-buttons"
            id="item-4"
          />
          <li
            // id="item-4"
            className="mr-12 w-full flex-shrink-0 origin-center scale-100 transform snap-center snap-always rounded-lg transition-transform duration-500"
          >
            <div className="relative bg-whiteShade">
              <Image
                src="/match.webp"
                alt=""
                // priority={true}

                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw , (max-width: 1024px) 1024px"
                quality={100}
              />
            </div>
            <div className="z-20 bg-whiteShade px-5 py-5 md:absolute md:right-1/2 md:top-1/2 md:-mr-64 md:-mt-28 md:h-56 md:w-[512px] md:bg-whiteShade/80 md:px-8 md:py-3">
              <h3
                className={`${comfortaa} mb-2 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                4
              </h3>
              <h3
                className={`${comfortaa} mb-1 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
              >
                Like, Match &...
              </h3>
              <p className="mb-3 min-h-[40px] text-sm text-blackish md:min-h-0 lg:text-base"></p>
              <Button text="Collabo!" />
            </div>

            {/* carousel controls for item-4 */}
            <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
              <label
                htmlFor="item-3"
                // href="#item-4"
                className="animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`<`}</label>
              <label
                htmlFor="item-1"
                // href="#item-2"
                className="hidden animate-pulse cursor-default rounded-full bg-gradient-primary px-4 py-2 font-black text-black hover:scale-110 hover:animate-none active:scale-150 lg:px-5 lg:py-3"
              >{`>`}</label>
            </div>
          </li>
        </ul>
      </div>

      {/* Carousel navigation */}
      <div className="mt-2 flex justify-center gap-1.5 md:hidden">
        <label
          htmlFor="item-1"
          className="ella h-5 w-5 rounded-full border-[2.8px] border-black active:scale-150 active:bg-gradient-primary"
        ></label>

        <label
          htmlFor="item-2"
          className="h-5 w-5 rounded-full border-[2.8px] border-black active:scale-150 active:bg-gradient-primary"
        ></label>
        <label
          htmlFor="item-3"
          className="h-5 w-5 rounded-full border-[2.8px] border-black active:scale-150 active:bg-gradient-primary"
        ></label>
        <label
          htmlFor="item-4"
          className="h-5 w-5 rounded-full border-[2.8px] border-black active:scale-150 active:bg-gradient-primary"
        ></label>
      </div>
    </section>
  );
};

export default Carousel;
