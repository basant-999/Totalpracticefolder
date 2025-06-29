import React from 'react'
import { useParams } from 'react-router-dom'

const StoreDetails = () => {
    const {id} = useParams()
  return (
    <div>StoreDetails {id}</div>
  )
}

export default StoreDetails