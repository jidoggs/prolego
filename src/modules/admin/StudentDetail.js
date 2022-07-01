import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetail() {
    const {student} = useParams()
    console.log(student)
  return (
    <div>StudentDetail</div>
  )
}

export default StudentDetail