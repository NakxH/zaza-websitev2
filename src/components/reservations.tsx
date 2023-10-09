import { Text } from "./text";

interface ReservationsProps {
  title: string;
  content: string | JSX.Element;
}

export const Reservations = ({ title, content }: ReservationsProps) => {
  return (
    <section className="p-8 text-white mt-4 border-b" id="reservations">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <div className="text-center mb-4 md:w-1/2">
          <Text title={title} content={content}></Text>
        </div>
        <div className="flex flex-row mt-4">
          <a className="mr-20 cursor-pointer " href="mail">
            <img src="/public/email.svg" width={50} />
          </a>
          <a className="cursor-pointer" href="map">
            <img src="/public/map.svg" width={40} />
          </a>
          <a className="ml-20 cursor-pointer" href="phone">
            <img src="/public/phone.svg" width={50} />
          </a>
        </div>
      </div>
    </section>
  );
};
