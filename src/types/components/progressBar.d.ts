declare namespace PureUI.ProgressBar {
  interface ProgressBar {
    progress: number;
    variant?: 'plain' | 'striped';
    type?: 'primary' |
    'secondary' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'fatal';
    text?: string;
    transitionDuration?: number;
  }
}