declare namespace PureUI.Form {
  interface Form {
    inputs: [{
      name: string;
      type: string;
      variant: string;
      label: string;
      value: string;
      onChange: (event?: any) => void;
      classes: string[];
    }];
    children?: React.ReactNode[] | HTMLElement[];
    inputExtraSmall?: number;
    inputSmall?: number;
    inputMedium?: number;
    inputLarge?: number;
    inputExtraLarge?: number;
    onSubmit?: (event?: any) => void;
    onCancel?: (event?: any) => void;
    childrenPosition?: 'start' | 'end';
    submitButtonText?: string;
    cancelButtonText?: string;
    submitButtonVariant?: string;
    cancelButtonVariant?: string;
    submitButtonColor?: string;
    cancelButtonColor?: string;
    submitButtonFontColor?: string;
    cancelButtonFontColor?: string;
    direction?: 'row' | 'column';
  }
}