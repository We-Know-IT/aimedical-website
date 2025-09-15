import React from "react";
import { twMerge } from "tailwind-merge";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode | string;
  className?: string;
}

export default function Typography({
  variant,
  children,
  className = "",
}: TypographyProps) {
  const componentsMap: {
    [key in TypographyProps["variant"]]: {
      component: React.ElementType;
      variantClassName: string;
    };
  } = {
    h1: {
      component: "h1",
      variantClassName: "text-2xl font-semibold text-on-primary lg:text-3xl",
    },
    h2: {
      component: "h2",
      variantClassName: "text-primary text-[20px] font-semibold lg:text-xl",
    },
    h3: {
      component: "h3",
      variantClassName:
        "font-semibold text-on-bg-primary",
    },
    h4: { component: "h4", variantClassName: "text-lg" },
    h5: { component: "h5", variantClassName: "text-lg" },
    h6: { component: "h6", variantClassName: "text-lg" },
    p: {
      component: "p",
      variantClassName: "font-normal text-on-bg-primary",
    },
    span: { component: "span", variantClassName: "text-base" },
  };

  const Component = componentsMap[variant].component;
  const variantClasses = componentsMap[variant].variantClassName;

  return (
    <Component className={twMerge(variantClasses, className)}>
      {children}
    </Component>
  );
}
