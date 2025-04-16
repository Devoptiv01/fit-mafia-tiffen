
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

