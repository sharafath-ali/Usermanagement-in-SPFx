import { createContext } from "react";
import * as React from 'react';
import { useState } from "react";
import { sp } from "../sp";



export const UserContext = createContext<any>('');
type Props = {
    children: React.ReactNode;
}

const UserProvider = (Props: Props) => {
    const [users, setusers] = useState([])
    
    React.useEffect(() => {(async () => {
      const items: any = await sp.web.lists.getByTitle("users").items();
      console.log(items)
      const newUsers = items.map((item: any) => ({
      first_name: item.first_name,
      last_name:item.last_name,
      email: item.email,
      designation: item.designation,
      Id: item.Id,
      Image_url:item.Image_url
       }));
      setusers(newUsers);
      
      })();
       }, []);

    return (
      <UserContext.Provider value={{ users,setusers}}>
        {Props.children}
      </UserContext.Provider>
    );
  };

export default UserProvider