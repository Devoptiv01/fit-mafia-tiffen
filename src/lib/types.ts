import { User } from "next-auth";


export type CarouselItem = {
    title: string;
    description: string;
    imageUrl: string;
  };

export type CarouselProps = {
  items: CarouselItem[];
};

export enum MealsPlanEnum {
    chefsChoice = "Chef's Choice",
    proteinPlus = "Protein Plus",
    poultryFishVeggie = "Poultry, Fish, & Veggie",
    calorieSmart = "Calorie Smart",
    keto = "Keto",
    glp1Balance = "GLP-1 Balance"
};

export enum EnterDeliveryInstructionEnum {
    leaveAtFrontDoor = "Leave at front door",
    leaveAtBackDoor = "Leave at back door",
    other = "Other"
}

export interface CredentialsProps {
  username: string;
  password: string;
}
export interface AuthorizedUserProps extends User {
  _id: string;
  username: string;
  // add other fields you return
}