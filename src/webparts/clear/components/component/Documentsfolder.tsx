import * as React from 'react';
import styles from '../Clear.module.scss';
import { Link } from 'react-router-dom';
import UploadAndDisplayImage from './Uploadimage';
import { useParams } from 'react-router-dom';
export interface IProps {

}//`employeedetail/${Number(id)}`

export default function Documentsfolder (props: IProps){
  const { id } = useParams();
  console.log(id)
  return (
    <><div className={styles.section2}>
      <Link className={styles.button1} to={`/employeedetail/${Number(id)}`}>
        Profile
      </Link>
      <Link className={styles.button1} to={'/Documents'}>
        Documents
      </Link>
    </div>
<UploadAndDisplayImage/>
    </>
  );
}
