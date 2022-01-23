declare module '@jacshuo/bitui/Interfaces/APIAdapter/index' {
  export default interface APIAdapter {
      fetchData: () => Promise<any>;
      reloadData?: () => Promise<any>;
      success: (callback: (data: any) => void) => void;
      error: (callback: (res: any) => void) => void;
      loading: boolean;
  }

}
declare module '@jacshuo/bitui/Interfaces/Container/index' {
  import Dragable from '@jacshuo/bitui/Interfaces/Dragable/index';
  import Sizable from '@jacshuo/bitui/Interfaces/Sizable/index';
  export default interface Container extends Dragable, Sizable {
  }

}
declare module '@jacshuo/bitui/Interfaces/DataAdapter/index' {
  export default interface DataAdapter {
      serialize: (data: any) => string | JSON;
      update: (data: any | Object) => any | Object;
      getValueByKey: (key: string | any) => any | Object;
      data: any | Object;
  }

}
declare module '@jacshuo/bitui/Interfaces/Dragable/index' {
  export default interface Dragable {
      onDrag: (callback: (e: DragEvent) => void) => void;
  }

}
declare module '@jacshuo/bitui/Interfaces/Sizable/index' {
  export default interface Sizable {
      onResize: (callback: (e: any) => void) => void;
      onStartResize: (callback: (e: any) => void) => void;
      onEndResize: (callback: (e: any) => void) => void;
  }

}
declare module '@jacshuo/bitui/common/index' {
  const _default: {};
  export default _default;

}
declare module '@jacshuo/bitui/components/General/Typography/Link' {
  import React from 'react';
  const Link: React.FC<any>;
  export default Link;

}
declare module '@jacshuo/bitui/components/General/Typography/Paragraph' {
  import React from 'react';
  import './Paragraph.scss';
  export interface IParagraph {
      className?: string;
      style?: React.CSSProperties;
  }
  const Paragraph: React.FC<IParagraph>;
  export default Paragraph;

}
declare module '@jacshuo/bitui/components/General/Typography/Text' {
  import React, { FC, ReactNode } from 'react';
  import './Text.scss';
  export interface ICopyable {
      text: string;
      onCopy: () => void;
      icon: ReactNode;
      tooltips: false | [ReactNode, ReactNode];
  }
  export interface IEditable {
      icon: ReactNode;
      tooltip: boolean | ReactNode;
      editing: boolean;
      maxLength: number;
      autoSize: boolean | {
          minRows: number;
          maxRows: number;
      };
      onStart: () => void;
      onChange: (content: string) => void;
      onCancel: () => void;
      onEnd: () => void;
      triggerType: ('icon' | 'text')[];
      enterIcon: ReactNode;
  }
  export interface IEllipsis {
      rows: number;
      expandable: boolean;
      suffix: string;
      symbol: ReactNode;
      tooltip: boolean | ReactNode;
      onExpand: (event: React.MouseEvent) => void;
      onEllipsis: (ellipsis: IEllipsis) => void;
  }
  export interface ITextProps {
      code?: boolean;
      copyable?: boolean | ICopyable;
      delete?: boolean;
      disabled?: boolean;
      editable?: boolean | IEditable;
      ellipsis?: boolean | Omit<IEllipsis, 'expandable' | 'rows' | 'onExpand'>;
      keyboard?: boolean;
      mark?: boolean;
      onClick?: (e: React.MouseEvent<any, any>) => void;
      strong?: boolean;
      italic?: boolean;
      type?: 'secondary' | 'success' | 'warning' | 'danger';
      underline?: boolean;
      className?: string;
      theme?: 'light' | 'dark';
  }
  const Text: FC<ITextProps>;
  export default Text;

}
declare module '@jacshuo/bitui/components/General/Typography/Title' {
  import { FC } from 'react';
  import './Title.scss';
  export interface ITitle {
      theme?: 'light' | 'dark';
      level?: number;
      className?: string;
  }
  const Title: FC<ITitle>;
  export default Title;

}
declare module '@jacshuo/bitui/components/General/Typography/index' {
  /// <reference types="react" />
  const Typography: {
      Text: import("react").FC<import("./Text").ITextProps>;
      Title: import("react").FC<import("./Title").ITitle>;
      Link: import("react").FC<any>;
      Paragraph: import("react").FC<import("./Paragraph").IParagraph>;
  };
  export default Typography;

}
declare module '@jacshuo/bitui/components/index' {
  const _default: {};
  export default _default;

}
declare module '@jacshuo/bitui/index' {
  /// <reference types="react" />
  const _default: {
      Typography: {
          Text: import("react").FC<import("./components/General/Typography/Text").ITextProps>;
          Title: import("react").FC<import("./components/General/Typography/Title").ITitle>;
          Link: import("react").FC<any>;
          Paragraph: import("react").FC<import("./components/General/Typography/Paragraph").IParagraph>;
      };
  };
  export default _default;

}
declare module '@jacshuo/bitui' {
  import main = require('@jacshuo/bitui/src/index');
  export = main;
}