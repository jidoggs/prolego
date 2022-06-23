import { useGoogleOneTapLogin } from '@react-oauth/google';
import React from 'react'

function GoogleAuth() {
    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            console.log(credentialResponse,"use");
        },
       onError: res => console.log(res,"useerr")
    });
  return (
    <>
    </>
  )
}

export default GoogleAuth