import Button from "../Button";
import Image from "next/image";

const Musicians = ({ comfortaa }) => {
  return (
    <section className="mt-12 flex flex-wrap justify-center gap-6 px-5 text-center md:gap-9 md:px-10 ">
      {/** */}
      <div>
        <div className="mx-auto h-fit max-w-xs rounded-3xl bg-grey p-1">
          <Image
            src="/producer.webp"
            // fill={true}
            alt="producer"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
          />
        </div>

        <h2
          className={`${comfortaa} mt-4 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
        >
          Producers
        </h2>
        <p className="mb-2 mt-2 min-h-[112px] max-w-xs text-base text-blackish">
          Decibell is the place to find already established and upcoming
          producers. As a producer you get to meet and collaborate with other
          Artists.
        </p>
        <Button />
      </div>

      {/** */}
      <div>
        <div className="mx-auto h-fit max-w-xs rounded-3xl bg-darkBlue p-1">
          <Image
            src="/singer.webp"
            // fill={true}
            alt="singer"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
          />
        </div>

        <h2
          className={`${comfortaa} mt-4 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
        >
          Singers
        </h2>
        <p className="mb-2 mt-2 min-h-[112px] max-w-xs text-base text-blackish">
          As a singer on decibell, you finally get that all-in-one platform
          where you find beatmakers of any genre you want and also get to work
          with lyricists.
        </p>
        <Button />
      </div>

      {/** */}
      <div className="">
        <div className="mx-auto h-fit max-w-xs rounded-3xl bg-blueLightGrey p-1">
          <Image
            src="/songwriter.webp"
            // fill={true}
            alt="songwriter"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
            className="bnw"
          />
        </div>

        <h2
          className={`${comfortaa} mt-4 font-comfortaa text-xl font-bold text-black lg:text-2xl`}
        >
          Songwriters
        </h2>
        <p className="mb-2 mt-2 min-h-[112px] max-w-xs text-base text-blackish">
          As a songwriter, you get to work with singers of any genre of your
          choosing. If you are having writers block, decibell is here to rescue
          you.
        </p>
        <Button />
      </div>
      {/** */}
    </section>
  );
};

export default Musicians;
