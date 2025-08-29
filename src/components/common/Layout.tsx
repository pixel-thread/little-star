import React from "react";
import { Container } from "./Container";

interface LayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  header,
  footer,
  children,
  className = "",
}) => {
  return (
    <div className={`flex min-h-screen bg-gray-200 flex-col ${className}`}>
      {/* Header */}
      {header && <>{header}</>}

      {/* Main Content */}
      <main className="flex-1 items-center justify-center">{children}</main>

      {/* Footer */}
      {footer && <>{footer}</>}
    </div>
  );
};
