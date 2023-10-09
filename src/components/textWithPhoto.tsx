import { Text } from "./text";

interface TextWithPhotoProps {
  title: string;
  content: string | JSX.Element;
  img: string;
  imgPosition: "left" | "right";
}

export const TextWithPhoto = ({
  title,
  content,
  img,
  imgPosition,
}: TextWithPhotoProps) => {
  return (
    <section className="p-8 text-center">
      <div
        className={`container mx-auto gap-8 flex flex-col ${
          imgPosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-center`}
      >
        <div className="md:w-1/2 w-full full">
          <Text title={title} content={content} />
        </div>
        <div className="md:w-1/2 w-full border">
          <img className="ml-auto" src={img} />
        </div>
      </div>
    </section>
  );
};
