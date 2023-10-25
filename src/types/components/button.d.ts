declare namespace PureUI.Button {
  interface Button {
    variant?: 'text' | 'contained' | 'outlined';
    padding?: string;
    type?: string;
    color?: string;
    text: string;
    icon?: React.ReactNode;
    fontColor?: string;
    onClick: (event?: any) => any;
    styles?: any;
    classes?: string[];
  }
}