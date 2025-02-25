export class EasyMdeConfig {
  style?: "default";
  delay?: number;
  options?: EasyMdeOptions;
}

export interface EasyMdeOptions {
  [key: string]:any;
  autosaver?: {
    enabled?: boolean;
    uniqueId?: string;
    delay?: number;
  };
  blockStyles?: {
    bold?: string;
    italic?: string;
    code?: string;
  };
  forceSync?: boolean;
  hideIcons?: string[];
  indentWithTabs?: boolean;
  intertTexts?: {
    horizontalRule?: string[];
    image?: string[];
    link?: string[];
    table?: string[];
  };
  parsingConfig?: {
    allowAtxHeaderWithoutSpace?: boolean;
    strikethrough?: boolean;
    underscoresBreakWords?: boolean;
  };
  placeholder?: string;
  previewRender?: (plainText: string, preview?: HTMLElement) => string;
  promptURLs?: boolean;
  renderingConfig?: {
    singleLineBreaks?: boolean;
    codeSyntaxHighlighting?: boolean;
  };
  shortcuts?: { [key: string]: any };
  showIcons?: string[];
  spellChecker?: boolean;
  status?: boolean;
  styleSelectedText?: boolean;
  tabSize?: number;
  toolbar?: boolean;
  toolbarTips?: boolean;
}
