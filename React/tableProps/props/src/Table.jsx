import React from 'react'

const Table = (props) => {
  return (
   <>
       <tr>
        <th>{props.name}</th>
        <th>{props.age}</th>
        <th>{props.mob}</th>
       </tr>
   </>
  )
}

export default Table