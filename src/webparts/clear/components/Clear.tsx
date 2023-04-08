import * as React from 'react';
import { IClearProps } from './IClearProps';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Nav from './Nav1';
import styles from './Clear.module.scss';
import SProvider from './searchcontext';
import Listpro from './Listpro';
import UserProvider from './context';
import Add from './Add';

export default class Clear extends React.Component<IClearProps, {}> {
  public render(): React.ReactElement<IClearProps> {
    
    return (
      <div className={styles.body1}>
      <UserProvider>
      <SProvider>
       <HashRouter>
        <Nav/>
        <Routes>
         <Route path='/' element={<Listpro />} />
         <Route path='/add' element={<Add />} />
        </Routes>
       </HashRouter>
      </SProvider>
      </UserProvider>
    </div>
    );
  }
}
