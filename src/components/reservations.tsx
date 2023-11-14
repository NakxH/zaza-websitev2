import { Text } from "./text";

interface ReservationsProps {
  title: string;
  content: string | JSX.Element;
}

export const Reservations = ({ title, content }: ReservationsProps) => {
  return (
    <section className="p-8 text-white mt-4">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <div className="text-center mb-4 md:w-1/2">
          <Text title={title} content={content}></Text>
        </div>
        <div className="flex flex-row mt-4">
          <a
            className="mr-20 cursor-pointer "
            href="mailto:reservations@ayarestaurant.co.uk"
          >
            <i
              className="fa-solid fa-envelope fa-2x"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a className="cursor-pointer" href="tel:+01924565075">
            <i
              className="fa-solid fa-phone fa-2x"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            className="ml-20 cursor-pointer"
            href="https://www.google.com/maps/place/80+Kirkgate,+Wakefield+WF1+1TB/@53.6819917,-1.4964279,17z/data=!3m1!4b1!4m6!3m5!1s0x487966ff9bdb0fc3:0xeb050ee68a8d09ae!8m2!3d53.6819886!4d-1.493853!16s%2Fg%2F11ffshrpk0?entry=ttu"
            target="_blank"
          >
            <i className="fa-solid fa-map fa-2x" style={{ color: "#ffffff" }} />
          </a>
        </div>
      </div>
    </section>
  );
};
