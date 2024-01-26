import Image from "next/image";

const Footer = ({ comfortaa }) => {
  return (
    <section className="mt-24 w-full bg-blackish px-5 py-20 text-center text-base md:px-10 md:text-left lg:mt-28">
      <div>
        <div className="mx-auto block w-fit">
          <Image
            src="/decibell.svg"
            //  fill={true}
            alt="app logo"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
          />
        </div>

        <p className="mt-2 bg-gradient-primary bg-clip-text text-center text-sm font-semibold text-transparent">
          Collaborate with musicians.
        </p>
      </div>

      {/* */}
      <div className="mb-40 mt-20 flex w-full flex-wrap justify-center gap-16 md:justify-between md:px-20 lg:mt-24">
        {/* */}
        <div className="w-full md:w-fit">
          <h3
            className={`${comfortaa} mb-5 font-comfortaa text-2xl font-bold text-grey`}
          >
            Stay Updated
          </h3>
          <div className="mx-auto mb-3 h-0.5 w-24 rounded-full bg-gradient-primary md:mx-0"></div>
          <p className="mb-1.5 text-sm text-grey">
            Subscribe to our newsletter.
          </p>
          <input
            name="email"
            className="border-2 border-grey/50 bg-white/10 p-2 text-blueLightGrey caret-blueLightGrey placeholder:text-grey focus:border-blueLightGrey focus:outline-none"
            placeholder="Email"
          />
        </div>

        {/* */}
        <div className="w-full md:w-fit md:min-w-[181.13px] lg:min-w-fit">
          <h3
            className={`${comfortaa} mb-5 font-comfortaa text-2xl font-bold text-grey`}
          >
            Company
          </h3>
          <div className="mx-auto mb-3 h-0.5 w-24 rounded-full bg-gradient-primary md:mx-0"></div>

          <ul className="flex flex-col gap-1.5 text-base text-lightGrey">
            <li>
              <a className="hover:text-grey" href="/article">
                Product
              </a>
            </li>
            <li>
              <a className="hover:text-grey" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-grey" href="/article">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* */}
        <div className="w-full md:w-fit">
          <h3
            className={`${comfortaa} mb-5 font-comfortaa text-2xl font-bold text-grey`}
          >
            Features
          </h3>
          <div className="mx-auto mb-3 h-0.5 w-24 rounded-full bg-gradient-primary md:mx-0"></div>

          <ul className="flex flex-col gap-1.5 text-base text-grey">
            <li>
              <p>Chat Room</p>
            </li>
            <li>
              <p>Ios and Andriod Apps</p>
            </li>
            <li>
              <p>File Sharing</p>
            </li>
            <li>
              <p>User Management</p>
            </li>
          </ul>
        </div>

        {/* */}
        <div className="w-full md:w-fit">
          <h3
            className={`${comfortaa} mb-5 font-comfortaa text-2xl font-bold text-grey`}
          >
            Contact Us
          </h3>
          <div className="mx-auto mb-3 h-0.5 w-24 rounded-full bg-gradient-primary md:mx-0"></div>

          <ul
            id="contact"
            className="flex flex-col gap-1.5 text-base text-grey"
          >
            <li>
              <p>info@decibellapp.com</p>
            </li>
            <li>
              <p>+234-90-650-12745</p>
            </li>
            <li>
              <p>
                369 Osborn Bourdillon. <br /> Victoria Island, Lagos
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* */}
      <p className="text-center text-sm text-grey opacity-90">
        © Copyright Decibell Inc.
      </p>
    </section>
  );
};

export default Footer;
