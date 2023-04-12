import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Navbar'
import Listemployees from './component/Home'
import Add from './component/AddUser'
import Documentsfolder from './component/Documentsfolder'
import Employeedetail from './component/Employeedetail'
import styles from './Clear.module.scss'
import UserProvider from './context/context'
import SProvider from './context/searchcontext'

type Props = {}

export default function App({}: Props) {
  return (
    <div className={styles.body1}>
    <UserProvider>
    <SProvider>
    <HashRouter>
    <Nav/>
    <Routes>
     <Route path='/' element={<Listemployees />} />
     <Route path='/add' element={<Add />} />
     <Route path='/Documents/:id' element={<Documentsfolder />} />
     <Route path='employeedetail/:id' element={<Employeedetail/>} />
    </Routes>
    </HashRouter>
    </SProvider>
    </UserProvider>
   </div>
  )
}