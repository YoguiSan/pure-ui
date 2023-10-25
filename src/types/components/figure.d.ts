declare namespace PureUI.Image {
  interface Image {
    height?: number;
    width?: number;
    alt: string;
    caption?: string;
    src: string;
    captionBackground?: string;
    captionColor?: string;
    backgroundImage?: string;
    styles?: {[key: string]: string | number};
    unit?: 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc' | 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
    classes?: string | string[];
    buttonText?: string;
    buttonOnClick?: (event?: any) => void;
    buttonVariant?: string;
  }
}