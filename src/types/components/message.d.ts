import Styles from '../styles';

declare namespace PureUI.Message {
  interface Message {
    text?: string;
    type?:  'success' |
    'info' |
    'warning' | 
    'error' | 
    'fatal';
    timeout?: number;
    classes?: string[];
    handleClose?: (event?: any) => any;
    closeButtonIcon?: React.ReactNode | HTMLElement;
    closeDelay?: number;
    position?: 'top-left' |
    'top-center' |
    'top-right' |
    'middle-left' |
    'middle-center' |
    'middle-right' |
    'bottom-left' |
    'bottom-center' |
    'bottom-right';
    openAnimation?: 'open';
    closeAnimation?: 'close';
    show?: boolean;
  }
}