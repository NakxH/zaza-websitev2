interface ImageRightProps {
  img: string;
}

export const ImageRight = ({ img }: ImageRightProps) => {
  return (
    <section className="md:pl-56 mt-6">
      <div
        className="md:h-96 h-64 bg-center bg-fixed bg-cover"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      />
    </section>
  );
};
