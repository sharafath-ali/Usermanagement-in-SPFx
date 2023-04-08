import * as React from 'react';
import styles from './Clear.module.scss';
import { sp } from './sp';

interface Props {
  keys: number;
  fn: string;
  ln: string;
  email: string;
  des: string;
  Id:number
}

const Product: React.FC<Props> = ({  fn, ln, email, des ,Id,keys}) => {

  function Delete(){
    console.log(Id)
    sp.web.lists.getByTitle("users").items.getById((Id)).delete()
  .then(() => {
    console.log("Item deleted successfully");
  })
  .catch((error) => {
    console.log(`Error deleting item: ${error}`);
  })}

  
function update(){
  
  const updatedFields = {
    first_name:'',
    last_name: '',
    email:'',
    designation:''
  };
  updatedFields.first_name = prompt('Enter first name',fn) || '';
  updatedFields.last_name = prompt('Enter first name',ln) || '';
  updatedFields.email = prompt('Enter email',email) || '';
  updatedFields.designation = prompt('Enter designation',des) || '';
  
sp.web.lists.getByTitle("users").items.getById(Id).update(updatedFields)
  .then(() => {
    console.log("Item updated successfully");
  })
  .catch((error) => {
    console.log(`Error updating item: ${error}`);
  });

  }
  
  
  return (
    <div className={styles.card}>
    <h1>{fn} {ln}</h1>
    <p className={styles.title}>{email}</p>
    <br/>
    <p>{des}{Id}</p>
    <br/>
    <button onClick={Delete}>Delete</button>
    <br/>
    <button onClick={update}>Update</button>
  </div>
  );
};

export default Product