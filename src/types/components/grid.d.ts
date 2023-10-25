declare namespace PureUI.Grid {
  interface Grid {
    children: React.ReactNode | HTMLElement
  }
}

declare namespace PureUI.Row {
  interface Row {
    children: React.ReactNode | HTMLElement;
    condensed?: boolean;
    narrow?: boolean;
    noBoxSizing?: boolean;
    overflow?: string;
    padding?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    allowOverflow?: boolean;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
    flexDirection?: 'row' | 'column';
  }
}

declare namespace PureUI.Column {
  interface Column extends PureUI.Row.Row {
  }
}