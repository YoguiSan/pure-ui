declare namespace PureUI.Carousel {
  interface Carousel {
    images: string[] | [{
      alt: string;
      src: string;
      caption?: string;
    }];
    current?: number,
    setCurrent?: (event?: any) => void;
    classes?: string | string[];
  }
}