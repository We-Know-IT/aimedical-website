import Image from "next/image";
import { defaultHeight, defaultWidth, IconProps } from "../icons";

export default function LogoIcon({
  w = defaultHeight,
  h = defaultWidth,
}: IconProps) {
  return (
    <Image
      className="ease-in-out duration-200"
      src={"/images/logo.png"}
      width={w}
      height={h}
      alt="Logo"
    />
  );
}
