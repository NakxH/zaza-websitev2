interface TextProps {
  content: string;
  title: string;
}

export const Text = ({ content, title }: TextProps) => {
  return (
    <div className="container mx-auto text-center">
      <h3 className="text-3xl mb-4">{title}</h3>
      <p>{content}</p>
    </div>
  );
};
