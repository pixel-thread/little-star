import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(`mx-auto px-4 container bg-transparent`, className)}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
