import { TableCell, TableRow} from '@mui/material'
import React from 'react'

const Item = (user) => {
    
  return (
    <TableRow
      key={user.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {user.id}
      </TableCell>
      <TableCell align="center">{user.name}</TableCell>
      <TableCell align="center">{user.age}</TableCell>
      <TableCell align="center">{user.hobby}</TableCell>
      <TableCell align="center">{user.height}</TableCell>
    </TableRow>
  )
}

export default Item