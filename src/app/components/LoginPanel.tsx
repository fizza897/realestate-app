import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from '@nextui-org/react'
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React from 'react'

const SignInPanel = async () => {

  const {isAuthenticated,getUser}=await getKindeServerSession()
  const user =await getUser()
  
  if(await isAuthenticated())
    return <div className='gap-5 inline-flex justify-center'>{user?.given_name}
  
    <LogoutLink>Logout</LogoutLink>


    </div>


  return (
    <div className='flex gap-3'>
      <Button color='primary'>
      <LoginLink>Login</LoginLink>
      </Button>
      <Button>
      <RegisterLink>Register</RegisterLink>
      </Button>
    </div>
  )
}

export default SignInPanel;