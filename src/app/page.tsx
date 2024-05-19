'use client'
import { auth } from "@/auth";
import { Button, Link } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { FaRegSmile } from "react-icons/fa";
import { handleSignOut } from "./(auth)/logout/page";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1 className="text-3xl">Hello..</h1>
      <h3 className='text-2xl font-semibold'></h3>
      {session?(
        <div>
          <pre>{JSON.stringify(session,null,2)}</pre>
          <form>
          <Button 
            type='submit'
            color='primary' 
            variant='bordered' 
            startContent={<FaRegSmile size={20}/>}
          >
            
        Sign Out

      </Button>
          </form>
        </div> 
      ):(
      <div>
          Not signed in
      </div>
    )}
    
    </div>
  );
}
