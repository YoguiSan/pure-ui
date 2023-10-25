declare namespace PureUI.TopMenu {
  interface TopMenu {
    menuItems: string | { [key: string]: string | { [key: string]: string } };
    menuItemWidth?: number;
    menuBorderBottom?: string;
    menuItemBackground?: string;
    menuDropdownBackground?: string;
    menuDropdownColor?: string;
    menuItemBorder?: string;
    menuItemColor?: string;
    menuItemBackgroundHover?: string;
    menuItemBorderHover?: string;
    menuItemColorHover?: string;
    menuItemFontSize?: number;
    unit?: 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc' | 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
    background?: string;
    logo?: React.ReactNode | HTMLElement;
    logoAlt?: string;
    logoHref?: string;
  }
}