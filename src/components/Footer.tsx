import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full z-50 bottom-0 mt-auto body-font border-t">
      <div className="container px-4 py-8 mx-auto flex items-center flex-col md:flex-row">
        <p className="">
          &copy; {new Date().getFullYear()} Shabbir Alam | All Right Reserved
        </p>

        <ul className="inline-flex ml-auto justify-center">
          <li>
            <Link href="/">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
          <li>
            <a href="/"></a>
          </li>
          <li>
            <a href="/"></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
