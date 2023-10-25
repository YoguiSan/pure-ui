declare namespace PureUI.Toggle {
  interface Toggle {
    checked?: boolean;
    styles?: [];
    text?: string;
    onChange?: (event?: any) => any;
    key: string;
    checkedBackground?: string;
    uncheckedBackground?: string;
    disabled?: boolean;
  }
}