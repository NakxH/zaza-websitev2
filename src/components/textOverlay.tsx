export const TextOverlay = () => {
  return (
    <section id="menu">
      <div
        className="h-96 bg-center bg-fixed bg-cover flex justify-center items-center md:items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <div className="md:w-1/2 full mx-8 md:mx-0 p-8 md:py-16 md:px-32 bg-black text-center">
          <h3 className="text-2xl mb-6">Turkish Food</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};
