import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5016]";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-[#2d5016] text-white hover:bg-[#3a6520]",
  secondary:
    "border border-[#2d5016] bg-transparent text-[#2d5016] hover:bg-[#edf3e8]",
  ghost: "border border-transparent text-[#2d5016] hover:bg-[#edf3e8]",
};

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const styles = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  );
}
