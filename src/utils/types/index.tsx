// Define props interface for MainLayout component
export interface MainLayoutProps {}

// Interface for AbortController object containing signal and abort functions
export interface MyAbortController {
  signal: AbortSignal;
  abort: () => void;
}

// Interface representing a person with specific properties
export interface PersonType {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  followers: number;
  following: number;
}
