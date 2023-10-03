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
    <header className="p-8 bg-black">
      <div className="container mx-auto flex justify-center items-center">
        <a href="/">
          <img src="/public/logonew.jpg" alt="Logo" className="h-[100px]" />
        </a>
        <nav className="ml-auto">
          <a className="mr-6" href="#">
            Home
          </a>
          <a className="mr-6" href="#">
            About Us
          </a>
          <a className="mr-6" href="#menu">
            Menu
          </a>
          <a className="mr-6" href="#">
            Reservations
          </a>
          <a className="mr-6" href="#">
            Location
          </a>
        </nav>
      </div>
    </header>
  );
};
