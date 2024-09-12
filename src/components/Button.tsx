import { Button as Base } from "@/components/ui/button";
import { useRef, type FC, type ReactNode } from "react";
import { useButton } from "react-aria";

export const Button: FC<
  { children: ReactNode } & Parameters<typeof useButton>[0]
> = ({ children, ...rest }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(rest, ref);
  return (
    <Base {...buttonProps} ref={ref}>
      {children}
    </Base>
  );
};
