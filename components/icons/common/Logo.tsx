import Image from "next/image";
import { defaultHeight, defaultWidth, IconProps } from "../icons";

export default function LogoIcon({
  w = defaultHeight,
  h = defaultWidth,
}: IconProps) {
  return (
    <Image
      className="duration-200 ease-in-out"
      src={"/images/logo.svg"}
      width={w}
      height={h}
      alt="Logo"
    />
  );
}
