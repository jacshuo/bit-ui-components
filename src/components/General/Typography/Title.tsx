import React, {FC} from 'react';
import classNames from 'classnames';
import './Title.scss';

export interface ITitle {
  theme?: 'light' | 'dark';
  level?: number;
  className?: string;
}

const Title: FC<ITitle> = ({level, theme, children, className}) => {
  const cls = classNames('bit-title', {
    [`${ theme ?? 'light' }`]: true,
  });
  const renderTitle = (level?: number) => {
    switch (level) {
      case undefined:
      case 1:
        return <h1
          className={ classNames(cls, 'h1', className) }>{ children }</h1>;
      case 2:
        return <h2
          className={ classNames(cls, 'h2', className) }>{ children }</h2>;
      case 3:
        return <h3
          className={ classNames(cls, 'h3', className) }>{ children }</h3>;
      case 4:
        return <h4
          className={ classNames(cls, 'h4', className) }>{ children }</h4>;
      case 5:
        return <h5
          className={ classNames(cls, 'h5', className) }>{ children }</h5>;
    }
  };
  return <>
    { renderTitle(level) }
  </>;
};

export default Title;
