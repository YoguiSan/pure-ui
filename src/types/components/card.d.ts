declare namespace PureUI.Card {
  interface Card {
    image?: string,
    imageAlt?: string,
    imageWidth?: number,
    padding?: number,
    unit?: number,
    title?: string,
    subtitle?: string,
    titleAlign?: string,
    subtitleAlign?: string,
    text?: string,
    children?: React.ReactNode | HTMLElement,
    classes?: string[],
    onClick?: (event?: any) => any,
  }
}