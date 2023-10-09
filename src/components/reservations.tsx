import { Text } from "./text";

interface ReservationsProps {
  title: string;
  content: string;
}

export const Reservations = ({ title, content }: ReservationsProps) => {
  return (
    <section className="p-4 text-white mt-8 mb-8 border-b" id="reservations">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center mb-4 md:w-1/2">
          <Text title={title} content={content}></Text>
        </div>
        <div className="flex flex-row ">
          <a className="m-2 cursor-pointer" href="mail">
            <p className="underline underline-offset-2">Email</p>
          </a>
          <a className="m-2 cursor-pointer" href="mail">
            <p className="underline underline-offset-2">Directions</p>
          </a>
          <a className="m-2 cursor-pointer" href="mail">
            <p className="underline underline-offset-2">Phone</p>
          </a>
        </div>
      </div>
    </section>
  );
};
