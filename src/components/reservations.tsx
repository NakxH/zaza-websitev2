import { Text } from "./text";

interface ReservationsProps {
  title: string;
  content: string | JSX.Element;
}

export const Reservations = ({ title, content }: ReservationsProps) => {
  return (
    <section className="p-8 text-white mt-4" id="reservations">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <div className="text-center mb-4 md:w-1/2">
          <Text title={title} content={content}></Text>
        </div>
        <div className="flex flex-row mt-4">
          <a className="mr-20 cursor-pointer " href="mail">
            <i
              className="fa-solid fa-envelope fa-2x"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a className="cursor-pointer" href="map">
            <i
              className="fa-solid fa-phone fa-2x"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a className="ml-20 cursor-pointer" href="phone">
            <i className="fa-solid fa-map fa-2x" style={{ color: "#ffffff" }} />
          </a>
        </div>
      </div>
    </section>
  );
};
