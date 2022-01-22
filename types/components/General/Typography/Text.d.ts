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
declare const Text: FC<ITextProps>;
export default Text;
