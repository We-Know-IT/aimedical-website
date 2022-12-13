import Image from "next/image";
import Button from "../button";
type Props = {
  title?: string;
  text?: string;
  image?: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
};
export default function TwoColImg({ title, text, actionButton, image }: Props) {
  return (
    <section className="bg-background-primary py-24">
      {/* Container */}
      <div className="container flex flex-col xl:flex-row max-w-xl xl:container">
        {/* left box */}
        <div className="relative aspect-square w-full xl:w-2/5">
          <Image
            src={"/images/" + image}
            alt="Doctor crossed arms"
            fill
            className={
              "xl:rounded-bl-xl rounded-tl-xl rounded-tr-xl xl:rounded-tr-none object-cover"
            }
          />
        </div>
        {/* right box */}
        <div
          className="bg-gradient-to-br from-blue-100 to-blue-50 flex grow flex-col  items-center justify-center space-y-6 px-6 rounded-bl-xl rounded-br-xl 
        xl:rounded-bl-none xl:rounded-tr-xl xl:rounded-br-xl py-12">
          <div className="flex flex-col  items-s space-y-6">
            <h2 className="text-3xl font-semibold text-color-on-blue">
              {title}
            </h2>
            <p className="text-lg text-color-on-blue tracking-wide max-w-md">
              {text}
            </p>

            {actionButton && (
              <Button onClick={actionButton.onClick}>
                {actionButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
