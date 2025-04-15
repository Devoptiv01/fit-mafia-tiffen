export type CarouselItem = {
    title: string;
    description: string;
    imageUrl: string;
  };

export type CarouselProps = {
  items: CarouselItem[];
};
