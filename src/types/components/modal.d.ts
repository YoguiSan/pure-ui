declare namespace PureUI.Modal {
  interface Modal {
    title?: string;
    children: React.ReactNode | HTMLElement;
    open?: boolean;
    setOpen: (event?: any) => any;
    classes?: string[];
  }
}