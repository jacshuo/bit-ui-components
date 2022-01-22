import React from 'react';
import './Paragraph.scss';
export interface IParagraph {
    className?: string;
    style?: React.CSSProperties;
}
declare const Paragraph: React.FC<IParagraph>;
export default Paragraph;
