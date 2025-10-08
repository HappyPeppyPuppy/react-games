import { FC, PropsWithChildren } from 'react';
import styles from './test.module.css';

export interface TestProps extends PropsWithChildren {
  isRed: boolean;
}

export const Test: FC<TestProps> = ({ isRed, children }) => {
  return <div className={isRed ? styles.red : styles.blue}>{children}</div>;
};
