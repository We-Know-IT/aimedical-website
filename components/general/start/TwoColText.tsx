import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
type Props = {
  title?: string;
  text?: string;
  actionButton: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  list?: {
    title: string;
    text: string;
    img: string;
  }[];
};

export default function TwoColText({ title, text, actionButton, list }: Props) {
  return (
    /* Container */
    <section className="bg-background-secondary py-24">
      {/* Container */}
      <div className="container flex max-w-xl flex-col items-center justify-between xl:container xl:flex-row">
        {/* flex box */}
        <div className="flex flex-col justify-center space-y-10 p-4 xl:w-1/3">
          {/* left box */}
          <h2 className="text-3xl font-semibold leading-tight text-primary lg:text-4xl">
            {title}
          </h2>
          <p className="text-lg font-normal leading-[1.6rem] tracking-wider">
            {text}
          </p>
          {actionButton &&
            (actionButton.href ? (
              <Link href={actionButton.href}>
                <Button onClick={actionButton.onClick}>
                  {actionButton.text}
                </Button>
              </Link>
            ) : (
              <Button onClick={actionButton.onClick}>
                {actionButton.text}
              </Button>
            ))}
        </div>
        <div className="flex flex-col justify-center gap-y-6 space-y-8 rounded-xl bg-gradient-to-br from-primary/50 to-primary px-4 py-20 lg:items-center lg:justify-evenly lg:gap-y-0 xl:w-1/2">
          {/*  bg-gradient-to-r from-primary/[50] to-primary*/}
          {list &&
            list.map((data) => (
              <div
                className="flex w-full items-center justify-center lg:w-2/3"
                key={data.title}>
                <div className="flex h-full w-1/5 items-center justify-center">
                  <Image
                    src={"/images/" + data.img}
                    alt={""}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="3lg:text-3xl py-2 text-2xl font-semibold  text-on-primary">
                    {data.title}
                  </h3>
                  <p className="3lg:text-xl text-lg leading-snug tracking-wide  text-on-primary">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
