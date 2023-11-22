interface ImageFullWidthProps {
  img: string;
}

export const ImageFullWidth = ({ img }: ImageFullWidthProps) => {
  return (
    <section className="border">
      <div
        className="md:h-96 h-64 bg-center lg:bg-fixed bg-cover"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      />
    </section>
  );
};
