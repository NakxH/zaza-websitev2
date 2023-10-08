import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowMenu(!isMobile);
    }
  }, [isMobile]);

  console.log(showMenu);

  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-black py-4 border-b-2 border-white">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white ml-4 my-2">
            <img alt="logo" height={50} src="/public/logonew.jpg" width={150} />
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Menu"
              className="navbar-burger flex items-center p-2"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src="/hamburger.svg"
                alt="Menu icon"
                width={24}
                height={24}
              />
            </button>
          </div>
          {showMenu && (
            <div className="mx-2 ml-4 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow"></div>
              <div>
                <a
                  href="/history"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  History
                </a>
                <a
                  href="/gallery"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Gallery
                </a>
                <a
                  href="/schedule"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Schedule
                </a>
                <a
                  href="/contact-us"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
