import * as React from 'react';
import  { useState } from 'react'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from "react-router-dom";
import styles from '../Clear.module.scss';
import { useContext } from 'react';
import { UserContext } from '../context/context';
import { sp } from '../sp';

interface User {
    first_name: string;  
    last_name: string;
    email: string;
    designation: string;
  }
  
  function Add() {
    const { users, setusers } = useContext(UserContext)
    const [email, setemail] = useState<string>('')
    const [fn, setfn] = useState<string>('')
    const [des, setdes] = useState<string>('')
    const [ln, setln] = useState<string>('')
    const navigate = useNavigate();
  
    function handleClick() {
      navigate('/');
    }
  
    function save() {
      const newUser: User = { first_name: fn, last_name: ln, email: email , designation : des};
      setusers([...users, newUser]);
      navigate('/');
     sp.web.lists.getByTitle("users").items.add(newUser)
     .then((result) => {
      console.log(`New item added successfully with ID: ${result.data.Id}`);
      const folderName = result.data.Id
      const documentLibraryName = "EmployeeLibrary";
      const newFolderName =  `${folderName}`;
      const documentLibrary = sp.web.lists.getByTitle(documentLibraryName);
      documentLibrary.rootFolder.folders.addUsingPath(newFolderName)
     .then(() => {
      console.log(`Folder '${newFolderName}' created successfully.`);
     })
     .catch((error) => {
      console.error(`Error creating folder: ${error}`);
     });
     })
    .catch((error) => {
     console.log(`Error adding new item: ${error}`);
     });
    }
  
    return (<>
    
      <div className={styles.container}>
        <IconButton onClick={handleClick}><ArrowBackIcon />BACK</IconButton>
  
        <label htmlFor="uname"><b>Firstname</b></label>
        <input type="text" className={styles.tet1} placeholder="Firstname" name="uname" onChange={(e) => setfn(e.target.value)} required />
  
        <label htmlFor="psw"><b>Lastname</b></label>
        <input type='text' className={styles.tet1}  placeholder="Lastname" name="psw" onChange={(e) => setln(e.target.value)} required />
  
        <label htmlFor="Email"><b>Email</b></label>
        <input type='email' className={styles.email1} placeholder="Email" name="Email" onChange={(e) => setemail(e.target.value)} required />
  
        <label htmlFor="designation"><b>Designation</b></label>
        <input type='email' className={styles.email1}  placeholder="Designation" name="designation" onChange={(e) => setdes(e.target.value)} required />
  
        <button type="submit"  onClick={save}>Save info</button>
  
      </div>
      </>
    )
  }
  
  export default Add;
  