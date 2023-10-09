import { Text } from "./text";

interface TextWithPhotoRightProps {
  title: string;
  content: string | JSX.Element;
  img: string;
}

export const TextWithPhotoRight = ({
  title,
  content,
  img,
}: TextWithPhotoRightProps) => {
  return (
    <section className="p-8 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 w-full full md:pr-8">
          <Text title={title} content={content} />
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 border">
          <img className="ml-auto" src={img} />
        </div>
      </div>
    </section>
  );
};
