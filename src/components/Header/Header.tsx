import React from 'react'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <div className=" border-b-2 shadow-b ">
        <div className="mx-4 my-2 flex justify-between">
            <div>
            <p className="text-bold text-4xl">TECHGLITZ</p>
            </div>
            <div className="flex m-2 space-x-4">
            <Button>Login</Button>
            <Button>SignUp</Button>
            </div>
        </div>
    </div>
  );
}
