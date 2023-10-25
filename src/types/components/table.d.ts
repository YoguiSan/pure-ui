declare namespace PureUI.Table {
  interface Table {
    id?: string;
    title?: string;
    header: {};
    rows: [{}];
    headerBackground?: string;
    headerColor?: string;
    striped?: boolean;
    bordered?: boolean;
    headerBordered?: boolean;
    borderColor?: string;
    headerBorderColor?: string;
    stripeColor?: string;
    background?: string;
    fontColor?: string;
  }
}