import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// Create a client
const queryClient = new QueryClient();

export default function ApiProvider({ children }: Props) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
