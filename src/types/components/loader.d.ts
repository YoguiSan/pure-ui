declare namespace PureUI.Loader {
  interface Loader {
    open?: boolean;
    spinning?: boolean;
    blinking?: boolean;
    icon?: React.ReactNode |
      HTMLElement |
      'brokenCircle' | 
      'chasingArrows' | 
      'clock' | 
      'flowingGradient' | 
      'fourSegments' | 
      'gear' | 
      'radar' | 
      'roundedBlocks' | 
      'spinningLine' | 
      'surroundedIndicator';
    random?: boolean;
    modalBackground?: string;
    iconBackground?: string;
    classes?: string[];
  }
}