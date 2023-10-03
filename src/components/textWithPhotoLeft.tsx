interface TextWithPhotoLeftProps {
  isMenu: boolean;
  title: string;
  content: string;
  img: string;
}

export const TextWithPhotoLeft = ({
  title,
  isMenu,
  content,
  img,
}: TextWithPhotoLeftProps) => {
  return (
    <section className="p-8 mt-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
          <img className="mr-auto" src={img} />
        </div>

        <div className="md:w-1/2 w-full full md:pl-8">
          <h2 className="mb-4 text-3xl">{title}</h2>
          <p className="text-center">{content}</p>
          {isMenu && (
            <div className="cursor-pointer mt-6">
              <a className="cursor-pointer mt-6">
                Check out the full menu here
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
