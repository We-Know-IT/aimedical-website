import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

export const button = cva(
  "rounded-full font-normal font-robotoFlex font-normal disabled:opacity-50 disabled:cursor-default",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-hover transition-colors active:bg-primary-active",
        secondary:
          "bg-secondary hover:bg-secondary-hover transition-colors text-on-secondary active:bg-secondary-active",
        white:
          "bg-white border border-gray-500 hover:bg-gray-200 transition-colors text-on-bg-primary active:bg-gray-300",
        transparent:
          "bg-transparent text-on-primary border-2 border-white hover:bg-gray-600/10 transition-colors text-on-bg-primary",
          transparentblue:
          "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors",
      },
      size: {
        small: "py-3 px-6 text-xs",
        medium: "py-3 px-8 text-sm lg:text-base",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  intent,
  size,
  href,
  ...props
}) => (
  <Link
    href={href}
    className={button({ intent, size, className })}
    {...props}
  />
);
