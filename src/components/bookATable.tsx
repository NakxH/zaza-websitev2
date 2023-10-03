export const BookATable = () => {
  return (
    <section className="p-4 text-white mt-8 mb-8">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center mb-4 text-3xl">
          <h2>Reservations</h2>
        </div>
        <div className="text-center mb-4 p-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-row border-b-2">
          <a className="m-2 cursor-pointer">Email</a>
          <a className="m-2 cursor-pointer">Directions</a>
          <a className="m-2 cursor-pointer">Phone</a>
        </div>
      </div>
    </section>
  );
};
