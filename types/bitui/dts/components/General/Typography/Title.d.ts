import { FC } from 'react';
import './Title.scss';
export interface ITitle {
    theme?: 'light' | 'dark';
    level?: number;
    className?: string;
}
declare const Title: FC<ITitle>;
export default Title;
