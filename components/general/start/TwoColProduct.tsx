import { LinkButton, Button } from "../Button";
import Image from "next/image";
import Typography from "../../common/Typography";
type Props = {
  title?: React.ReactNode | string;
  text?: string;
  actionButton: {
    children: React.ReactNode | string;
    onClick?: () => void;
    href?: string;
  };
  list?: {
    title: string;
    text: string;
    img: string;
    imgAlt: string;
  }[];
  image?: {
    src: string;
    alt: string;
    quality?: number;
  };
};

export default function TwoColProduct({ title, text, actionButton, list, image }: Props) {

  return (
    /* Container */
    <section className="pb-10">
      {/* Container */}
      <div className="container flex flex-col items-center justify-between xl:flex-row xl:h-[400px] space-y-6 xl:space-y-0 xl:gap-6">
        {/* flex box */}
        <div className="flex w-full flex-col justify-between rounded-xl bg-background-secondary px-8 py-12 space-y-12 lg:space-y-0 lg:items-start xl:w-1/2 xl:h-full">
          {/* left box */}
          <Typography variant="p" className="text-darkblue-page-active font-haasGrotDisplay font-normal">
            {title}
          </Typography>
          <div className="flex flex-col items-start">
            <Typography variant="p" className="mb-4 text-darkblue font-haasGrotDisplay font-normal xl:text-lg">
              {text}
            </Typography>
            {actionButton && (actionButton.href || actionButton.onClick) &&
              (actionButton.href ? (
                <LinkButton
                  href={actionButton.href}
                  size="small"
                  className="flex items-center justify-center">
                  {actionButton.children}
                </LinkButton>
              ) : (
                <Button
                  onClick={actionButton.onClick}
                  size="small"
                  className="flex items-center justify-center">
                  {actionButton.children}
                </Button>
              ))}
          </div>
        </div>
        <div className="flex w-full flex-col justify-center rounded-xl lg:items-center lg:justify-evenly xl:w-1/2 xl:h-full">
          {/*  right box - static image */}
          {image ? (
            <div className="w-full h-full relative">
              <Image
                src={"/images/" + image.src}
                alt={image.alt}
                width={600}
                height={400}
                quality={image.quality || 100}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ) : list ? (
            list.map((data) => (
              <div
                className="flex w-full justify-center space-x-2 mb-6 last:mb-0"
                key={data.title}>
                <div className="flex h-full w-[36px] flex-shrink-0 sm:w-[48px]">
                  <Image
                    src={"/images/" + data.img}
                    alt={data.imgAlt}
                    width={36}
                    height={36}
                    className=""
                  />
                </div>
                <div className="flex max-w-[300px] flex-col">
                  <Typography
                    variant="h3"
                    className="font-bold text-on-primary">
                    {data.title}
                  </Typography>
                  <Typography variant="p" className="text-on-primary">
                    {data.text}
                  </Typography>
                </div>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </section>
  );
}
