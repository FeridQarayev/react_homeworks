import { Button, TableCell, TableRow} from '@mui/material'
import React from 'react'

const Item = (user) => {
    
  
  console.log(user.onclick)
  return (
    <TableRow
      key={user.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 },"td":{color:"white"}}}
    >
      <TableCell component="td" scope="row">
        {user.id}
      </TableCell>
      <TableCell align="center">{user.name}</TableCell>
      <TableCell align="center">{user.age}</TableCell>
      <TableCell align="center">{user.hobby}</TableCell>
      <TableCell align="center">{user.height}</TableCell>
      <TableCell align="center"><Button variant="outlined" color="error" onClick={()=>user.onclick(user.id)}>Delete</Button></TableCell>
    </TableRow>
  )
}

export default Item