type Props = {
  title: string;
  text: string;
  image: string;
};

export default function HowSlide({ title, text, image }: Props) {
  return (
    <div>
      {" "}
      <h3 className=" col-start-2 col-end-3 text-lg font-bold text-primary">
        {title}
      </h3>
      <p className=" col-start-2 col-end-3 text-on-bg-primary">{text}</p>
    </div>
  );
}
