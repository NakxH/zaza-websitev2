import { Text } from "./text";

interface TextWithPhotoLeftProps {
  title: string;
  content: string | JSX.Element;
  img: string;
}

export const TextWithPhotoLeft = ({
  title,
  content,
  img,
}: TextWithPhotoLeftProps) => {
  return (
    <section className="p-8 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 w-full mt-8 md:mt-0 border">
          <img className="mr-auto" src={img} />
        </div>
        <div className="md:w-1/2 w-full full md:pl-8">
          <Text title={title} content={content}></Text>
        </div>
      </div>
    </section>
  );
};
