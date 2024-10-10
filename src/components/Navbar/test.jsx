<nav className=" py-2">
  <div className="container mx-auto">
    <div className="flex h-16 items-center justify-between">
      {/* Logo Left */}
      <div className="md:flex md:items-center md:gap-12">
        <Link className="flex items-center gap-5" to="/">
          <img src={logo} alt="" />
          <p className=" text-5xl leading-[58px] font-motserat">
            <span className="font-bold text-black">M</span>
            <span className="text-[#1E1E1E] font-normal">umair</span>
          </p>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <NavLinkItem label="Home" dLink="/" />
            <NavLinkItem label="services" dLink="/" />
            <NavLinkItem label="projects" dLink="/" />
            <NavLinkItem label="testimonials" dLink="/" />
            <NavLinkItem label="contact" dLink="/" />
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Download Cv
          </a>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>;
