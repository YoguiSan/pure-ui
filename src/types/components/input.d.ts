declare namespace PureUI.Input {
  interface Input {
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "dropdown" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "select" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week";
    label?: string;
    value?: string;
    name?: string;
    onChange?: (event?: any) => void;
    variant?: 'regular' | 'underlined';
    classes?: string[];
    error?: boolean;
    errorMessage?: string;
    register?: () => any;
    fullWidth?: boolean;
    rows?: number;
    options?: [{
      value: string;
      text: string;
    }];
  }
}