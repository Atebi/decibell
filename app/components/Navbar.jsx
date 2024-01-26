import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed right-0 top-0 z-50 flex w-full items-center justify-between bg-whiteShade/80 px-4 py-2.5 backdrop-blur-md md:px-8 lg:px-14">
      <a href="/landing">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/decibell.svg"
            // fill={true}
            alt="app logo"
            // style={{ objectFit: "fill" }}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
          />

          <p className="inline-block bg-gradient-primary bg-clip-text text-2xl font-light text-transparent lg:text-3xl">
            Decibell
          </p>
        </div>
      </a>

      <Menu />
    </nav>
  );
};

export default Navbar;
