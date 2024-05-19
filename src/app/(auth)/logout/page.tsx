'use server';

import { signOut } from "next-auth/react";
import {  cloneElement, ReactElement } from "react";

export async function handleSignOut() {
  try{
    
    const result=await signOut();
    return result;

  }catch(error){
   console.log(error)
  }
 
}

interface ServerComponentProps {
  children: (props: { handleSignOut: () => Promise<void> }) => ReactElement;
}

const ServerComponent: React.FC<ServerComponentProps> = ({ children }) => {
  return cloneElement(children({ handleSignOut }));
};

export default ServerComponent;