import React, {FC, ReactNode} from 'react';
import './Text.scss';
import classNames from 'classnames';

export interface ICopyable {
  text: string,
  onCopy: () => void,
  icon: ReactNode,
  tooltips: false | [ReactNode, ReactNode],
}

export interface IEditable {
  icon: ReactNode,
  tooltip: boolean | ReactNode,
  editing: boolean,
  maxLength: number,
  autoSize: boolean | { minRows: number, maxRows: number },
  onStart: () => void,
  onChange: (content: string) => void,
  onCancel: () => void,
  onEnd: () => void,
  triggerType: ('icon' | 'text')[],
  enterIcon: ReactNode,
}

export interface IEllipsis {
  rows: number,
  expandable: boolean,
  suffix: string,
  symbol: ReactNode,
  tooltip: boolean | ReactNode,
  onExpand: (event: React.MouseEvent) => void,
  onEllipsis: (ellipsis: IEllipsis) => void,
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
  className?: string,
  theme?: 'light' | 'dark';
}

const Text: FC<ITextProps> = (props) => {
  const {
    code,
    // copyable,
    // disabled,
    // editable,
    // ellipsis,
    keyboard,
    mark,
    onClick,
    strong,
    italic,
    type,
    underline,
    className,
    children,
    theme,
  } = props;

  const clsNames = {
    [`${ type }`]: type,
    [`${ theme ?? 'light' }`]: true,
    className,
  };

  const renderNativeElement = (children: any) => {
    if (code) {
      return <code>{ children }</code>;
    }
    if (keyboard) {
      return <kbd>{ children }</kbd>;
    }
    if (strong) {
      return <strong>{ children }</strong>;
    }
    if (props.delete) {
      return <del>{ children }</del>;
    }
    if (underline) {
      return <u>{ children }</u>;
    }
    if (italic) {
      return <i>{ children }</i>;
    }
    if (mark) {
      return <mark>{ children }</mark>;
    }
    return <>{ children }</>;
  };

  return <span className={ classNames('bit-text', clsNames) }
    onClick={ onClick && ((e) => {
      onClick(e);
    }) }>
    { renderNativeElement(children) }
  </span>;
};

export default Text;
