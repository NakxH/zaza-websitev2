export const Footer = () => {
  return (
    <footer className="mt-auto bg-black border-t p-8 text-sm">
      <div className="mx-auto container flex md:flex-row flex-col md:items-start items-center gap-12 md:gap-0">
        <div className="text-center md:w-1/3 w-1/2 flex flex-col items-center">
          <h4 className="text-white text-xl md:mb-2 mb-2">Location</h4>
          <address className="text-white mb-2 text-sm">
            80 Kirkgate, Wakefield, WF11TB
          </address>
          <p>
            Get directions by clicking the pin below. Don't forget to follow us
            on social media.
          </p>
          <div className="flex mt-4">
            <a
              className="cursor-pointer"
              href="https://www.google.com/maps/place/80+Kirkgate,+Wakefield+WF1+1TB/@53.6819917,-1.4964279,17z/data=!3m1!4b1!4m6!3m5!1s0x487966ff9bdb0fc3:0xeb050ee68a8d09ae!8m2!3d53.6819886!4d-1.493853!16s%2Fg%2F11ffshrpk0?entry=ttu"
            >
              <i
                className="fa-solid fa-map-pin fa-2x"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a
              className="ml-20 cursor-pointer"
              href="https://www.instagram.com/ayarestaurant2023/?next=%2F"
              target="_blank"
            >
              <i
                className="fa-brands fa-instagram fa-2x"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
            <a className="ml-20 cursor-pointer" href="">
              <i
                className="fa-brands fa-facebook fa-2x"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="text-center md:w-1/3 w-1/2">
          <h4 className="text-white text-xl md:mb-2 mb-2">Opening hours</h4>
          <ul className="text-white text-sm">
            <li>Monday to Firday 10am-11pm</li>
            <li>Saturday 10am-Late</li>
            <li>Sunday 10am-Late</li>
          </ul>
        </div>
        <div className="md:w-1/3 w-1/2 text-center flex flex-col text-white">
          <h4 className="text-xl md:mb-2 mb-2">Contact us</h4>
          <a className="cursor-pointer m-2" href="tel:01924565075">
            01924565075
          </a>
          <a
            className="cursor-pointer m-2"
            href="mailto:reservations@ayarestaurant.co.uk"
          >
            reservations@ayarestaurant.co.uk
          </a>
          <a
            className="cursor-pointer m-2"
            href="mailto:contact@ayarestaurant.co.uk"
          >
            contact@ayarestaurant.co.uk
          </a>
        </div>
      </div>
    </footer>
  );
};
