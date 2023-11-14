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
    <div className="top-0 z-20">
      <nav className="bg-black py-4">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white ml-4 my-2">
            <img alt="logo" src="/public/logonew.jpg" width={100} />
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
                  href="#aboutUs"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  About Us
                </a>
                <a
                  href="#menu"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Menu
                </a>
                {/* <a
                  href="#gallery"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Gallery
                </a> */}
                <a
                  href="#reservations"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Reservations
                </a>
                <a
                  href="#directions"
                  className={`block mt-4 lg:inline-block lg:mt-0 mr-4`}
                >
                  Directions
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
