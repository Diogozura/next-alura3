import { useRouter } from "next/router"
import { tokenService } from "../src/services/auth/tokenService"
import React from 'react'
import { HttpClient } from "../src/infra/HttpClient/HttpClient"

export default function LougoutPage() {
  const router = useRouter()
  
  
  React.useEffect(async () => {
    try {
      await HttpClient('/api/refresh', {
        method: 'DELETE'
      })
      tokenService.delete()
      router.push('/')
    }
    catch (err){
      alert(err.message)
    }
  },[])
  return (
    <div>
      Você será redirecionado em instantes ...
    </div>
  )
}
