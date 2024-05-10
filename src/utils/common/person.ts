export type User = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  followers: number;
  following: number;
  companies?: [Company];
};

export type Company = {
  id: number;
  name: string;
};

export enum Person {
  PersonA = "PersonA",
  PersonB = "PersonB",
  PersonC = "PersonC",
}
