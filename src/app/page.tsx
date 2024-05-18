'use client'
import { Button, Link } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";
import { Fa1 } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello..</h1>
      <Button as={Link} href='/members' color='primary' variant='bordered' startContent={<FaRegSmile size={20}/>}>
        Click me!
      </Button>
    </div>
  );
}
