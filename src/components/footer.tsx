export const Footer = () => {
  return (
    <footer className="mt-auto bg-black p-8 text-sm">
      <div className="mx-auto container flex md:flex-row flex-col md:items-start items-center gap-12 md:gap-0">
        <div className="text-center w-1/3">
          <h4 className="text-white text-xl md:mb-2 mb-2">Location</h4>
          <address className="text-white mb-2 text-sm">
            16 Crosse Hall Lane, Chorley, Lancashire, PR60QJ
          </address>
          <a className="cursor-pointer" href="https://google.com">
            <p>Get Directions</p>
          </a>
        </div>
        <div className="text-center w-1/3">
          <h4 className="text-white text-xl md:mb-2 mb-2">Opening hours</h4>
          <ul className="text-white text-sm">
            <li>Monday 4pm-10pm</li>
            <li>Tuesday 4pm-10pm</li>
            <li>Wednesday 4pm-10pm</li>
            <li>Thursday 4pm-10pm</li>
            <li>Friday 4pm-10pm</li>
            <li>Saturday 4pm-10pm</li>
            <li>Sunday 4pm-10pm</li>
          </ul>
        </div>
        <div className="w-1/3 text-center flex flex-col text-white">
          <h4 className="text-xl md:mb-2 mb-2">Contact us</h4>
          <a className="cursor-pointer m-2" href="tel:#">
            012345678910
          </a>
          <a className="cursor-pointer m-2" href="tel:#">
            012345678910
          </a>
          <a className="cursor-pointer m-2" href="mailto:#">
            email@example.com
          </a>
        </div>
      </div>
    </footer>
  );
};
