declare namespace PureUI.Title {
  interface Title {
    type?: 'title' |
      'subtitle' |
      'h1' |
      'h2' |
      'h3' |
      'h4' |
      'h5' |
      'h6' |
      '1' |
      '2' |
      '3' |
      '4' |
      '5' |
      '6';
    text: string;
    children?: React.ReactNode | HTMLElement;
    align?: "left" |
      "center" |
      "right";
    icon?: string;
    iconPosition?: 'left' | 'right';
    iconHeight?: number;
    iconWidth?: number;
    unit?: 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc' | 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
  }
}