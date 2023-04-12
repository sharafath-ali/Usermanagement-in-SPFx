import * as React from 'react';
import styles from '../Clear.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AddImage from './Addimage';
export interface IProps {

}//`employeedetail/${Number(id)}`

export default function Documentsfolder (props: IProps){
  let {id} = useParams();
  console.log(id)
  return (
    <><div className={styles.section2}>
      <Link className={styles.button1} to={`/`}>
        Home
    </Link>
     <Link className={styles.button1} to={`/employeedetail/${id}`}>
        Profile
    </Link>
      <Link className={styles.button1} to={`/Documents/${id}`}>
        Documents
      </Link>
    </div>
     <AddImage id={id}/>
    </>
  );
}
