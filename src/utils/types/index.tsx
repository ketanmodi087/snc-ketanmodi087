import { MouseEventHandler } from "react";

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

export interface ClockComponentProps {
  timeRef: HTMLElement | any;
}

// Define type for PersonDataCardProps
export interface PersonDataCardProps {
  data: PersonType;
}

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  classname?: string;
}

// Define type for ErrorCardProps
export interface ErrorCardProps {
  errorMessage?: string;
  title?: string;
}

export interface DetailLoggerProps {
  personDetails: PersonType;
  time: string | null | undefined;
}
