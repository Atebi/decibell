import Image from "next/image";
import decibellHero from "../../../public/decibellHero.webp";
import Button from "../Button";

// min-h-[320px] md:h-[200px]
// h-40
// px-4 md:px-8 lg:px-14

const Articles = () => {
  return (
    <section className="relative grid grid-cols-1 gap-2 px-4 md:grid-cols-2 md:px-8 lg:gap-3 lg:px-14 xl:grid-cols-3">
      {/* Card-1 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src={decibellHero}
              alt="decibell hero image"
              placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                What is Decibell?
              </h2>
              <p className="line-clamp-3 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
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
              <div className="flex gap-1 md:gap-2">
                <h4>Malik Yousef</h4>
                <span>|</span>
                <h4>25th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-2 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/guitarGirl.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                Tricks to creating sweet and memorable melodies
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider lg:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/pinkyDoll.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Pinkydoll</h4>
                <span>|</span>
                <h4>20th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-3 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/daw.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                Beginners guide to using a DAW
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/martin.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Martin Zigi</h4>
                <span>|</span>
                <h4>18th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-4 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/songwriterBoy.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                6 Tips to songwriting
              </h2>
              <p className="line-clamp-3 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/leroy.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Leroy Frank</h4>
                <span>|</span>
                <h4>12th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-5 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/newStar.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                How to navigate early state music career
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/martin.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Martin Zigi</h4>
                <span>|</span>
                <h4>12th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-6 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/upcomers.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                How to sell yourself as an upcoming artist
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/helen.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Helen Lami</h4>
                <span>|</span>
                <h4>10th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-7 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/artistManager.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                Guide to starting out as an artist manager
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/helen.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Helen Lami</h4>
                <span>|</span>
                <h4>8th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-8 */}
      <a
        href="/article"
        className="cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/voiceTraining.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                Importance of constant voice training for artists
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/pinkyDoll.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>Pinkydoll</h4>
                <span>|</span>
                <h4>6th November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Card-9 */}
      <a
        href="/article"
        className="hidden cursor-default hover:scale-95 hover:opacity-90 hover:shadow-lg focus:scale-100 active:scale-90 xl:inline-block"
      >
        <div className="w-full rounded-lg border-2 border-blueLightGrey/40">
          <div className="rounded-t-lg bg-lightGrey">
            <Image
              src="/musicTech.webp"
              alt="decibell hero image"
              // placeholder="blur"
              priority={true}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
              sizes="100vw , (max-width: 768px) 50vw, (max-width: 1280px) 33vw"
              quality={100}
            />
          </div>
          <div className="flex h-[188px] flex-col justify-between bg-white p-4 md:h-[200px] md:p-5 lg:h-[212px]">
            <div>
              <h2 className="mb-2 text-xl font-bold text-black lg:text-2xl">
                The Merge : Music & Technology
              </h2>
              <p className="line-clamp-2 text-sm text-grey md:text-sm lg:text-base">
                Treating customers with respect earns you loyalty. Dig into
                marketing personas that reflect real people to gain the most
                valuable insight.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey md:gap-2 md:tracking-wider xl:text-sm">
              <div className="relative h-9 w-9 rounded-full bg-darkBlue">
                <Image
                  src="/johnDoe.webp"
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
              <div className="flex gap-1 md:gap-2">
                <h4>John Sinika</h4>
                <span>|</span>
                <h4>3rd November, 2023</h4>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Pagination button */}
      <div className="absolute -bottom-20 right-4 w-fit md:right-8 lg:right-14">
        <Button text="Next >>" />
      </div>
    </section>
  );
};

export default Articles;
