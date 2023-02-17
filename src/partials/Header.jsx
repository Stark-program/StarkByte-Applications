import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../utils/Dropdown";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                className="h-8 w-8 fill-current text-purple-600"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  to="/features"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  About us
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Support">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to="/contact"
                    className="flex py-2 px-4 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="flex py-2 px-4 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="flex py-2 px-4 text-sm font-medium leading-tight text-gray-400 hover:text-purple-600"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  to="/signin"
                  className="flex items-center px-4 py-3 font-medium text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm ml-3 bg-purple-600 text-white hover:bg-purple-700"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6 fill-current text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full left-0 z-20 w-full overflow-hidden px-4 transition-all duration-300 ease-in-out sm:px-6"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link
                    to="/features"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex py-2 text-gray-300 hover:text-gray-200"
                  >
                    About us
                  </Link>
                </li>
                <li className="my-2 border-t border-b border-gray-700 py-2">
                  <span className="flex py-2 text-gray-300">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link
                        to="/contact"
                        className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/help"
                        className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >
                        Help center
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/404"
                        className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                      >
                        404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="flex w-full justify-center py-2 font-medium text-purple-600 hover:text-gray-200"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="my-2 inline-flex w-full items-center justify-center rounded-sm border border-transparent bg-purple-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-purple-700"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
