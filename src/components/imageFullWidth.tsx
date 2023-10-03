interface ImageFullWidthProps {
  img: string;
}

export const ImageFullWidth = ({ img }: ImageFullWidthProps) => {
  return (
    <section className="mt-6">
      <div
        className="md:h-96 h-64 bg-center bg-fixed bg-cover"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      />
    </section>
  );
};
