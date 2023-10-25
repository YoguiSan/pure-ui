declare namespace PureUI.CookiesModal {
  interface CookiesModal {
    fields: [{
      name: string,
      key: string,
      required?: boolean,
      accepted?: boolean,
    }];
    open?: bool;
    title?: string;
    description?: string;
    acceptButtonText?: string;
    acceptButtonVariant?: string;
    acceptButtonFontColor?: string;
    acceptButtonColor?: string;
    rejectButtonText?: string;
    rejectButtonVariant?: string;
    rejectButtonColor?: string;
    rejectButtonFontColor?: string;
    savePreferences: (event?: any) => void;
    customizeButtonText?: string;
    confirmChoicesButtonText?: string;
    customizeSettingsTitle?: string;
    readMoreText?: string;
    readMoreUrl?: string;
    setOpen?: boolean;
    confirmChoicesButtonColor?: string;
    confirmChoicesButtonFontColor?: string;
  }
}