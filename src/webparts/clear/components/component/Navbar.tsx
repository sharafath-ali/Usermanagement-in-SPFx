import * as React from 'react';
import styles from '../Clear.module.scss';
export interface IProps {

}
export default function Nav (props: IProps){
  return (
      <nav className={styles.nav}>
      <h2>User Management</h2>
      </nav>
  );
}

