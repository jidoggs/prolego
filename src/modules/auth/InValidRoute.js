import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../common/component/CustomButton/CustomButton'

function InValidRoute() {
    const navigate = useNavigate()
  return (
      <>
    <div>InValidRoute</div>
    <CustomButton actionName='Go back home' type='OUTLINE' onClick={() => navigate("/")} />
      </>
  )
}

export default InValidRoute