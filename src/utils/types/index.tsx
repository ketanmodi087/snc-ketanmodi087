// Define props interface for MainLayout component
export interface MainLayoutProps {}

export interface MyAbortController {
  signal: AbortSignal;
  abort: () => void;
}
