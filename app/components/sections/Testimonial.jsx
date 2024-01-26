import Image from "next/image";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const Testimonial = ({ comfortaa }) => {
  return (
    // <div>testi</div>
    <section className="relative mb-7">
      {/** */}

      {/** cardSlide */}
      <ul className="carousel flex w-full snap-x snap-mandatory items-center overflow-x-auto scroll-smooth py-12 pl-5 lg:pl-8">
        {/* card-1 */}
        <input
          className="slide"
          type="radio"
          name="radio-buttons"
          id="card-1"
        />

        <li className="mr-4 w-60 flex-shrink-0 snap-center snap-always rounded-lg bg-white p-5 shadow-2xl lg:mr-9">
          <span className="mb-3 block">⭐⭐⭐⭐⭐</span>

          <p className="mb-4 min-h-[100px] text-sm text-grey">
            Decibell has revolutionized the music industry by seamlessly
            connecting producers, vocalists and songwriters. As someone
            passionate about efficiency, this app has streamlined our
            collaboration process.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-10 rounded-full bg-blueLightGrey">
              <Image
                src="/helen.webp"
                alt=""
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
              <h3 className="text-sm font-bold text-darkBlue">Helen Lami</h3>
              <p className="text-xs text-grey">CEO Lami group</p>
            </div>
          </div>

          {/* carousel controls for card-1 */}
          {/* <div className="sticky left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between md:flex">
            <label
              htmlFor="card-6"
              className="collapse cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`<`}</label>
            <label
              htmlFor="card-2"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`>`}</label>
          </div> */}
        </li>

        {/* card-2 */}
        <input
          className="slide"
          type="radio"
          name="radio-buttons"
          id="card-2"
        />

        <li className="mr-4 w-60 flex-shrink-0 snap-center snap-always rounded-lg bg-white p-5 shadow-2xl lg:mr-9">
          <span className="mb-3 block">⭐⭐⭐⭐⭐</span>

          <p className="mb-4 min-h-[100px] text-sm text-grey">
            The impact of Decibell on the music industry cannot be overstated.
            It's a groundbreaking platform that empowers talent, enabling a
            harmonious blend of producers, vocalists and songwriters.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-10 rounded-full bg-blueLightGrey">
              <Image
                src="/omar.webp"
                alt=""
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
              <h3 className="text-sm font-bold text-darkBlue">Omar Yusuf</h3>
              <p className="text-xs text-grey">COO at Decibell</p>
            </div>
          </div>

          {/* carousel controls for card-2 */}
          {/* <div className="absolute -bottom-20 right-8 flex -translate-y-1/2 transform items-end justify-end gap-4">
            <label
              htmlFor="card-1"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`<`}</label>
            <label
              htmlFor="card-6"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`>`}</label>
          </div> */}
        </li>

        {/* card-3 */}
        <input
          className="slide"
          type="radio"
          name="radio-buttons"
          id="card-3"
        />

        <li className="mr-4 w-60 flex-shrink-0 snap-center snap-always rounded-lg bg-white p-5 shadow-2xl lg:mr-9">
          <span className="mb-3 block">⭐⭐⭐⭐⭐</span>

          <p className="mb-4 min-h-[100px] text-sm text-grey">
            As an artist, finding the right collaborators is crucial. Decibell
            has been a game-changer for me, providing a platform where I can
            easily connect with talented producers and songwriters. It has
            amplified the quality of my music.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-10 rounded-full bg-blueLightGrey">
              <Image
                src="/pinkydoll.webp"
                alt=""
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
              <h3 className="text-sm font-bold text-darkBlue">Pinkydoll</h3>
              <p className="text-xs text-grey">Artist</p>
            </div>
          </div>

          {/* carousel controls for card-3 */}
          {/* <div className="sticky left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between md:flex">
            <label
              htmlFor="card-2"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`<`}</label>
            <label
              htmlFor="card-4"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`>`}</label>
          </div> */}
        </li>

        {/* card-4 */}
        <input
          className="slide"
          type="radio"
          name="radio-buttons"
          id="card-4"
        />

        <li className="mr-4 w-60 flex-shrink-0 snap-center snap-always rounded-lg bg-white p-5 shadow-2xl lg:mr-9">
          <span className="mb-3 block">⭐⭐⭐⭐⭐</span>

          <p className="mb-4 min-h-[100px] text-sm text-grey">
            I'm all about words and emotions, and Decibell has been my go-to
            platform for finding the perfect melodies to complement my lyrics.
            This app bridges the gap between lyricists and musicians.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-10 rounded-full bg-blueLightGrey">
              <Image
                src="/leroy.webp"
                alt=""
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
              <h3 className="text-sm font-bold text-darkBlue">Leroy Frank</h3>
              <p className="text-xs text-grey">Lyricist</p>
            </div>
          </div>

          {/* carousel controls for card-4 */}
          {/* <div className="sticky left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between md:flex">
            <label
              htmlFor="card-3"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`<`}</label>
            <label
              htmlFor="card-5"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`>`}</label>
          </div> */}
        </li>

        {/* card-5 */}
        <input
          className="slide"
          type="radio"
          name="radio-buttons"
          id="card-5"
        />

        <li className="mr-4 w-60 flex-shrink-0 snap-center snap-always rounded-lg bg-white p-5 shadow-2xl lg:mr-9">
          <span className="mb-3 block">⭐⭐⭐⭐⭐</span>

          <p className="mb-4 min-h-[100px] text-sm text-grey">
            As a CEO in the music business, finding a platform that effortlessly
            brings together talent like this app does is a dream come true. It's
            a powerhouse that facilitates the creation of remarkable musical
            masterpieces.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-10 rounded-full bg-blueLightGrey">
              <Image
                src="/martin.webp"
                alt=""
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
              <h3 className="text-sm font-bold text-darkBlue">Martin Zigi</h3>
              <p className="text-xs text-grey">CEO Zigi group</p>
            </div>
          </div>

          {/* carousel controls for card-5 */}
          {/* <div className="sticky left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between md:flex">
            <label
              htmlFor="card-4"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`<`}</label>
            <label
              htmlFor="card-6"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`>`}</label>
          </div> */}
        </li>

        {/* card-6 */}
        <input
          className="slide"
          type="radio"
          name="radio-buttons"
          id="card-6"
        />

        <li className="mr-4 w-60 flex-shrink-0 snap-center snap-always rounded-lg bg-white p-5 shadow-2xl lg:mr-9">
          <span className="mb-3 block">⭐⭐⭐⭐⭐</span>

          <p className="mb-4 min-h-[100px] text-sm text-grey">
            Decibell has been instrumental in expanding our musical horizons.
            Connecting with talented producers and lyricists has unlocked doors
            to unique opportunities. It's a platform that nutures creativity and
            fuels the passion for making music.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="relative h-10 w-10 rounded-full bg-blueLightGrey">
              <Image
                src="/twins.webp"
                alt=""
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
              <h3 className="text-sm font-bold text-darkBlue">Les Twins</h3>
              <p className="text-xs text-grey">Musicians</p>
            </div>
          </div>

          {/* carousel controls for card-6 */}
          {/* <div className="sticky left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between md:flex">
            <label
              htmlFor="card-5"
              className="cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`<`}</label>
            <label
              htmlFor="card-1"
              className="collapse cursor-default rounded-full bg-rose-600 px-4 py-2 font-black hover:bg-white active:scale-150"
            >{`>`}</label>
          </div> */}
        </li>

        {/* carousel controls */}
        <div className="absolute -bottom-10 right-12 hidden -translate-y-1/2 transform items-end justify-end gap-5 lg:flex">
          <label
            htmlFor="card-1"
            className="cursor-default hover:scale-125 active:scale-150"
          >
            <HiArrowNarrowLeft className="h-7 w-7 fill-grey active:fill-black" />
          </label>
          <label
            htmlFor="card-6"
            className="cursor-default hover:scale-125 active:scale-150"
          >
            <HiArrowNarrowRight className="h-7 w-7 fill-grey active:fill-black" />
          </label>
        </div>
      </ul>
    </section>
  );
};

export default Testimonial;
