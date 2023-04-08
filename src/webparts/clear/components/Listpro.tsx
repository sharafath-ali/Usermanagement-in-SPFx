import { useContext } from 'react'
import { UserContext } from './context'
import { SContext } from './searchcontext'
import styles from './Clear.module.scss';
import Product from './Product'
import Section from './Section'
import * as React from 'react'
type Props = {}

export default function Listpro({}: Props) {
  const {users}=useContext(UserContext)
  console.log(users)
    const {filter}=useContext(SContext)
  return (
    <>
    <Section />
    <div className={styles.Listing}>
     {
      
     users.filter((user: {first_name: string, last_name: string, email: string, designation: string,Id:number}) => user.first_name.toLowerCase().includes(filter)).map((user: {first_name: string, last_name: string, email: string, designation: string ,Id:number}, index: number) => {
     return <Product keys={index} fn={user.first_name} ln={user.last_name} email={user.email} des={user.designation} Id={user.Id} />
     }) 
     }
    </div>
    </>
  )
}