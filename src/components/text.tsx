interface TextProps {
  content: string | JSX.Element;
  title: string;
}

export const Text = ({ content, title }: TextProps) => {
  return (
    <div className="container mx-auto text-center">
      <h3 className="text-2xl mb-4">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
};
