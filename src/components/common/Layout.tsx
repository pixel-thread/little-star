import React from "react";
import { SmoothScroll } from "./SmoothScroll";
import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
  QueryCache,
} from "@tanstack/react-query";

interface LayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const queryClient = new QueryClient({
  mutationCache: new MutationCache(),
  queryCache: new QueryCache(),
});

export const Layout: React.FC<LayoutProps> = ({
  header,
  footer,
  children,
  className = "",
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`flex min-h-screen bg-gray-200 flex-col ${className}`}>
        {/* Header */}
        {header && <>{header}</>}

        {/* Main Content */}
        <main className="flex-1 items-center justify-center">
          <SmoothScroll>{children}</SmoothScroll>
        </main>

        {/* Footer */}
        {footer && <>{footer}</>}
      </div>
    </QueryClientProvider>
  );
};
