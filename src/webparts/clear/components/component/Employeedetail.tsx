import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { sp } from '../sp';
import { useEffect, useState } from 'react';
import styles from '../Clear.module.scss';


export interface IProps {

}
export default function  Employeedetail (props: IProps){
  //const navigate = useNavigate();
  const [data, setdata] = useState<any>()
  // const [name, setname] = useState('')
  // const [des, setdes] = useState('')
  // const [email, setemail] = useState('')
  let {id} = useParams();
  {/*function handleClick() {
    navigate(`/employeedetail/${Number(id)}`);
  }*/}
  useEffect(() => {
    async function getuser() {
      const item: any =await sp.web.lists.getByTitle('users').items.getById(Number(id))()
      console.log('item=',item)
      setdata(item)//error data were missing
      //set each
      // setname(item.first_name+' '+item.last_name)
      // setdes(item.designation)
      // setemail(item.email)
      // console.log('sseted',data)
    }
    getuser()

  }, [])
  
  console.log('data',data)
if(!data) return <>loading...</>

  return (
    <><div className={styles.section2}>
      {/*<div className={styles.button1}  onClick={handleClick} >
        Profile
      </div>*/}
      <Link className={styles.button1} to={`/`}>
        Home
     </Link>
      <Link className={styles.button1} to={`/employeedetail/${Number(id)}`}>
        Profile 
      </Link>
      <Link className={styles.button1} to={`/Documents/${Number(id)}`}>
        Documents
      </Link>
    </div><div className={styles.employcontainer}>
      <div className={styles.image}>
       <img src={`${data?.Image_url}`} alt="Employee"/>
      </div>
        <h1>Name: <span className={styles.space}>{data?.first_name} {data?.last_name}</span></h1>
        <h2>Designation: <span className={styles.space}>{data?.designation}</span></h2>
        <h2>Email: <span className={styles.space}>{data?.email}</span></h2>
      </div>
      </>
  )
}
