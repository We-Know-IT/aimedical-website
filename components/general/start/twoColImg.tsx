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
      <div className="container flex max-w-xl flex-col xl:container xl:flex-row">
        {/* left box */}
        <div className="relative aspect-square w-full xl:w-2/5">
          <Image
            src={"/images/" + image}
            alt="Doctor crossed arms"
            fill
            className={
              "rounded-tl-xl rounded-tr-xl object-cover xl:rounded-bl-xl xl:rounded-tr-none"
            }
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
        </div>
        {/* right box */}
        <div
          className="flex grow flex-col items-center justify-center space-y-6  rounded-bl-xl rounded-br-xl bg-gradient-to-br from-blue-100 to-blue-50 px-6 
        py-12 xl:rounded-bl-none xl:rounded-tr-xl xl:rounded-br-xl">
          <div className="items-s flex  flex-col space-y-6">
            <h3 className="text-3xl font-semibold text-color-on-blue">
              {title}
            </h3>
            <p className="max-w-md text-lg tracking-wide text-color-on-blue">
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
