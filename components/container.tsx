import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div className={cn(className, `mx-auto max-w-7xl`)}>{children}</div>
    </>
  );
};

export default Container;
