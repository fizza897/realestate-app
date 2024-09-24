import { getKindeServerSession, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from '@nextui-org/react'
import React from 'react'

const LoginPanel = async () => {
    const {isAuthenticated,getUser} =await getKindeServerSession()
    const user = await getUser()
    if(await isAuthenticated())
         return 
        <div>{user?.given_name}</div>
  return (
    <>
    <div className='flex gap-3'>
            <Button color='primary'>
                <LoginLink>Login</LoginLink>
            </Button>
            <Button color='primary'>
                <LoginLink>Register</LoginLink>
            </Button>
    </div>
    
    </>
  )
}

export default LoginPanel