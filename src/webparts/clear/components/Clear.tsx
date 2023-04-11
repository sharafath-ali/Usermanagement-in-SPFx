import * as React from 'react';
import { IClearProps } from './IClearProps';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Nav from './Navbar';
import styles from './Clear.module.scss';
import SProvider from './searchcontext';
import UserProvider from './context';
import Add from './AddUser';
import Documentsfolder from './Documentsfolder';
import Employeedetail from './Employeedetail';
import Listemployees from './ListEmployee';

export default class Clear extends React.Component<IClearProps, {}> {
  public render(): React.ReactElement<IClearProps> {
    
    return (
      <div className={styles.body1}>
      <UserProvider>
      <SProvider>
       <HashRouter>
        <Nav/>
        <Routes>
         <Route path='/' element={<Listemployees />} />
         <Route path='/add' element={<Add />} />
         <Route path='/Documents' element={<Documentsfolder />} />
         <Route path='employeedetail/:id' element={<Employeedetail/>} />
        </Routes>
       </HashRouter>
      </SProvider>
      </UserProvider>
    </div>
    );
  }
}
